import React, { useEffect, useState } from 'react';

/**
 * Option B — "Product Console"
 * Dark, but the payload is a real product surface instead of a stock photo:
 * a practice-intelligence panel built in markup. Precision grid, no aurora blobs.
 */

const BARS = [38, 52, 44, 61, 57, 73, 68, 86, 79, 94];

const HeroProduct: React.FC = () => {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const target = 24.8;
    const id = setInterval(() => {
      frame += 1;
      const t = Math.min(frame / 60, 1);
      setRevenue(target * (1 - Math.pow(1 - t, 3)));
      if (t >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink flex items-center pt-32 pb-20 overflow-hidden">
      {/* precision grid + a single focused glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(196,181,253,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,0.055) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent 75%)',
          }}
        ></div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand-secondary/20 blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-14 items-center">
        {/* ── Copy ──────────────────────────────────────── */}
        <div className="lg:col-span-6">
          <div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] pl-2 pr-4 py-1.5 mb-9">
            <span className="rounded-full bg-brand-accent/20 text-brand-mint text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">New</span>
            <span className="text-xs font-medium text-slate-300">Practice intelligence, live from your PIMS</span>
          </div>

          <h2
            className="rise-in text-5xl sm:text-6xl lg:text-[3.75rem] font-semibold text-white leading-[1.06] tracking-[-0.03em] mb-7 max-w-xl"
            style={{ '--rise-delay': '120ms' } as React.CSSProperties}
          >
            Your practice data,
            <br />
            finally <span className="text-gradient-violet">working for you</span>.
          </h2>

          <p
            className="rise-in text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg mb-10"
            style={{ '--rise-delay': '240ms' } as React.CSSProperties}
          >
            We connect the systems you already own — PIMS, labs, imaging, biomedical —
            into one operational picture. Time saved, revenue found, better medicine.
          </p>

          <div
            className="rise-in flex flex-col sm:flex-row gap-3.5 mb-12"
            style={{ '--rise-delay': '360ms' } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="shine-effect group bg-white text-ink px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-accent transition-colors duration-300"
            >
              Book a free audit
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#solutions"
              className="border border-white/15 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
            >
              Explore solutions
            </a>
          </div>

          {/* systems row instead of vanity stats */}
          <div
            className="rise-in"
            style={{ '--rise-delay': '480ms' } as React.CSSProperties}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 mb-4">
              Vendor-agnostic across
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-400">
              {['Cornerstone', 'AVImark', 'ezyVet', 'Impromed', 'Vetspire', '+ more'].map((n) => (
                <span key={n} className="hover:text-brand-mint transition-colors">{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Product panel ─────────────────────────────── */}
        <div
          className="hidden lg:block lg:col-span-6 rise-in"
          style={{ '--rise-delay': '300ms' } as React.CSSProperties}
        >
          <div className="relative" style={{ perspective: '1600px' }}>
            <div
              className="rounded-2xl border border-white/10 bg-[#1b1240]/80 backdrop-blur-xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] overflow-hidden"
              style={{ transform: 'rotateY(-7deg) rotateX(3deg)' }}
            >
              {/* window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.03]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
                <p className="ml-3 text-[11px] font-semibold text-slate-400 tracking-wide">
                  VetBridge · Practice Overview
                </p>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Live
                </span>
              </div>

              <div className="p-6">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Revenue lift', value: `+${revenue.toFixed(1)}%`, tone: 'text-emerald-400' },
                    { label: 'Hours saved / wk', value: '15+', tone: 'text-white' },
                    { label: 'Missed charges', value: '−63%', tone: 'text-brand-mint' },
                  ].map((k) => (
                    <div key={k.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2 leading-tight">{k.label}</p>
                      <p className={`text-2xl font-semibold tracking-tight ${k.tone}`}>{k.value}</p>
                    </div>
                  ))}
                </div>

                {/* chart */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 mb-5">
                  <div className="flex items-baseline justify-between mb-5">
                    <p className="text-xs font-semibold text-slate-300">Production per DVM</p>
                    <p className="text-[10px] font-medium text-slate-500">Last 10 weeks</p>
                  </div>
                  <div className="flex items-end gap-2 h-28">
                    {BARS.map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-[3px] bg-gradient-to-t from-brand-secondary/40 to-brand-accent" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* connected systems list */}
                <div className="space-y-2.5">
                  {[
                    { name: 'Cornerstone PIMS', state: 'Synced' },
                    { name: 'IDEXX lab results', state: 'Synced' },
                    { name: 'Digital radiography', state: 'Mapping' },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center justify-between rounded-lg border border-white/[0.06] px-4 py-2.5">
                      <p className="text-xs font-medium text-slate-300">{r.name}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${r.state === 'Synced' ? 'text-emerald-400' : 'text-brand-gold'}`}>
                        {r.state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;
