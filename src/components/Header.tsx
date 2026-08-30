import React, { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Services', id: 'services', n: '02' },
  { name: 'Client work', id: 'work', n: '04' },
  { name: 'Who we are', id: 'about', n: '05' },
  { name: 'How we work', id: 'how', n: '06' },
  { name: 'Pricing', id: 'pricing', n: '07' },
  { name: 'Estimator', id: 'estimator', n: '08' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  /* The pre-paint script in index.html has already set data-theme;
     read it back so the button label matches on first render. */
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('vb-theme', next);
    } catch {
      /* private mode — the toggle still works for this page view */
    }
    setDark(next === 'dark');
  };

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
        <a className="wordmark" href="#top">
          <b>Vetbridge</b>
          <span>Consulting</span>
        </a>

        <nav className="nav" aria-label="Sections">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.name}
            </a>
          ))}
        </nav>

        <div className="tools">
          <button
            className="toggle"
            type="button"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
          <a className="btn header-cta" href="#contact">
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
          <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}>
            <span className="n">{l.n}</span>
            {l.name}
          </a>
        ))}
        <a className="btn" href="#contact" onClick={() => setMenuOpen(false)}>
          Book a free audit
        </a>
      </nav>
    </header>
  );
};

export default Header;
