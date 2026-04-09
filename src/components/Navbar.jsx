import React from 'react';

export function Navbar() {
  const ADMIN_LS_KEY = 'dn_portfolio_admin';
  const [isAdmin, setIsAdmin] = React.useState(() => localStorage.getItem(ADMIN_LS_KEY) === '1');

  React.useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== ADMIN_LS_KEY) return;
      setIsAdmin(localStorage.getItem(ADMIN_LS_KEY) === '1');
    };
    const onCustom = () => setIsAdmin(localStorage.getItem(ADMIN_LS_KEY) === '1');
    window.addEventListener('storage', onStorage);
    window.addEventListener('admin-mode-changed', onCustom);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('admin-mode-changed', onCustom);
    };
  }, []);

  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            DND<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">
              Giới thiệu
            </a>
            <a href="#experience" className="nav-link">
              Kinh nghiệm
            </a>
            <a href="#projects" className="nav-link">
              Kỹ năng & Chứng chỉ
            </a>
            <a href="#contact" className="nav-link">
              Liên hệ
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
            {isAdmin ? (
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
                onClick={() => {
                  const ok = window.confirm('Có muốn thoát admin mode không?');
                  if (!ok) return;
                  localStorage.removeItem(ADMIN_LS_KEY);
                  window.dispatchEvent(new Event('admin-mode-changed'));
                  setIsAdmin(false);
                }}
              >
                Admin Mode
              </button>
            ) : null}
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}>
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
