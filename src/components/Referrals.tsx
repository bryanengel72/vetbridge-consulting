import React, { useEffect, useRef, useState } from 'react';

const nfInt = new Intl.NumberFormat('en-US');
const nfUsd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/* Figures come from the live NAWS dashboard, 2026 Jan–Jul. Only the four
   source numbers are written down; totals, shares and per-surgery revenue are
   derived, so nothing on the page can disagree with anything else. */
const SOURCE = {
  surgeries: 2318,
  surgeries2025: 2190,
  vaccines: 6133,
  surgeryRevenue: 149573,
  vaccineRevenue: 83400,
  perSurgery2025: 63.1,
};

const procedures = SOURCE.surgeries + SOURCE.vaccines;
const revenue = SOURCE.surgeryRevenue + SOURCE.vaccineRevenue;
const perSurgery = SOURCE.surgeryRevenue / SOURCE.surgeries;
const surgeryShare = (SOURCE.surgeries / procedures) * 100;
const vaccineShare = (SOURCE.vaccines / procedures) * 100;
const surgeryDelta = ((SOURCE.surgeries - SOURCE.surgeries2025) / SOURCE.surgeries2025) * 100;

const stats = [
  {
    label: 'Surgeries YTD',
    end: SOURCE.surgeries,
    fmt: 'int',
    sub: `vs ${nfInt.format(SOURCE.surgeries2025)} in 2025 · +${surgeryDelta.toFixed(1)}%`,
  },
  {
    label: 'Procedures tracked',
    end: procedures,
    fmt: 'int',
    sub: `Surgeries ${surgeryShare.toFixed(1)}% · Vaccines ${vaccineShare.toFixed(1)}%`,
  },
  {
    label: 'Revenue tracked',
    end: revenue,
    fmt: 'usd',
    sub: `Surgery ${nfUsd.format(SOURCE.surgeryRevenue)} · Vaccine ${nfUsd.format(SOURCE.vaccineRevenue)}`,
  },
  {
    label: 'Revenue per surgery',
    end: perSurgery,
    fmt: 'usd2',
    sub: `2025 full year · $${SOURCE.perSurgery2025.toFixed(2)}`,
  },
] as const;

const views = [
  'Overview', 'Year-over-Year', 'Surgeries', 'Vaccines',
  'Dental & Grooming', 'Acupuncture', 'Microchipping', 'Clients',
  'Demographics', 'Geography', 'Funding', 'AI Insights',
];

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
                  <p className="ins-num">{nfInt.format(SOURCE.surgeries)} surgeries &nbsp;·&nbsp; +{surgeryDelta.toFixed(1)}%</p>
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
