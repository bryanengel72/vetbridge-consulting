import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Procedures', end: 1566, format: (v: number) => `${Math.round(v).toLocaleString()}+` },
  { label: 'ZIP codes', end: 183, format: (v: number) => `${Math.round(v)}` },
  { label: 'Revenue tracked', end: 249, format: (v: number) => `$${Math.round(v)}K`, accent: true },
  { label: 'Service lines', end: 5, format: (v: number) => `${Math.round(v)}` },
];

// Illustrative monthly activity for the mini chart
const chartBars = [34, 52, 41, 68, 57, 79, 64, 88, 72, 95, 84, 100];

const Referrals: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-14 reveal">
        <h6 className="text-brand-secondary font-black tracking-[0.25em] uppercase text-xs mb-5 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-brand-secondary"></span>
          Client Spotlight
          <span className="w-8 h-px bg-brand-secondary"></span>
        </h6>
        <h2 className="text-4xl md:text-5xl font-semibold text-brand-primary font-display">Real impact, <em className="text-brand-secondary font-light">in the field</em></h2>
      </div>

      <div className="max-w-4xl mx-auto reveal stagger-1" ref={cardRef}>
        <div className="relative bg-white rounded-[2.5rem] border border-brand-secondary/10 shadow-2xl shadow-brand-primary/10 overflow-hidden">
          {/* Accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-mint via-brand-accent to-brand-secondary"></div>

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-lilac-mist flex items-center justify-center shrink-0 text-brand-secondary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-label="Paw print">
                    <ellipse cx="5.6" cy="11" rx="1.9" ry="2.5" />
                    <ellipse cx="9.7" cy="7.4" rx="2" ry="2.7" />
                    <ellipse cx="14.3" cy="7.4" rx="2" ry="2.7" />
                    <ellipse cx="18.4" cy="11" rx="1.9" ry="2.5" />
                    <path d="M12 12.2c-2.9 0-5.2 2.3-5.2 4.8 0 2 1.7 3.1 3.6 2.3.5-.2 1-.3 1.6-.3s1.1.1 1.6.3c1.9.8 3.6-.3 3.6-2.3 0-2.5-2.3-4.8-5.2-4.8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-brand-primary text-xl leading-tight font-display">Northland Animal Welfare Society</p>
                  <p className="text-sm text-slate-500">Kansas City, MO&nbsp; ·&nbsp; Community veterinary clinic</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 self-start sm:self-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest">Live Dashboard</span>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-6 items-stretch">
              {/* Stat grid */}
              <div className="md:col-span-3 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="bg-lilac-mist/70 rounded-2xl p-5 border border-brand-secondary/10 flex flex-col justify-center">
                    <p className="text-[11px] text-slate-500 uppercase tracking-[0.08em] font-bold mb-2">{s.label}</p>
                    <p className={`text-3xl font-black leading-none font-display tabular-nums ${s.accent ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                      {s.format(s.end * progress)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="md:col-span-2 bg-brand-primary rounded-2xl p-5 relative overflow-hidden grain flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-secondary/40 rounded-full blur-[60px]"></div>
                <p className="relative text-[11px] text-brand-mint/80 uppercase tracking-[0.08em] font-bold mb-4">Monthly activity</p>
                <div className="relative flex items-end gap-1.5 flex-grow min-h-[90px]">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-md transition-all duration-700 ${i === chartBars.length - 1 ? 'bg-brand-accent' : 'bg-white/20'}`}
                      style={{ height: `${started ? h : 4}%`, transitionDelay: `${i * 60}ms` }}
                    ></div>
                  ))}
                </div>
                <p className="relative text-[10px] text-white/40 mt-3 font-medium">Jan – Dec, illustrative trend</p>
              </div>
            </div>

            {/* Caption */}
            <p className="text-xs text-slate-400 italic mt-7">
              Live impact dashboard built &amp; maintained by VetBridge Consulting&nbsp; ·&nbsp; 2026 YTD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
