const cardBase = { display: 'flex', alignItems: 'flex-start', gap: '0.9rem', marginBottom: '0.9rem' };
const iconBox = (gold) => ({
  width: 44,
  height: 44,
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: gold ? 'var(--gold-dim)' : 'var(--accent-dim)',
  border: gold ? '1px solid rgba(201,168,76,.2)' : '1px solid rgba(99,179,237,.18)',
  flexShrink: 0,
  fontSize: '1.25rem',
});
const cardTitle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: '0.95rem',
  marginBottom: '0.3rem',
  color: 'var(--text)',
};
const cardP = { color: 'var(--muted)', fontSize: '0.84rem', lineHeight: 1.8 };

export function Expertise() {
  return (
    <section id="expertise">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
          <div className="section-chip">Core Competencies</div>
          <h2 className="sec-title" style={{ marginTop: '0.5rem' }}>
            The Scrum <em>Mindset</em>
          </h2>
          <p
            style={{
              color: 'var(--muted)',
              marginTop: '0.7rem',
              maxWidth: 440,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '0.9rem',
              lineHeight: 1.75,
            }}
          >
            Kỹ năng cốt lõi dẫn dắt team và tối ưu hóa quy trình phát triển sản phẩm.
          </p>
        </div>
        <div className="g3">
          <div className="glass-card reveal">
            <div style={cardBase}>
              <div style={iconBox(false)}>🔄</div>
              <div>
                <h3 style={cardTitle}>Agile & Scrum</h3>
                <span className="tag">RSB™ Certified</span>
              </div>
            </div>
            <p style={cardP}>
              Sprint Planning, Daily Standup, Review & Retrospective. Xây dựng backlog, đo velocity, cải tiến liên tục
              theo Scrum framework.
            </p>
          </div>
          <div className="glass-card reveal d1">
            <div style={cardBase}>
              <div style={iconBox(true)}>🛡️</div>
              <div>
                <h3 style={cardTitle}>QA Management</h3>
                <span className="tag tag-gold">Built from 0</span>
              </div>
            </div>
            <p style={cardP}>
              Thiết lập bộ phận QA từ đầu: test strategy, bug tracking, tiêu chuẩn chất lượng, đào tạo đội ngũ chuyên
              nghiệp.
            </p>
          </div>
          <div className="glass-card reveal d2">
            <div style={cardBase}>
              <div style={iconBox(false)}>⚡</div>
              <div>
                <h3 style={cardTitle}>Risk Management</h3>
                <span className="tag">Proactive</span>
              </div>
            </div>
            <p style={cardP}>
              Nhận diện rủi ro sớm, lên kế hoạch mitigation và contingency. Đảm bảo dự án không bị gián đoạn bất ngờ.
            </p>
          </div>
          <div className="glass-card reveal">
            <div style={cardBase}>
              <div style={iconBox(false)}>👥</div>
              <div>
                <h3 style={cardTitle}>Team Leadership</h3>
                <span className="tag">Servant Leader</span>
              </div>
            </div>
            <p style={cardP}>
              Xây dựng văn hóa team tự chủ, tạo môi trường tâm lý an toàn để mọi thành viên phát triển bền vững.
            </p>
          </div>
          <div className="glass-card reveal d1">
            <div style={cardBase}>
              <div style={iconBox(true)}>📈</div>
              <div>
                <h3 style={cardTitle}>Process Improvement</h3>
                <span className="tag tag-gold">Kaizen</span>
              </div>
            </div>
            <p style={cardP}>
              Phân tích bottleneck, áp dụng tư duy Kaizen để liên tục cải tiến workflow, giảm waste và tăng throughput.
            </p>
          </div>
          <div className="glass-card reveal d2">
            <div style={cardBase}>
              <div style={iconBox(false)}>💡</div>
              <div>
                <h3 style={cardTitle}>Design Thinking</h3>
                <span className="tag">Human-Centered</span>
              </div>
            </div>
            <p style={cardP}>
              Áp dụng Design Thinking giải quyết vấn đề phức tạp: Empathize → Define → Ideate → Prototype → Test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
