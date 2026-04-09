const listStyle = {
  color: 'var(--muted)',
  fontSize: '0.84rem',
  lineHeight: 1.85,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
};

export function Experience() {
  return (
    <section id="experience" className="bg-s">
      <div className="container">
        <div className="exp-layout">
          <div className="reveal" style={{ position: 'sticky', top: '5.5rem' }}>
            <div className="section-chip">Kinh nghiệm làm việc</div>
            <h2 className="sec-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              Hành trình
              <br />
              <em>Sự nghiệp</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Từ QA Engineer → QA Lead → Project Coordinator. Hành trình xây dựng trên nền tảng chất lượng và tư duy hệ
              thống.
            </p>
            <div style={{ padding: '1rem 1.2rem', background: 'var(--surface2)', borderRadius: 10, border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                CURRENT STATUS
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="blink-dot" />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-2)' }}>Active at Sabo Game</span>
              </div>
            </div>
          </div>
          <div className="reveal d1">
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-dot">
                  <div className="inner" />
                </div>
                <div className="tl-meta">2023 — Hiện tại</div>
                <div className="tl-co">🎮 Sabo Game</div>
                <div className="tl-role">Assistant Project Coordinator (IT/Software)</div>
                <div className="glass-card" style={{ padding: '1.1rem' }}>
                  <ul style={listStyle}>
                    <li>→ Hỗ trợ PM lên kế hoạch Sprint và phân bổ nguồn lực</li>
                    <li>→ Điều phối giao tiếp giữa Dev, Design và Stakeholders</li>
                    <li>→ Theo dõi tiến độ, phát hiện rủi ro và đề xuất giải pháp</li>
                    <li>→ Xây dựng báo cáo dự án và retrospective insights</li>
                  </ul>
                  <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span className="tag">Scrum</span>
                    <span className="tag">Jira</span>
                    <span className="tag">Confluence</span>
                    <span className="tag">Stakeholder Mgmt</span>
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot past">
                  <div className="inner" />
                </div>
                <div className="tl-meta past">2021 — 2023</div>
                <div className="tl-co">🏯 Koei Tecmo (via Sabo Game)</div>
                <div className="tl-role">QA Lead — AAA Game Projects</div>
                <div className="glass-card" style={{ padding: '1.1rem' }}>
                  <ul style={listStyle}>
                    <li>→ Lead QA cho Rise of the Ronin & Fate/Samurai Remnant (PS5/PS4)</li>
                    <li>→ Điều phối đội QA quốc tế với studio game Nhật Bản</li>
                    <li>→ Thiết lập test plan, bug tracking workflow, reporting system</li>
                    <li>→ Đảm bảo quality gate trước mỗi milestone quan trọng</li>
                  </ul>
                  <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span className="tag tag-gold">AAA</span>
                    <span className="tag tag-gold">PS5/PS4</span>
                    <span className="tag">QA Lead</span>
                    <span className="tag">Test Strategy</span>
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot past">
                  <div className="inner" />
                </div>
                <div className="tl-meta past">2019 — 2021</div>
                <div className="tl-co">🎮 Sabo Game</div>
                <div className="tl-role">QA Lead — Department Builder</div>
                <div className="glass-card" style={{ padding: '1.1rem' }}>
                  <ul style={listStyle}>
                    <li>
                      → <strong style={{ color: 'var(--text-2)' }}>Xây dựng bộ phận QA từ con số 0</strong> — tuyển
                      dụng, đào tạo, quy trình
                    </li>
                    <li>→ Thiết lập tiêu chuẩn chất lượng và văn hóa quality-first</li>
                    <li>→ Tạo test documentation, template, onboarding materials</li>
                  </ul>
                  <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span className="tag">QA Setup</span>
                    <span className="tag">Recruitment</span>
                    <span className="tag">Mentoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
