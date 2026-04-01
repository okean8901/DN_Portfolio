export function About() {
  return (
    <section id="about" className="bg-s">
      <div className="container">
        <div className="about-grid">
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%' }}>
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="dương-nguyễn-đăng-a87665346"
              data-version="v1"
              style={{ maxWidth: '100%', transform: 'scale(1.4)' }}
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://vn.linkedin.com/in/d%C6%B0%C6%A1ng-nguy%E1%BB%85n-%C4%91%C4%83ng-a87665346?trk=profile-badge"
                style={{ display: 'none' }}
              >
                Dương Nguyễn Đăng
              </a>
            </div>
          </div>
          <div className="reveal d1">
            <div className="section-chip">About Me</div>
            <h2 className="sec-title" style={{ marginBottom: '1.25rem', marginTop: '0.5rem' }}>
              Từ QA Lead đến
              <br />
              <em>Coordinator</em>
            </h2>
            <p className="muted-p">
              Hành trình bắt đầu từ việc{' '}
              <strong>xây dựng bộ phận QA từ con số 0</strong> — thiết lập quy trình, đội ngũ và tiêu chuẩn chất
              lượng.
            </p>
            <p className="muted-p" style={{ marginBottom: '1.4rem' }}>
              Kinh nghiệm thực chiến với các <strong>tựa AAA của Koei Tecmo</strong> định hình tư duy hệ thống, dẫn
              đến vai trò <strong>Project Coordinator & Scrum Master</strong>.
            </p>
            <div
              style={{
                background: 'var(--accent-dim)',
                border: '1px solid rgba(99,179,237,.12)',
                borderRadius: '9px',
                padding: '1rem 1.2rem',
                marginBottom: '1.5rem',
              }}
            >
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)' }}>
                🎯 <strong>Triết lý:</strong> Mọi quy trình đều tối ưu được. Team tự vận hành khi hệ thống đủ tốt.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                    color: 'var(--text-2)',
                  }}
                >
                  <span>Agile & Scrum</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>92%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" data-w="92" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                    color: 'var(--text-2)',
                  }}
                >
                  <span>QA Management</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>95%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" data-w="95" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                    color: 'var(--text-2)',
                  }}
                >
                  <span>Risk Management</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>85%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" data-w="85" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                    color: 'var(--text-2)',
                  }}
                >
                  <span>Team Leadership</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>88%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" data-w="88" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
