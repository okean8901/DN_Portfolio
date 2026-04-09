import { put, list } from '@vercel/blob';

const BLOB_PREFIX = 'dn-portfolio/';
const BLOB_KEY = `${BLOB_PREFIX}badges.json`;

function json(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
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

async function readLatestBadges() {
  // List and pick latest by uploadedAt if multiple exist.
  const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 100 });
  const latest = blobs
    .filter((b) => b.pathname === BLOB_KEY)
    .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())[0];

  if (!latest?.url) return null;

  const resp = await fetch(latest.url, { cache: 'no-store' });
  if (!resp.ok) return null;
  return await resp.json();
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await readLatestBadges();
      return json(res, 200, { ok: true, badges: Array.isArray(data) ? data : null });
    }

    if (req.method === 'PUT') {
      const token = getBearerToken(req);
      const expected = process.env.ADMIN_TOKEN;
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
        return json(res, 400, { ok: false, error: 'badges_must_be_array' });
      }

      const contentType = 'application/json';
      const blob = await put(BLOB_KEY, JSON.stringify(parsed, null, 2), {
        access: 'public',
        contentType,
        addRandomSuffix: false,
      });

      return json(res, 200, { ok: true, url: blob.url });
    }

    res.setHeader('Allow', 'GET, PUT');
    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  } catch (e) {
    return json(res, 500, { ok: false, error: 'server_error' });
  }
}

