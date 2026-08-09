export default function SiteNav() {
  return (
    <header className="navbar cs-nav">
      <nav className="cs-nav__inner" aria-label="Primary">
        <a className="nav-title-link cs-nav__brand" href="../index.html">
          <span className="nav-title">Sehrish Daud</span>
        </a>
        <a className="hero-cta hero-cta--secondary cs-nav__contact" href="mailto:daudsehrish@gmail.com">
          Contact Me
        </a>
      </nav>
    </header>
  );
}
