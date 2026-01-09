
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Solutions', id: 'solutions' },
    { name: 'About', id: 'about' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Contact', id: 'contact' },
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

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-brand-primary shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Home */}
        <button 
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-2 group outline-none"
        >
          <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
             <span className="text-brand-primary font-bold text-xl">V</span>
          </div>
          <div className="text-left">
            <h1 className="font-bold leading-none text-white text-base">
              VETBRIDGE<br/>
              <span className="text-brand-secondary text-[10px] tracking-widest uppercase">Consulting</span>
            </h1>
          </div>
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-white hover:text-brand-secondary transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendar.app.google/ki8q1DDtziZjLvRz5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-secondary text-brand-primary px-5 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
          >
            Book Discovery Call
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2" 
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
        <nav className="md:hidden bg-brand-primary absolute top-full left-0 w-full h-[100vh] p-8 space-y-8 flex flex-col items-center border-t border-white/5 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-white text-3xl font-black hover:text-brand-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendar.app.google/ki8q1DDtziZjLvRz5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full text-center bg-brand-secondary text-brand-primary px-5 py-6 rounded-3xl font-black text-xl"
          >
            Book Discovery Call
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
