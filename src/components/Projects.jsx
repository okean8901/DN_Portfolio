import React from 'react';
import { Link } from 'react-router-dom';

const projectMeta = { fontFamily: 'var(--font-mono)', fontSize: '0.63rem', marginBottom: '0.4rem', letterSpacing: '0.04em' };
const projectH4 = { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.6rem', color: 'var(--text)' };
const projectP = { color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.75, marginBottom: '0.9rem' };

export function Projects() {
  const DEFAULT_BADGES = [];
  const API_BADGES = '/api/badges';

  const ADMIN_LS_KEY = 'dn_portfolio_admin';
  const ADMIN_PASSPHRASE = '123';
  const ADMIN_TOKEN_LS_KEY = 'dn_portfolio_admin_token';

  const [isAdmin, setIsAdmin] = React.useState(() => localStorage.getItem(ADMIN_LS_KEY) === '1');
  const [badges, setBadges] = React.useState(DEFAULT_BADGES);
  const [syncState, setSyncState] = React.useState('idle'); // idle | loading | saving | error
  const [editorOpen, setEditorOpen] = React.useState(false);
  const [editorMode, setEditorMode] = React.useState('edit'); // add | edit
  const [draft, setDraft] = React.useState(null);

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    const shouldLock = editorOpen;
    if (shouldLock) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [editorOpen]);

  const normalizeBadge = React.useCallback((b) => {
    if (!b || typeof b !== 'object') return null;
    return {
      id: String(b.id || `b_${Date.now()}`),
      badgePic: b.badgePic || b.img || '',
      title: b.title || '',
      issuingOrganization: b.issuingOrganization || b.issuer || '',
      description: b.description || '',
      issuingDate: b.issuingDate || b.issued || '',
      expirationDate: b.expirationDate || '',
      credentialId: b.credentialId || '',
      credentialUrl: b.credentialUrl || '',
      statusBadge: b.statusBadge || '',
      skills: Array.isArray(b.skills) ? b.skills : [],
      earningCriteria: b.earningCriteria || '',
    };
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setSyncState('loading');
      try {
        const resp = await fetch(`${API_BADGES}?t=${Date.now()}`, { method: 'GET', cache: 'no-store' });
        if (!resp.ok) throw new Error(`http_${resp.status}`);
        const data = await resp.json();
        if (!cancelled && data?.ok && Array.isArray(data.items)) {
          setBadges(data.items.map(normalizeBadge).filter(Boolean));
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
    let holdTimer = null;
    let armed = false;

    const clearHold = () => {
      if (holdTimer) window.clearTimeout(holdTimer);
      holdTimer = null;
      armed = false;
    };

    const trigger = () => {
      if (localStorage.getItem(ADMIN_LS_KEY) === '1') {
        localStorage.removeItem(ADMIN_LS_KEY);
        setIsAdmin(false);
        return;
      }

      const pass = window.prompt('Admin passphrase');
      if (pass && pass.trim() === ADMIN_PASSPHRASE) {
        localStorage.setItem(ADMIN_LS_KEY, '1');
        setIsAdmin(true);
      } else if (pass !== null) {
        window.alert('Sai mật khẩu.');
      }
    };

    const isCombo = (e) => e.altKey && e.shiftKey && e.key.toLowerCase() === 'a';

    const onKeyDown = (e) => {
      if (!isCombo(e)) return;
      if (e.repeat) return;
      if (armed) return;
      armed = true;
      holdTimer = window.setTimeout(() => {
        trigger();
        clearHold();
      }, 3000);
    };

    const onKeyUp = (e) => {
      if (e.key.toLowerCase() !== 'a' && e.key !== 'Alt' && e.key !== 'Shift') return;
      clearHold();
    };

    const onBlur = () => clearHold();

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      clearHold();
    };
  }, []);

  const openAdd = () => {
    setEditorMode('add');
    setDraft({
      id: `b_${Date.now()}`,
      badgePic: '',
      title: '',
      issuingOrganization: '',
      description: '',
      issuingDate: '',
      expirationDate: '',
      credentialId: '',
      credentialUrl: '',
      statusBadge: '',
      skillsText: '',
      earningCriteria: '',
    });
    setEditorOpen(true);
  };

  const openEdit = (id) => {
    const current = badges.find((b) => b.id === id);
    if (!current) return;
    const c = normalizeBadge(current);
    setEditorMode('edit');
    setDraft({
      id: c.id,
      badgePic: c.badgePic,
      title: c.title,
      issuingOrganization: c.issuingOrganization,
      description: c.description,
      issuingDate: c.issuingDate,
      expirationDate: c.expirationDate,
      credentialId: c.credentialId,
      credentialUrl: c.credentialUrl,
      statusBadge: c.statusBadge,
      skillsText: (c.skills || []).join(', '),
      earningCriteria: c.earningCriteria,
    });
    setEditorOpen(true);
  };

  const upsertDraft = () => {
    if (!draft?.id) return;
    const skills = String(draft.skillsText || '')
      .split(/[\n,]+/g)
      .map((s) => s.trim())
      .filter(Boolean);
    const next = normalizeBadge({
      id: draft.id,
      badgePic: draft.badgePic,
      title: draft.title,
      issuingOrganization: draft.issuingOrganization,
      description: draft.description,
      issuingDate: draft.issuingDate,
      expirationDate: draft.expirationDate,
      credentialId: draft.credentialId,
      credentialUrl: draft.credentialUrl,
      statusBadge: draft.statusBadge,
      skills,
      earningCriteria: draft.earningCriteria,
    });

    setBadges((prev) => {
      const idx = prev.findIndex((b) => b.id === next.id);
      if (idx === -1) return [next, ...prev];
      const copy = [...prev];
      copy[idx] = next;
      return copy;
    });
    setEditorOpen(false);
    setDraft(null);
  };

  const deleteBadge = (id) => {
    if (!window.confirm('Delete this badge?')) return;
    setBadges((prev) => prev.filter((b) => b.id !== id));
  };

  const saveBadgesToServer = async () => {
    const existing = localStorage.getItem(ADMIN_TOKEN_LS_KEY) || '';
    const token = window.prompt('Admin token', existing) ?? '';
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
        body: JSON.stringify(badges.map(normalizeBadge).filter(Boolean)),
      });
      const data = await resp.json().catch(() => null);
      if (!resp.ok || !data?.ok) throw new Error(data?.error || `http_${resp.status}`);
      setSyncState('idle');
      window.alert('Saved.');
    } catch (e) {
      setSyncState('error');
      window.alert(`Save failed: ${e?.message || ''}`.trim());
    }
  };

  const doLogin = null;
  const doLogout = null;

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
                  <button type="button" className="bw-btn bw-btn--primary" onClick={openAdd}>+ Add Badge</button>
                  <button type="button" className="bw-btn" onClick={saveBadgesToServer} disabled={syncState === 'saving'}>
                    {syncState === 'saving' ? 'Saving…' : 'Save'}
                  </button>
                  <button
                    type="button"
                    className="bw-btn"
                    onClick={() => {
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
            {badges.length ? badges.map((b) => (
              <div className="bw-card" key={b.id}>
                <Link className="bw-card-link" to={`/badge/${b.id}`} aria-label={`Open ${b.title || 'badge'}`}>
                  <div className="bw-card-art">
                    {b.badgePic || b.img ? <img className="bw-card-img" src={b.badgePic || b.img} alt="" /> : null}
                  </div>
                  <div className="bw-card-body">
                    <div className="bw-card-title">{b.title || 'Untitled'}</div>
                    <div className="bw-card-issuer">{b.issuingOrganization || b.issuer || '—'}</div>
                    <div className="bw-card-date">{b.issuingDate || b.issued || '—'}</div>
                  </div>
                </Link>

                {isAdmin ? (
                  <div className="bw-admin-row bw-admin-row--pad">
                    <button type="button" className="bw-admin-btn" onClick={() => openEdit(b.id)}>Edit</button>
                    <button type="button" className="bw-admin-btn bw-admin-btn--danger" onClick={() => deleteBadge(b.id)}>Delete</button>
                  </div>
                ) : null}
              </div>
            )) : (
              <div className="bw-empty">
                {isAdmin ? 'No badges yet. Click “Add Badge” then “Save”.' : 'No badges yet.'}
              </div>
            )}
          </div>
        </div>

        {isAdmin && editorOpen && draft ? (
          <div className="bw-modal" role="dialog" aria-modal="true" aria-label="Edit badge">
            <div className="bw-modal-card">
              <div className="bw-modal-top">
                <div className="bw-modal-title">{editorMode === 'add' ? 'Add Badge' : 'Edit Badge'}</div>
                <button type="button" className="bw-admin-btn" onClick={() => { setEditorOpen(false); setDraft(null); }}>Close</button>
              </div>

              <div className="bw-form">
                <label className="bw-field">
                  <span>Badge Title</span>
                  <input value={draft.title} onChange={(e) => setDraft((p) => ({ ...p, title: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Issuing Organization</span>
                  <input value={draft.issuingOrganization} onChange={(e) => setDraft((p) => ({ ...p, issuingOrganization: e.target.value }))} />
                </label>
                <label className="bw-field bw-field--full">
                  <span>Description</span>
                  <textarea rows={4} value={draft.description} onChange={(e) => setDraft((p) => ({ ...p, description: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Issuing Date</span>
                  <input value={draft.issuingDate} onChange={(e) => setDraft((p) => ({ ...p, issuingDate: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Expiration Date</span>
                  <input value={draft.expirationDate} onChange={(e) => setDraft((p) => ({ ...p, expirationDate: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Credential ID</span>
                  <input value={draft.credentialId} onChange={(e) => setDraft((p) => ({ ...p, credentialId: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Credential URL</span>
                  <input value={draft.credentialUrl} onChange={(e) => setDraft((p) => ({ ...p, credentialUrl: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Status Badge</span>
                  <input value={draft.statusBadge} onChange={(e) => setDraft((p) => ({ ...p, statusBadge: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>BadgePic</span>
                  <input value={draft.badgePic} onChange={(e) => setDraft((p) => ({ ...p, badgePic: e.target.value }))} />
                </label>
                <label className="bw-field">
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = () => {
                        const result = typeof reader.result === 'string' ? reader.result : '';
                        if (result) setDraft((p) => ({ ...p, badgePic: result }));
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
                <label className="bw-field bw-field--full">
                  <span>Skills (comma or newline separated)</span>
                  <textarea rows={3} value={draft.skillsText} onChange={(e) => setDraft((p) => ({ ...p, skillsText: e.target.value }))} />
                </label>
                <label className="bw-field bw-field--full">
                  <span>Earning Criteria</span>
                  <textarea rows={3} value={draft.earningCriteria} onChange={(e) => setDraft((p) => ({ ...p, earningCriteria: e.target.value }))} />
                </label>
              </div>

              <div className="bw-modal-actions">
                <button type="button" className="bw-btn bw-btn--primary" onClick={upsertDraft}>
                  {editorMode === 'add' ? 'Add' : 'Update'}
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {null}

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
