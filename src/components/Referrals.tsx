import React, { useEffect, useRef, useState } from 'react';

/* Figures come from the live NAWS dashboard, 2026 Jan–Jul. */
const stats = [
  { label: 'Surgeries YTD', end: 2318, fmt: 'int', sub: 'vs 2,190 in 2025 · +5.8%' },
  { label: 'Procedures tracked', end: 8451, fmt: 'int', sub: 'Surgeries 27.4% · Vaccines 72.6%' },
  { label: 'Revenue tracked', end: 232973, fmt: 'usd', sub: 'Surgery $149,573 · Vaccine $83,400' },
  { label: 'Revenue per surgery', end: 64.14, fmt: 'usd2', sub: '2025 full year · $63.10' },
] as const;

const views = [
  'Overview', 'Year-over-Year', 'Surgeries', 'Vaccines',
  'Dental & Grooming', 'Acupuncture', 'Microchipping', 'Clients',
  'Demographics', 'Geography', 'Funding', 'AI Insights',
];

const nfInt = new Intl.NumberFormat('en-US');
const nfUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const nfUsd2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

const format = (v: number, fmt: string) =>
  fmt === 'usd' ? nfUsd.format(Math.round(v))
  : fmt === 'usd2' ? nfUsd2.format(v)
  : nfInt.format(Math.round(v));

const Referrals: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1300, 1);
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="work" aria-labelledby="h-work" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="row">
          <div className="stub">
            <span className="idx">04</span>
            <span>Client work</span>
          </div>

          <div>
            <div className="rv" style={{ marginBottom: 'var(--s5)' }}>
              <h2 id="h-work" style={{ fontSize: 'var(--t-4)', maxWidth: '18ch', marginBottom: 'var(--s3)' }}>
                Northland Animal Welfare Society
              </h2>
              <p className="meta">
                Kansas City, MO &nbsp;/&nbsp; Community veterinary clinic &nbsp;/&nbsp; Live dashboard, 2026
              </p>
            </div>

            <div className="about" style={{ marginBottom: 'var(--s6)' }}>
              <div className="prose rv">
                <p>
                  NAWS runs low-cost spay/neuter and wellness clinics across the Northland. They
                  knew they were busy and they knew roughly where their clients came from, but not
                  in a form anyone could put in front of a grant committee.
                </p>
                <p>
                  We built them a dashboard that reads from Shepherd and keeps itself current —
                  twelve views across surgeries, vaccines, clients, geography and funding. The
                  figures below are the ones their board sees.
                </p>
              </div>
            </div>

            <div className="stats" ref={wrapRef}>
              {stats.map((s, i) => (
                <div className="stat rv" key={s.label} style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
                  <p className="label">{s.label}</p>
                  <p className="num big">{format(s.end * progress, s.fmt)}</p>
                  <p className="meta">{s.sub}</p>
                </div>
              ))}
            </div>
            <p className="meta" style={{ marginTop: 'var(--s4)' }}>
              2026 year to date, January–July. Dashboard built and maintained by VetBridge Consulting.
            </p>

            <div className="rv" style={{ marginTop: 'var(--s6)' }}>
              <p className="label" style={{ marginBottom: 'var(--s4)' }}>
                It doesn't just chart. It says what to do.
              </p>
              <div className="insights">
                <article className="insight">
                  <p className="ins-tag">▲ &nbsp;Ahead</p>
                  <p className="ins-num">2,318 surgeries &nbsp;·&nbsp; +5.8%</p>
                  <p className="ins-body">
                    Through July, surgeries are running ahead of 2025 (2,318 vs 2,190). July itself
                    was the strongest month of the year — 383 surgeries, up 17.4% year over year. At
                    this pace 2026 projects to roughly 3,974 surgeries and about $255K of revenue,
                    +9.6% against 2025's 3,662.
                  </p>
                </article>
                <article className="insight">
                  <p className="ins-tag">▼ &nbsp;Needs attention</p>
                  <p className="ins-num">Canine &nbsp;·&nbsp; −129 surgeries</p>
                  <p className="ins-body">
                    Canine surgeries fell 24.3% (530 → 401) against the same Jan–Jul period in 2025 —
                    the steepest decline of any segment. July's overall surge was driven by feline
                    and feral volume; canine stayed soft even then, 48 against 55 a year earlier.
                    Worth investigating canine demand and rescue mix.
                  </p>
                </article>
              </div>
            </div>

            <div className="rv" style={{ marginTop: 'var(--s6)' }}>
              <p className="label" style={{ marginBottom: 'var(--s4)' }}>
                Twelve views, one system of record
              </p>
              <ul className="systems systems--4">
                {views.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
