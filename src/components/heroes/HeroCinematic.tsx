import React from 'react';

/**
 * Option C — "Cinematic"
 * Full-bleed photograph, deep scrim, headline anchored bottom-left,
 * hairline metric bar across the base. Magazine cover, not SaaS card.
 */
const HeroCinematic: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink grain">
      {/* ── Photograph ────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-legacy.jpg"
          alt="A veterinarian reviewing practice data on a tablet with a client and their dog"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* scrims: bottom weight for the headline, left weight for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent"></div>
        <div className="absolute inset-0 bg-brand-primary/30 mix-blend-multiply"></div>
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 pb-16 pt-40">
        <div className="max-w-4xl">
          <div className="rise-in flex items-center gap-4 mb-9">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-mint">
              Veterinary Operations, Reimagined
            </p>
          </div>

          <h2
            className="rise-in font-display text-white text-[3.5rem] sm:text-7xl lg:text-[6rem] xl:text-[6.75rem] leading-[0.94] tracking-[-0.025em] mb-8"
            style={{ '--rise-delay': '140ms' } as React.CSSProperties}
          >
            Smarter operations
            <br />
            for <em className="font-light text-brand-accent">modern</em> vets.
          </h2>

          <p
            className="rise-in text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mb-11"
            style={{ '--rise-delay': '280ms' } as React.CSSProperties}
          >
            We bridge healthcare technology and veterinary excellence — turning your
            practice data into time saved, revenue found, and better medicine.
          </p>

          <div
            className="rise-in flex flex-col sm:flex-row gap-4"
            style={{ '--rise-delay': '400ms' } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="shine-effect group bg-white text-ink px-9 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-accent transition-colors duration-300"
            >
              Book a free audit
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#solutions"
              className="border border-white/25 text-white px-9 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Explore solutions
            </a>
          </div>
        </div>
      </div>

      {/* ── Base metric bar ───────────────────────────── */}
      <div
        className="rise-in relative z-10 border-t border-white/12 backdrop-blur-[2px]"
        style={{ '--rise-delay': '520ms' } as React.CSSProperties}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '10+', label: 'PIMS platforms supported' },
              { value: '15+', label: 'Hours saved per week' },
              { value: '3', label: 'Integrated solution lines' },
              { value: '100%', label: 'Vendor-agnostic advice' },
            ].map((s, i) => (
              <div key={s.label} className={`py-7 px-6 ${i === 0 ? 'md:pl-0' : ''}`}>
                <p className="font-display text-3xl lg:text-4xl text-white leading-none mb-2">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCinematic;
