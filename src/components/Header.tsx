import React, { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Services', id: 'services', n: '02' },
  { name: 'Client work', id: 'work', n: '04' },
  { name: 'Who we are', id: 'about', n: '05' },
  { name: 'How we work', id: 'how', n: '06' },
  { name: 'Pricing', id: 'pricing', n: '07' },
  { name: 'Estimator', id: 'estimator', n: '08' },
];

/* `base` prefixes the section links so they still land on the homepage
   when the header is used on another page (e.g. base="/" on /privacy). */
const Header: React.FC<{ base?: string }> = ({ base = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-in">
        <a className="wordmark" href={`${base}#top`}>
          <b>Vetbridge</b>
          <span>Consulting</span>
        </a>

        <nav className="nav" aria-label="Sections">
          {navLinks.map((l) => (
            <a key={l.id} href={`${base}#${l.id}`}>
              {l.name}
            </a>
          ))}
        </nav>

        <div className="tools">
          <a className="btn header-cta" href={`${base}#contact`}>
            Book a free audit
          </a>
          <button
            className="burger"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-nav"
        data-open={menuOpen}
        aria-label="Sections"
      >
        {navLinks.map((l) => (
          <a key={l.id} href={`${base}#${l.id}`} onClick={() => setMenuOpen(false)}>
            <span className="n">{l.n}</span>
            {l.name}
          </a>
        ))}
        <a className="btn" href={`${base}#contact`} onClick={() => setMenuOpen(false)}>
          Book a free audit
        </a>
      </nav>
    </header>
  );
};

export default Header;
