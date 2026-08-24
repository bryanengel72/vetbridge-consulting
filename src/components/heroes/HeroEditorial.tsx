import React from 'react';

/**
 * Option A — "Editorial Light"
 * Porcelain ground, oversized Fraunces display type, hairline rules,
 * one full-bleed image column. No blobs, no glass, no stickers.
 */
const HeroEditorial: React.FC = () => {
  return (
    <div className="relative bg-porcelain overflow-hidden">
      {/* single soft violet wash, top-left */}
      <div className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full bg-brand-secondary/[0.07] blur-[130px] pointer-events-none"></div>

      <div className="relative grid lg:grid-cols-12 min-h-screen">
        {/* ── Text column ───────────────────────────────── */}
        <div className="lg:col-span-7 flex items-center px-6 sm:px-10 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-20 pt-32 pb-16 lg:py-32">
          <div className="w-full max-w-2xl">
            <div className="rise-in flex items-center gap-4 mb-9">
              <span className="h-px w-10 bg-brand-secondary/50"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-secondary">
                Veterinary Operations Consulting
              </p>
            </div>

            <h2
              className="rise-in font-display text-[3.25rem] sm:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] leading-[0.95] tracking-[-0.02em] text-ink mb-8"
              style={{ '--rise-delay': '120ms' } as React.CSSProperties}
            >
              Smarter operations
              <br />
              for <em className="font-light text-brand-secondary">modern</em> vets.
            </h2>

            <p
              className="rise-in text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-10"
              style={{ '--rise-delay': '240ms' } as React.CSSProperties}
            >
              We bridge healthcare technology and veterinary excellence — turning your
              practice data into time saved, revenue found, and better medicine.
            </p>

            <div
              className="rise-in flex flex-col sm:flex-row sm:items-center gap-5 mb-14"
              style={{ '--rise-delay': '360ms' } as React.CSSProperties}
            >
              <a
                href="#contact"
                className="shine-effect group inline-flex items-center justify-center gap-2.5 bg-ink text-white px-9 py-4 rounded-full font-bold tracking-tight hover:bg-brand-secondary transition-colors duration-300"
              >
                Book a free audit
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 px-2 py-4 font-bold text-ink hover:text-brand-secondary transition-colors"
              >
                Explore solutions
                <span className="h-px w-8 bg-current group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>

            {/* hairline metric row */}
            <div
              className="rise-in border-t border-ink/10 pt-7 grid grid-cols-3 gap-6 max-w-xl"
              style={{ '--rise-delay': '480ms' } as React.CSSProperties}
            >
              {[
                { value: '10+', label: 'PIMS platforms supported' },
                { value: '3', label: 'Integrated solution lines' },
                { value: '100%', label: 'Vendor-agnostic advice' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl lg:text-4xl text-ink leading-none mb-2">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Image column (full-bleed right) ───────────── */}
        <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-screen">
          <img
            src="/images/about-legacy.jpg"
            alt="A veterinarian reviewing practice data on a tablet with a client and their dog"
            className="absolute inset-0 w-full h-full object-cover object-[62%_center] animate-slow-zoom"
          />
          {/* violet duotone wash keeps the photo on-brand */}
          {/* light violet grade — keeps it on-brand without bleaching it */}
          <div className="absolute inset-0 bg-brand-primary/15 mix-blend-multiply"></div>
          {/* narrow feather into the porcelain column, plus a top scrim for nav legibility */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-porcelain to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-porcelain/80 to-transparent"></div>

          {/* quiet caption plate, bottom-left of the image */}
          <div className="absolute bottom-8 left-8 right-8 lg:right-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5 max-w-xs shadow-[0_18px_50px_-18px_rgba(21,13,51,0.45)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-secondary mb-2">
                Average client outcome
              </p>
              <p className="font-display text-3xl text-ink leading-none mb-1.5">15+ hrs / week</p>
              <p className="text-xs text-slate-500 leading-snug">returned to the clinical team after a workflow audit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditorial;
