import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const animate = (end: number, setter: (v: number) => void, duration = 2200) => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(start);
        }
      }, 16);
      return timer;
    };

    const t1 = animate(24.8, setCount);
    const t2 = animate(15, setHours, 2600);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <div className="relative min-h-screen bg-ink flex items-center pt-32 pb-20 overflow-hidden grain">
      {/* Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="aurora-blob w-[900px] h-[900px] bg-brand-secondary/25 top-0 right-0 -translate-y-1/3 translate-x-1/4"></div>
        <div className="aurora-blob w-[700px] h-[700px] bg-brand-primary/60 bottom-0 left-0 translate-y-1/3 -translate-x-1/4" style={{ animationDelay: '-6s' }}></div>
        <div className="aurora-blob w-[500px] h-[500px] bg-brand-accent/15 top-1/2 left-1/3" style={{ animationDelay: '-12s' }}></div>
        <div className="absolute inset-0 dot-grid-light opacity-40"></div>
        {/* Horizon glow line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="rise-in inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand-mint text-xs font-bold uppercase tracking-[0.25em] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Veterinary Operations, Reimagined
          </div>

          <h2 className="rise-in text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold text-white leading-[1.02] tracking-tight mb-8 font-display" style={{ '--rise-delay': '150ms' } as React.CSSProperties}>
            Smarter{' '}
            <em className="text-gradient-violet font-light pr-1">operations</em>
            <br />
            for modern{' '}
            <span className="relative inline-block">
              vets.
              {/* EKG flourish under the word */}
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                <path className="ekg-path" d="M0 14 H60 L72 14 L80 4 L90 22 L98 14 H200" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h2>

          <p className="rise-in text-xl md:text-2xl text-slate-300/90 mb-12 max-w-xl font-light leading-relaxed" style={{ '--rise-delay': '300ms' } as React.CSSProperties}>
            We bridge healthcare technology and veterinary excellence — turning your practice data into time saved, revenue found, and better medicine.
          </p>

          <div className="rise-in flex flex-col sm:flex-row gap-4 mb-16" style={{ '--rise-delay': '450ms' } as React.CSSProperties}>
            <a href="#contact" className="shine-effect group bg-brand-accent text-brand-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-2xl shadow-brand-secondary/30 flex items-center justify-center gap-2">
              Book a Free Audit
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#solutions" className="group glass text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-brand-accent/40 transition-all flex items-center justify-center gap-2">
              Explore Solutions
              <svg className="w-4 h-4 text-brand-mint group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>

          {/* Stat strip */}
          <div className="rise-in grid grid-cols-3 max-w-lg divide-x divide-white/10" style={{ '--rise-delay': '600ms' } as React.CSSProperties}>
            {[
              { value: '10+', label: 'PIMS systems supported' },
              { value: '3', label: 'Integrated solution lines' },
              { value: '100%', label: 'Vendor-agnostic advice' },
            ].map((s) => (
              <div key={s.label} className="px-5 first:pl-0">
                <p className="text-3xl font-black text-white font-display">{s.value}</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative rise-in" style={{ '--rise-delay': '350ms' } as React.CSSProperties}>
          <div className="relative z-10">
            {/* Framed image */}
            <div className="glass rounded-[2.5rem] p-3 shadow-2xl shadow-black/40">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative bg-brand-primary">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200"
                  alt="Veterinary care for a happy dog"
                  className="w-full h-full object-cover animate-slow-zoom opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
                <div className="absolute inset-0 bg-brand-secondary/15 mix-blend-overlay"></div>

                {/* Floating growth card */}
                <div className="absolute top-8 right-8 glass shadow-xl p-4 rounded-2xl float-bob">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Growth Index</p>
                  </div>
                  <p className="text-2xl font-black text-white font-display">+{count.toFixed(1)}%</p>
                </div>

                {/* Floating hours-saved card */}
                <div className="absolute bottom-8 left-8 glass shadow-xl p-4 rounded-2xl float-bob" style={{ animationDelay: '-2.5s' }}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <svg className="w-3 h-3 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Hours Saved / Wk</p>
                  </div>
                  <p className="text-2xl font-black text-white font-display">{Math.round(hours)}+</p>
                </div>
              </div>
            </div>

            {/* Rotated accent badge */}
            <div className="absolute -bottom-8 -right-6 bg-brand-accent p-7 rounded-3xl shadow-2xl shadow-brand-secondary/40 text-brand-primary rotate-6 hover:rotate-0 transition-transform cursor-default float-bob" style={{ '--bob-rotate': '6deg', animationDelay: '-1s' } as React.CSSProperties}>
              <p className="text-4xl font-black leading-none font-display">50+</p>
              <p className="text-[10px] font-black uppercase tracking-widest mt-2 leading-tight">Combined Years<br />Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
