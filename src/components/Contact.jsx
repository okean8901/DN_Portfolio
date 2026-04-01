export function Contact({ onSendMessage }) {
  return (
    <section id="contact" className="bg-a">
      <div className="container">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <div className="section-chip">Let&apos;s Connect</div>
            <h2 className="sec-title" style={{ marginTop: '0.5rem' }}>
              Bắt đầu <em>Hợp tác</em>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '0.7rem', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Tìm kiếm Project Coordinator / Scrum Master có kinh nghiệm thực chiến? Liên hệ ngay.
            </p>
          </div>
          <div className="contact-layout">
            <div className="reveal">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div>
                  <label
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Your Name
                  </label>
                  <input type="text" placeholder="Nguyễn Văn A" className="contact-input" />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Email
                  </label>
                  <input type="email" placeholder="hello@company.com" className="contact-input" />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Message
                  </label>
                  <textarea rows={4} placeholder="Tôi muốn trao đổi về..." className="contact-input" />
                </div>
                <button type="button" onClick={onSendMessage} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Gửi tin nhắn
                </button>
              </div>
            </div>
            <div className="reveal d1" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a href="mailto:duong.nguyendang@email.com" className="cinfo-link">
                <div className="cinfo-icon">✉️</div>
                <div>
                  <div
                    style={{
                      fontSize: '0.62rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      marginBottom: '0.15rem',
                    }}
                  >
                    Email
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>duong.nguyendang@email.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/duong-nguyen-dang" target="_blank" rel="noreferrer" className="cinfo-link">
                <div className="cinfo-icon" style={{ background: 'rgba(10,102,194,.1)', borderColor: 'rgba(10,102,194,.2)' }}>
                  💼
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.62rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      marginBottom: '0.15rem',
                    }}
                  >
                    LinkedIn
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>Dương Nguyễn Đăng</div>
                </div>
              </a>
              <div className="open-box" style={{ marginTop: '0.2rem' }}>
                <div className="open-label">// OPEN TO</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)' }}>✓</span> Project Manager / Coordinator roles
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)' }}>✓</span> Scrum Master positions
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)' }}>✓</span> Game / Software industry
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)' }}>✓</span> Agile transformation consulting
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
