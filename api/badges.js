import admin from 'firebase-admin';

const COLLECTION = 'site';
const DOC = 'badge';

function json(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.end(JSON.stringify(body));
}

function getBearerToken(req) {
  const header = req.headers?.authorization || req.headers?.Authorization;
  if (!header || typeof header !== 'string') return null;
  const m = header.match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

async function readRawBody(req) {
  return await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 2_000_000) reject(new Error('body_too_large'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function getAdminApp() {
  if (admin.apps?.length) return admin.app();

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('missing_service_account');

  const serviceAccount = JSON.parse(raw);
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

function getDb() {
  getAdminApp();
  return admin.firestore();
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const db = getDb();
      const snap = await db.collection(COLLECTION).doc(DOC).get();
      const items = snap.exists ? snap.data()?.items : [];
      return json(res, 200, { ok: true, items: Array.isArray(items) ? items : [] });
    }

    if (req.method === 'PUT') {
      const expected = process.env.ADMIN_TOKEN;
      const token = getBearerToken(req);
      if (!expected || token !== expected) {
        return json(res, 401, { ok: false, error: 'unauthorized' });
      }

      const body = typeof req.body === 'string' ? req.body : await readRawBody(req);
      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch {
        return json(res, 400, { ok: false, error: 'invalid_json' });
      }

      if (!Array.isArray(parsed)) {
        return json(res, 400, { ok: false, error: 'items_must_be_array' });
      }

      const db = getDb();
      await db.collection(COLLECTION).doc(DOC).set({ items: parsed }, { merge: true });
      return json(res, 200, { ok: true });
    }

    res.setHeader('Allow', 'GET, PUT');
    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  } catch (e) {
    return json(res, 500, { ok: false, error: 'server_error', detail: String(e?.message || e) });
  }
}
