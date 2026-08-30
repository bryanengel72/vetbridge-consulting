import React, { useEffect, useRef, useState } from 'react';

/* Real NAWS figures, 2026 year to date against the same Jan–Jul window in
   2025. The bar is this year, the tick is last year. Rows land one at a time
   as the visitor scrolls — the comparison assembling itself. */
const SEGMENTS = [
  { name: 'All surgeries', now: 2318, prev: 2190, delta: '+5.8%', up: true },
  { name: 'Feral cat TNR', now: 593, prev: 480, delta: '+23.5%', up: true },
  { name: 'Canine surgeries', now: 401, prev: 530, delta: '−24.3%', up: false },
  { name: 'Rescue partners', now: 463, prev: 486, delta: '−4.6%', up: false },
];

const nf = new Intl.NumberFormat('en-US');

/* One sentence shape — the problem, then the counter in signal ink. Every
   variant must hold at 15ch without outgrowing the tallest, and claim only
   what read-only engagements deliver. */
const HEADLINES = [
  { a: "Your systems don't talk to each other.", b: 'We make them.' },
  { a: 'Your numbers hide in five systems.', b: 'We put them in one place.' },
  { a: 'Simple questions take three exports to answer.', b: 'Ask once.' },
];

const Hero: React.FC<{ place: string; meta: string }> = ({ place, meta }) => {
  /* One row is filled at rest so the panel reads as a chart in progress
     rather than an empty box; the rest fill across the first ~60vh. */
  const [landed, setLanded] = useState(1);
  const [head, setHead] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(
      () => setHead((h) => (h + 1) % HEADLINES.length),
      7000
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLanded(SEGMENTS.length);
      return;
    }
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.62)));
        setLanded(1 + Math.floor(p * (SEGMENTS.length - 0.001)));
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const allLanded = landed >= SEGMENTS.length;

  return (
    <section className="hero" aria-labelledby="h-hero">
      <div className="shell">
        <p className="label">
          01 &nbsp;/&nbsp; VetBridge Consulting &nbsp;·&nbsp; {place}
        </p>

        <h1 id="h-hero" className="h1-swap">
          {HEADLINES.map((h, i) => (
            <span
              key={h.b}
              className="h1-line"
              data-on={i === head || undefined}
              aria-hidden={i !== head || undefined}
            >
              {h.a} <em>{h.b}</em>
            </span>
          ))}
        </h1>

        <div className="hero-grid">
          <div>
            <p className="lead">
              We connect the PIMS, lab equipment, inventory and billing your practice
              already runs, so the numbers arrive on their own.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#contact">Book a free audit</a>
              <a className="btn btn--ghost" href="#services">What we do</a>
            </div>
            <p className="meta">{meta}</p>
          </div>

          <div>
            <div className="sheet">
              <div className="sheet-head">
                <span className="label">NAWS &nbsp;·&nbsp; Shepherd</span>
                <span className="meta">2026 YTD &nbsp;·&nbsp; Jan–Jul</span>
              </div>

              <div>
                {SEGMENTS.map((g, i) => {
                  const scale = Math.max(g.now, g.prev) * 1.12;
                  return (
                    <div className="bullet" key={g.name}>
                      <div className="bullet-head">
                        <span className="bullet-name">{g.name}</span>
                        <span className="bullet-val">
                          {nf.format(g.now)}
                          <em>{g.up ? '▲' : '▼'} {g.delta}</em>
                        </span>
                      </div>
                      <div className="bullet-track">
                        <i
                          className="bullet-fill"
                          style={{ width: i < landed ? `${(g.now / scale) * 100}%` : 0 }}
                        />
                        <b className="bullet-tick" style={{ left: `${(g.prev / scale) * 100}%` }} />
                      </div>
                      <div className="bullet-foot">
                        <span>2025 · {nf.format(g.prev)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`sheet-foot${allLanded ? ' done' : ''}`}>
                <span className="label state">Revenue tracked, year to date</span>
                <span className="keys">$232,973</span>
              </div>
            </div>

            <p className="meta sheet-note">
              Real figures from the dashboard we built for NAWS. Scroll — the comparison
              fills in.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
