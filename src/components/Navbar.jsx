export function Navbar() {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            DND<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#expertise" className="nav-link">
              Expertise
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}>
            Liên hệ ngay
          </a>
        </div>
      </div>
    </nav>
  );
}
