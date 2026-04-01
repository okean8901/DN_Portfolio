export function Footer() {
  return (
    <footer>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)', fontSize: '1.05rem' }}>
              DND<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
            Dương Nguyễn Đăng — Project Coordinator & Scrum Master
          </div>
          <div>© 2025 · Quality-First Mindset</div>
        </div>
      </div>
    </footer>
  );
}
