export function Hero() {
  return (
    <section id="hero">
      <div className="hero-ray ray-1" />
      <div className="hero-ray ray-2" />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-left">
            <div className="hero-eyebrow reveal">
              <span className="blink-dot" />
              OPEN TO OPPORTUNITIES
            </div>
            <h1 className="hero-title reveal d1">
              Dương
              <br />
              <span className="name-accent">Nguyễn Đăng</span>
            </h1>
            <div className="hero-role reveal d1">Assistant Project Coordinator </div>
            <p className="hero-quote reveal d2">
              &quot;Biến sự phức tạp thành hệ thống vận hành trơn tru. Chuyên gia tối ưu quy trình với tư duy
              Quality-First.&quot;
            </p>
            <div className="hero-ctas reveal d3">
              <a href="#contact" className="btn btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Liên hệ ngay
              </a>
              <a href="#experience" className="btn btn-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Xem kinh nghiệm
              </a>
            </div>
            <div className="hero-stats reveal d4">
              <div>
                <div className="stat-num">
                  5<span className="stat-accent">+</span>
                </div>
                <div className="stat-lbl">Years exp.</div>
              </div>
              <div>
                <div className="stat-num">2</div>
                <div className="stat-lbl">AAA projects</div>
              </div>
              <div>
                <div className="stat-num stat-accent" style={{ fontSize: '1.4rem', marginTop: '0.25rem' }}>
                  RSB™
                </div>
                <div className="stat-lbl">Scrum cert.</div>
              </div>
              <div>
                <div className="stat-num">
                  0<span className="stat-accent">→1</span>
                </div>
                <div className="stat-lbl">QA dept built</div>
              </div>
            </div>
          </div>
          <div className="avatar-col reveal d2">
            <div className="avatar-main">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <img src="/avt.jfif" alt="Dương Nguyễn Đăng" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="float-badge" style={{ top: '-1.2rem', right: '-2.5rem' }}>
              <span className="fb-val">Scrum Master</span>
              <span className="fb-lbl">RSB™ Certified</span>
            </div>
            <div className="float-badge" style={{ bottom: '3rem', left: '-3rem' }}>
              <span className="fb-val">QA Lead</span>
              <span className="fb-lbl">Built from 0</span>
            </div>
            <div className="float-badge" style={{ bottom: '-1rem', right: '-0.5rem' }}>
              <span className="fb-val">Koei Tecmo</span>
              <span className="fb-lbl">AAA Projects</span>
            </div>
            <div className="avatar-upload-hint" style={{ marginTop: '1.2rem' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
