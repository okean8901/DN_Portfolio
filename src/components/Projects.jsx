const projectMeta = { fontFamily: 'var(--font-mono)', fontSize: '0.63rem', marginBottom: '0.4rem', letterSpacing: '0.04em' };
const projectH4 = { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.6rem', color: 'var(--text)' };
const projectP = { color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.75, marginBottom: '0.9rem' };

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
          <div className="section-chip">Portfolio</div>
          <h2 className="sec-title" style={{ marginTop: '0.5rem' }}>
            Certifications &amp; <em>Projects</em>
          </h2>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}
          className="reveal"
        >
          CERTIFICATIONS
        </h3>
        <div className="cert-display reveal d1">
          <div className="cert-card-official">
            <div className="cert-header-bar">
              <div className="cert-logo-row">
                <div className="cert-logo-icon">🏅</div>
                <div>
                  <div className="cert-org-name">Agile Education by Scrum Inc.™</div>
                  <div className="cert-org-sub">OFFICIAL CERTIFICATION BODY</div>
                </div>
              </div>
              <div className="cert-title-big">Registered Scrum Basic™</div>
              <div className="cert-subtitle">CERTIFICATE OF COMPLETION</div>
            </div>
            <div className="cert-body">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                AWARDED TO
              </div>
              <div className="cert-name-field">Dương Nguyễn Đăng</div>
              <div className="cert-credential">
                <div>
                  <div className="cert-field-label">Designation</div>
                  <div className="cert-field-val">RSB™</div>
                </div>
                <div>
                  <div className="cert-field-label">Status</div>
                  <div className="cert-field-val" style={{ color: 'var(--green)' }}>
                    ✓ Active
                  </div>
                </div>
                <div>
                  <div className="cert-field-label">Issuer</div>
                  <div className="cert-field-val">Scrum Inc.™</div>
                </div>
                <div>
                  <div className="cert-field-label">Framework</div>
                  <div className="cert-field-val">Scrum@Scale</div>
                </div>
              </div>
              <div className="cert-badges-row">
                <span className="tag">Scrum Framework</span>
                <span className="tag">Agile Mindset</span>
                <span className="tag tag-gold">Verified</span>
                <div className="cert-seal">
                  RSB
                  <br />™
                  <br />
                  SCRUM
                  <br />
                  INC
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="social-cert-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div className="sc-avatar">D</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>Dương Nguyễn Đăng</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)' }}>
                    Assistant Project Coordinator · Sabo Game
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
              <p className="sc-post">
                I just earned my <strong style={{ color: 'var(--accent)' }}>Registered Scrum Basics™</strong> certificate
                of completion from <strong style={{ color: 'var(--text)' }}>Agile Education by Scrum Inc.™</strong> 🎉
              </p>
              <div className="sc-hashtags">#RegisteredScrum #AgileEducation</div>
              <div
                style={{
                  marginTop: '0.9rem',
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'linear-gradient(135deg,#0d1425,#0f1e38)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.6rem',
                }}
              >
                <img src="/chungchi.jfif" alt="Registered Scrum Basics certificate" style={{ width: '100%', borderRadius: 8 }} />
                <div className="sc-meta">
                  <div className="sc-date">LinkedIn Post · 2025</div>
                  <div className="sc-platform">
                    <span style={{ color: 'var(--green)' }}>●</span> Verified Achievement
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                WHAT RSB™ COVERS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <li style={{ fontSize: '0.84rem', color: 'var(--muted)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                  Scrum Framework & Roles
                </li>
                <li style={{ fontSize: '0.84rem', color: 'var(--muted)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                  Agile Values & Principles
                </li>
                <li style={{ fontSize: '0.84rem', color: 'var(--muted)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                  Sprint Ceremonies & Artifacts
                </li>
                <li style={{ fontSize: '0.84rem', color: 'var(--muted)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                  Continuous Improvement Mindset
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            marginTop: '2.5rem',
          }}
          className="reveal"
        >
          KEY PROJECTS
        </h3>
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
