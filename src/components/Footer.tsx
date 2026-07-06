import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-white pt-20 pb-10 relative overflow-hidden grain">
      <div className="absolute inset-0 dot-grid-light opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <button onClick={(e) => scrollTo(e, 'top')} className="flex items-center gap-3 mb-6 outline-none text-left">
              <div className="w-11 h-11 rounded-xl bg-brand-accent text-brand-primary flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 16c0-5 4-9 9-9s9 4 9 9" />
                  <path d="M3 16h18" />
                  <path d="M12 7v9" />
                </svg>
              </div>
              <h1 className="font-black leading-none text-xl">
                VETBRIDGE
                <span className="text-brand-mint text-[10px] tracking-[0.3em] uppercase block mt-1 font-bold">Consulting</span>
              </h1>
            </button>
            <p className="text-slate-400 leading-relaxed max-w-sm font-light">
              Healthcare technology expertise meets veterinary practice excellence. We turn practice data into time saved and revenue found.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-mint mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: 'Solutions', id: 'solutions' },
                { name: 'About', id: 'about' },
                { name: 'Why Us', id: 'why-us' },
                { name: 'ROI Calculator', id: 'roi-calculator' },
                { name: 'Contact', id: 'contact' },
              ].map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={(e) => scrollTo(e, l.id)} className="text-slate-400 hover:text-white transition-colors font-medium">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-mint mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18163948980" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                  <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  (816) 394-8980
                </a>
              </li>
              <li>
                <a href="mailto:info@vetbridgeconsulting.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors font-medium break-all">
                  <svg className="w-4 h-4 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  info@vetbridgeconsulting.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 font-medium">
                <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Kansas City, MO
              </li>
            </ul>
          </div>
        </div>

        {/* Giant watermark */}
        <div className="select-none pointer-events-none overflow-hidden -mx-6 mb-10" aria-hidden="true">
          <p className="font-display font-black text-[16vw] md:text-[11vw] leading-[0.8] text-center text-white/[0.04] whitespace-nowrap">
            VETBRIDGE
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VetBridge Consulting. All rights reserved.</p>
          <p className="font-medium text-brand-mint/60">Healthcare Technology Expertise Meets Veterinary Practice Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
