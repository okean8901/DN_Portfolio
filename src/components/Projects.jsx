import React from 'react';

const projectMeta = { fontFamily: 'var(--font-mono)', fontSize: '0.63rem', marginBottom: '0.4rem', letterSpacing: '0.04em' };
const projectH4 = { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.6rem', color: 'var(--text)' };
const projectP = { color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.75, marginBottom: '0.9rem' };

export function Projects() {
  const DEFAULT_BADGES = [
    { id: 'b1', title: 'Google AI Essentials V1', issuer: 'Coursera', issued: 'Issued Mar 12, 2026', img: '/chungchi.jfif' },
    { id: 'b2', title: 'Google Project Management Professional Certificate(v.3)', issuer: 'Coursera', issued: 'Issued Mar 13, 2026', img: '/chungchi.jfif' },
    { id: 'b3', title: 'Google Prompting Essentials', issuer: 'Coursera', issued: 'Issued Mar 12, 2026', img: '/chungchi.jfif' },
    { id: 'b4', title: 'PMI Essentials M.O.R.E. Maximizing Project Success', issuer: 'Project Management Institute', issued: 'Issued Apr 1, 2026', img: '/chungchi.jfif' },
    { id: 'b5', title: 'PMI® Essentials: Seven AI Project Patterns', issuer: 'Project Management Institute', issued: 'Issued Mar 31, 2026', img: '/chungchi.jfif' },
  ];

  const ADMIN_LS_KEY = '123';
  const BADGES_LS_KEY = '123';
  const ADMIN_PASSPHRASE = '123';
  const ADMIN_TOKEN_LS_KEY = '123';
  const API_BADGES = '/api/badges';

  const [isAdmin, setIsAdmin] = React.useState(() => localStorage.getItem(ADMIN_LS_KEY) === '1');
  const [badges, setBadges] = React.useState(() => {
    try {
      const raw = localStorage.getItem(BADGES_LS_KEY);
      if (!raw) return DEFAULT_BADGES;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : DEFAULT_BADGES;
    } catch {
      return DEFAULT_BADGES;
    }
  });
  const [syncState, setSyncState] = React.useState('idle'); // idle | loading | saving | error

  React.useEffect(() => {
    try {
      localStorage.setItem(BADGES_LS_KEY, JSON.stringify(badges));
    } catch {
      // ignore
    }
  }, [badges]);

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setSyncState('loading');
      try {
        const resp = await fetch(`${API_BADGES}?t=${Date.now()}`, { method: 'GET', cache: 'no-store' });
        if (!resp.ok) throw new Error('bad_response');
        const data = await resp.json();
        if (!cancelled && data?.ok && Array.isArray(data.badges)) {
          setBadges(data.badges);
        }
        if (!cancelled) setSyncState('idle');
      } catch {
        if (!cancelled) setSyncState('error');
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    let hits = [];
    const onKeyDown = (e) => {
      if (!e.altKey || !e.shiftKey) return;
      if (e.key.toLowerCase() !== 'a') return;

      const now = Date.now();
      hits = hits.filter((t) => now - t < 1500);
      hits.push(now);

      if (hits.length < 3) return;
      hits = [];

      if (localStorage.getItem(ADMIN_LS_KEY) === '1') {
        localStorage.removeItem(ADMIN_LS_KEY);
        setIsAdmin(false);
        return;
      }

      const pass = window.prompt('Admin passphrase');
      if (pass && pass.trim() === ADMIN_PASSPHRASE) {
        localStorage.setItem(ADMIN_LS_KEY, '1');
        setIsAdmin(true);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const addBadge = () => {
    const title = window.prompt('Title');
    if (!title) return;
    const issuer = window.prompt('Issuer') ?? '';
    const issued = window.prompt('Issued (e.g. "Issued Mar 12, 2026")') ?? '';
    const img = window.prompt('Image URL/path (e.g. "/chungchi.jfif")') ?? '/chungchi.jfif';
    setBadges((prev) => [{ id: `b_${Date.now()}`, title, issuer, issued, img }, ...prev]);
  };

  const editBadge = (id) => {
    const current = badges.find((b) => b.id === id);
    if (!current) return;
    const title = window.prompt('Title', current.title);
    if (!title) return;
    const issuer = window.prompt('Issuer', current.issuer) ?? '';
    const issued = window.prompt('Issued', current.issued) ?? '';
    const img = window.prompt('Image URL/path', current.img) ?? current.img;
    setBadges((prev) => prev.map((b) => (b.id === id ? { ...b, title, issuer, issued, img } : b)));
  };

  const deleteBadge = (id) => {
    if (!window.confirm('Delete this badge?')) return;
    setBadges((prev) => prev.filter((b) => b.id !== id));
  };

  const saveBadgesToServer = async () => {
    const existing = localStorage.getItem(ADMIN_TOKEN_LS_KEY) || '';
    const token = window.prompt('Admin token (Bearer)', existing) ?? '';
    if (!token.trim()) return;
    localStorage.setItem(ADMIN_TOKEN_LS_KEY, token.trim());

    setSyncState('saving');
    try {
      const resp = await fetch(API_BADGES, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.trim()}`,
        },
        body: JSON.stringify(badges),
      });
      const data = await resp.json().catch(() => null);
      if (!resp.ok || !data?.ok) {
        const msg = data?.error ? `${data.error}` : `http_${resp.status}`;
        throw new Error(msg);
      }
      setSyncState('idle');
      window.alert('Saved.');
    } catch {
      setSyncState('error');
      window.alert('Save failed. (Tip: local Vite dev does not serve /api. Use Vercel deploy or vercel dev.)');
    }
  };

  return (
    <section id="projects">
      <div className="container">

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
          <div className="section-chip">Portfolio</div>
          <h2 className="sec-title" style={{ marginTop: '0.5rem' }}>
            Certifications &amp; <em>Projects</em>
          </h2>
        </div>

        {/* ══════════════════════════════
            CERTIFICATIONS — Badge Wallet
        ══════════════════════════════ */}
        <h3 className="subsec-label reveal">CERTIFICATIONS</h3>

        <div className="bw-shell reveal d1" aria-label="Badge">
          <div className="bw-header">
            <div className="bw-title">Badge</div>
            <div className="bw-actions">
              {isAdmin ? (
                <>
                  <button type="button" className="bw-btn bw-btn--primary" onClick={addBadge}>+ Add Badge</button>
                  <button type="button" className="bw-btn" onClick={saveBadgesToServer} disabled={syncState === 'saving'}>
                    {syncState === 'saving' ? 'Saving…' : 'Save'}
                  </button>
                  <button
                    type="button"
                    className="bw-btn"
                    onClick={() => {
                      localStorage.removeItem(BADGES_LS_KEY);
                      setBadges(DEFAULT_BADGES);
                    }}
                  >
                    Reset
                  </button>
                </>
              ) : (
                <>
                  <button type="button" className="bw-btn bw-btn--primary">+ Upload Other Badges</button>
                  <button type="button" className="bw-btn bw-btn--ghost">Reorder/Edit</button>
                </>
              )}
            </div>
          </div>

          <div className="bw-grid" aria-label="Credly badges">
            {badges.map((b) => (
              <div className="bw-card" key={b.id}>
                <div className="bw-card-art">
                  <img className="bw-card-img" src={b.img} alt="" />
                </div>
                <div className="bw-card-body">
                  <div className="bw-card-title">{b.title}</div>
                  <div className="bw-card-issuer">{b.issuer}</div>
                  <div className="bw-card-date">{b.issued}</div>
                  {isAdmin ? (
                    <div className="bw-admin-row">
                      <button type="button" className="bw-admin-btn" onClick={() => editBadge(b.id)}>Edit</button>
                      <button type="button" className="bw-admin-btn bw-admin-btn--danger" onClick={() => deleteBadge(b.id)}>Delete</button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* ══════════════════════════════
            KEY PROJECTS
        ══════════════════════════════ */}
      <h3 className="subsec-label reveal" style={{ marginTop: '2.5rem' }}>KEY PROJECTS</h3>

      <div className="project-grid">
        <div className="project-card reveal">
          <div className="project-thumb" style={{ background: 'linear-gradient(135deg,#1a0a2e,#16213e)' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>⚔️</span>
          </div>
          <div className="project-body">
            <div style={{ ...projectMeta, color: 'var(--gold)' }}>KOEI TECMO · PS5/PC · 2024</div>
            <h4 style={projectH4}>Rise of the Ronin</h4>
            <p style={projectP}>
              QA Lead cho tựa game AAA action RPG bối cảnh Nhật Bản. Phối hợp studio Nhật, đảm bảo chất lượng PS5.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="tag tag-gold">AAA</span>
              <span className="tag">PS5</span>
              <span className="tag">Open World</span>
            </div>
          </div>
        </div>

        <div className="project-card reveal d1">
          <div className="project-thumb" style={{ background: 'linear-gradient(135deg,#0a1628,#1a2a4a)' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>🗡️</span>
          </div>
          <div className="project-body">
            <div style={{ ...projectMeta, color: 'var(--gold)' }}>KOEI TECMO · PS5/PS4/PC · 2023</div>
            <h4 style={projectH4}>Fate/Samurai Remnant</h4>
            <p style={projectP}>
              QA coordination cho game action RPG Fate Series. Quản lý test cycle qua nhiều platform và localization.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="tag tag-gold">AAA</span>
              <span className="tag">Multi-Platform</span>
              <span className="tag">Fate Series</span>
            </div>
          </div>
        </div>

        <div className="project-card reveal d2">
          <div className="project-thumb" style={{ background: 'linear-gradient(135deg,#0a2a1a,#0d1f2d)' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>🏗️</span>
          </div>
          <div className="project-body">
            <div style={{ ...projectMeta, color: 'var(--accent)' }}>SABO GAME · 2019–2021 · INTERNAL</div>
            <h4 style={projectH4}>QA Department Setup</h4>
            <p style={projectP}>
              Xây dựng toàn bộ bộ phận QA từ đầu: tuyển dụng, đào tạo, quy trình và văn hóa quality-first.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="tag">Leadership</span>
              <span className="tag">Process</span>
              <span className="tag">0→1</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    </section>
  );
}
