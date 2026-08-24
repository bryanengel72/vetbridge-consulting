import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  /** False when the hero behind the transparent header is a light surface. */
  heroIsDark?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, heroIsDark = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Solutions', id: 'solutions' },
    { name: 'About', id: 'about' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'ROI', id: 'roi-calculator' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Header sits over the hero when at top, over light sections when scrolled
  const onDark = heroIsDark && !isScrolled && !mobileMenuOpen;

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(46,16,101,0.08)] py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Home */}
        <button
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-3 group outline-none text-left"
        >
          {/* Monogram bridge mark */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 ${onDark ? 'bg-brand-accent text-brand-primary' : 'bg-brand-primary text-white'}`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {/* stylized bridge arc + pier */}
              <path d="M3 16c0-5 4-9 9-9s9 4 9 9" />
              <path d="M3 16h18" />
              <path d="M12 7v9" />
            </svg>
          </div>
          <h1 className={`font-black leading-none text-lg md:text-xl transition-colors duration-500 ${onDark ? 'text-white' : 'text-brand-primary'}`}>
            VETBRIDGE
            <span className={`text-[9px] md:text-[10px] tracking-[0.3em] uppercase block mt-1 font-bold transition-colors duration-500 ${onDark ? 'text-brand-mint' : 'text-brand-secondary'}`}>Consulting</span>
          </h1>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`nav-link font-semibold transition-colors duration-500 ${onDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-brand-primary'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={`shine-effect px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 ${onDark ? 'bg-brand-accent text-brand-primary hover:bg-white' : 'bg-brand-primary text-white hover:bg-brand-secondary shadow-lg shadow-brand-primary/20'}`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-500 ${onDark ? 'text-white' : 'text-slate-800'}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 w-full h-[100vh] p-8 space-y-8 flex flex-col items-center border-t border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-slate-800 text-3xl font-black hover:text-brand-secondary transition-colors font-display"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="w-full text-center bg-brand-primary text-white px-5 py-6 rounded-3xl font-black text-xl shadow-xl shadow-brand-primary/20"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
