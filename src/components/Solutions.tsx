import React, { useCallback, useEffect, useRef, useState } from 'react';

/* Order is the priority order: VetRev and VetInsight are delivered work,
   VetHub is not built yet and the card has to say so. */
const solutions = [
  {
    idx: '01',
    tag: 'Pricing & billing',
    title: 'VetRev',
    status: null as string | null,
    problem:
      "Most practices set prices off published industry averages. Those averages don't know your rent, your drug costs, or that a third of your patients are seniors on chronic meds. So you find out you've been underwater on a procedure after a year of running it.",
    listHead: 'What changes',
    items: [
      'What a visit actually costs you, broken out by service and by doctor',
      'Which billing codes you run most, and what the market charges for them',
      'Wellness plans priced off your own numbers instead of a template',
      'Enough population data to stock and staff for the patients you see',
    ],
  },
  {
    idx: '02',
    tag: 'One place for all of it',
    title: 'VetInsight',
    status: null as string | null,
    problem:
      'Scheduling lives in the PIMS, labs in the analyzer software, inventory in a spreadsheet, imaging somewhere else. A question as simple as "are we actually at capacity on Tuesdays?" takes a week and three exports to answer, so mostly nobody asks it.',
    listHead: 'What changes',
    items: [
      'Every system feeding one place you can actually query',
      "Reports built around your questions, not a vendor's report template",
      'Scheduling, clinical outcomes and inventory in the same view',
      'A clean data foundation, if you want to do anything with AI later',
    ],
  },
  {
    idx: '03',
    tag: 'Monitors → record',
    title: 'VetHub',
    status: 'In development · not yet deployed',
    problem:
      'A tech reads a number off the monitor and types it into the record. Across a practice that is ten to fifteen hours a week of transcription, and every entry is a chance to drop a digit or skip a reading during the part of the procedure where it matters most.',
    listHead: 'What it will do',
    items: [
      'Vitals write themselves into the record, timestamped, every minute',
      'No transcription errors, because nobody is transcribing',
      'Complete anesthesia and hospitalization records without chasing anyone',
      'Your techs get the time back',
    ],
  },
];

const Solutions: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dot, setDot] = useState(0);

  const sync = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    setScrollable(max > 4);
    setAtStart(t.scrollLeft <= 6);
    setAtEnd(t.scrollLeft >= max - 6);
    /* Map across the real scroll range, not by card step — when the overflow
       is less than one card wide the last dot must still be reachable. */
    setDot(max <= 0 ? 0 : Math.round((t.scrollLeft / max) * (solutions.length - 1)));
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener('resize', sync, { passive: true });
    return () => window.removeEventListener('resize', sync);
  }, [sync]);

  const nudge = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    const cards = t.querySelectorAll<HTMLElement>('.card');
    const step =
      cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : t.clientWidth;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    t.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id="services" aria-labelledby="h-svc">
      <div className="shell">
        <div className="row">
          <div className="stub">
            <span className="idx">03</span>
            <span>Services</span>
          </div>

          <div>
            <h2
              id="h-svc"
              className="rv"
              style={{ fontSize: 'var(--t-4)', maxWidth: '18ch', marginBottom: 'var(--s6)' }}
            >
              Three things practices call us about.
            </h2>

            <div
              className="svc-track"
              id="svc-track"
              ref={trackRef}
              onScroll={sync}
              tabIndex={0}
              role="region"
              aria-label="Services — scroll horizontally"
            >
              {solutions.map((s, i) => (
                <article
                  className="card rise"
                  key={s.title}
                  style={{ '--d': `${i * 110}ms` } as React.CSSProperties}
                >
                  <p className="card-idx">{s.idx}</p>
                  <p className="label card-tag" style={{ color: 'var(--signal)' }}>{s.tag}</p>
                  <h3>{s.title}</h3>
                  {s.status && <p className="status">{s.status}</p>}
                  <p className="card-problem">{s.problem}</p>
                  <p className="label" style={{ marginBottom: 'var(--s3)' }}>{s.listHead}</p>
                  <ul className="card-list">
                    {s.items.map((item, k) => (
                      <li key={item}>
                        <i>{String(k + 1).padStart(2, '0')}</i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="link" href="#contact">Talk to us about {s.title}</a>
                </article>
              ))}
            </div>

            <div className="track-nav" data-scrollable={scrollable}>
              <button
                className="tbtn"
                type="button"
                onClick={() => nudge(-1)}
                disabled={atStart}
                aria-label="Previous service"
                aria-controls="svc-track"
              >
                &#8592;
              </button>
              <button
                className="tbtn"
                type="button"
                onClick={() => nudge(1)}
                disabled={atEnd}
                aria-label="Next service"
                aria-controls="svc-track"
              >
                &#8594;
              </button>
              <ol className="rail" aria-hidden="true">
                {solutions.map((s, i) => (
                  <li key={s.title} data-on={i === dot ? 'true' : undefined} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
