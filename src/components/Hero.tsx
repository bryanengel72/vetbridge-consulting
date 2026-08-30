import React, { useEffect, useRef, useState } from 'react';
import heroImg from '../assets/hero-clinic.webp';

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

const Hero: React.FC = () => {
  /* One row is filled at rest so the panel reads as a chart in progress
     rather than an empty box; the rest fill across the first ~60vh. */
  const [landed, setLanded] = useState(1);
  const ticking = useRef(false);

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
          01 &nbsp;/&nbsp; VetBridge Consulting &nbsp;·&nbsp; Kansas City, Missouri
        </p>

        <h1 id="h-hero">
          Your systems don't talk to each other. <em>We make them.</em>
        </h1>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="lead">
              VetBridge connects the PIMS, lab equipment, inventory and billing your practice
              already runs, so the numbers arrive on their own. We came out of hospital IT.
              We take no vendor commissions and we don't sell software.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#contact">Book a free audit</a>
              <a className="btn btn--ghost" href="#services">What we do</a>
            </div>
            <p className="meta">About an hour on a call. You get a written summary either way.</p>
          </div>

          <div className="hero-sheet">
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
              Scroll — the comparison fills in. These are real figures from the dashboard we
              built for NAWS; it reads from Shepherd and keeps itself current.
            </p>
          </div>

          <figure className="plate rv">
            <div className="plate-head">
              <span className="label">Fig. 01</span>
              <span className="meta">Exam room</span>
            </div>
            <img
              src={heroImg}
              width={1600}
              height={712}
              decoding="async"
              alt="A veterinarian in scrubs talking with a client and her dog in an exam room."
            />
            <figcaption className="meta">
              Illustrative. Every figure on this page starts here — a consult, typed into
              Shepherd, read by the dashboard.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
