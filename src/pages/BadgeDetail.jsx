import React from 'react';
import { Link, useParams } from 'react-router-dom';
const API_BADGES = '/api/badges';

function Field({ label, value }) {
  return (
    <div className="credly-field">
      <div className="credly-field-label">{label}</div>
      <div className="credly-field-value">{value || '—'}</div>
    </div>
  );
}

export function BadgeDetail() {
  const { badgeId } = useParams();
  const [state, setState] = React.useState({ status: 'loading', badge: null });

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const resp = await fetch(`${API_BADGES}?t=${Date.now()}`, { method: 'GET', cache: 'no-store' });
        if (!resp.ok) throw new Error('bad_response');
        const data = await resp.json();
        const items = data?.ok ? data?.items : null;
        const found = Array.isArray(items) ? items.find((b) => b?.id === badgeId) : null;
        if (!cancelled) setState({ status: found ? 'ready' : 'not_found', badge: found || null });
      } catch {
        if (!cancelled) setState({ status: 'error', badge: null });
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [badgeId]);

  if (state.status === 'loading') {
    return (
      <section className="credly-detail">
        <div className="container">
          <div className="credly-card">Loading…</div>
        </div>
      </section>
    );
  }

  if (state.status === 'error') {
    return (
      <section className="credly-detail">
        <div className="container">
          <div className="credly-card">Failed to load.</div>
        </div>
      </section>
    );
  }

  if (state.status === 'not_found' || !state.badge) {
    return (
      <section className="credly-detail">
        <div className="container">
          <div className="credly-card">
            <div className="credly-top">
              <Link className="credly-back" to="/">← Back</Link>
            </div>
            <div>Badge not found.</div>
          </div>
        </div>
      </section>
    );
  }

  const b = state.badge;
  const skills = Array.isArray(b.skills) ? b.skills : [];

  return (
    <section className="credly-detail">
      <div className="container">
        <div className="credly-card">
          <div className="credly-top">
            <Link className="credly-back" to="/">← Back</Link>
            {b.credentialUrl ? (
              <a className="credly-link" href={b.credentialUrl} target="_blank" rel="noreferrer">
                See Badge Details Page
              </a>
            ) : null}
          </div>

          <div className="credly-layout">
            <div className="credly-left">
              <div className="credly-badge-art">
                <img src={b.badgePic || b.img} alt={b.title || 'Badge'} />
              </div>
              <div className="credly-left-title">{b.title || '—'}</div>
              <div className="credly-left-sub">Issued by {b.issuingOrganization || b.issuer || '—'}</div>
            </div>

            <div className="credly-right">
              <div className="credly-h1">{b.title || '—'}</div>
              <div className="credly-sub">Issued by {b.issuingOrganization || b.issuer || '—'}</div>

              <div className="credly-section">
                <div className="credly-section-title">Description</div>
                <div className="credly-text">{b.description || '—'}</div>
              </div>

              <div className="credly-grid">
                <Field label="Issuing Date" value={b.issuingDate} />
                <Field label="Expiration Date" value={b.expirationDate} />
                <Field label="Credential ID" value={b.credentialId} />
                <Field label="Status Badge" value={b.statusBadge} />
              </div>

              <div className="credly-section">
                <div className="credly-section-title">Skills</div>
                <div className="credly-tags">
                  {skills.length ? skills.map((s) => (
                    <span className="credly-tag" key={s}>{s}</span>
                  )) : <span className="credly-muted">—</span>}
                </div>
              </div>

              <div className="credly-section">
                <div className="credly-section-title">Earning Criteria</div>
                <div className="credly-text">{b.earningCriteria || '—'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

