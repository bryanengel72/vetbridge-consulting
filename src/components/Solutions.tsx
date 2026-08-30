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
      "Most practices set prices off industry averages that don't know your rent, your drug costs, or your patient mix. So you learn you've been underwater on a procedure a year in.",
    listHead: 'What changes',
    items: [
      'True cost per visit, by service and by doctor',
      'Your top billing codes against market rates',
      'Wellness plans priced off your numbers, not a template',
      'Stocking and staffing for the patients you actually see',
    ],
  },
  {
    idx: '02',
    tag: 'One place for all of it',
    title: 'VetInsight',
    status: null as string | null,
    problem:
      'Scheduling lives in the PIMS, labs in the analyzer software, inventory in a spreadsheet. "Are we actually at capacity on Tuesdays?" takes three exports to answer, so nobody asks.',
    listHead: 'What changes',
    items: [
      'Every system feeding one place you can actually query',
      "Reports built around your questions, not a vendor's template",
      'Scheduling, clinical outcomes and inventory in the same view',
      'A clean data foundation, if you want AI later',
    ],
  },
  {
    idx: '03',
    tag: 'Monitors → record',
    title: 'VetHub',
    status: 'In development · not yet deployed',
    problem:
      'A tech reads a number off the monitor and types it into the record — ten to fifteen hours a week of transcription, and every entry a chance to drop a digit when it matters most.',
    listHead: 'What it will do',
    items: [
      'Vitals write themselves into the record, timestamped, every minute',
      'No transcription errors, because nobody is transcribing',
      'Complete anesthesia and hospitalization records without chasing anyone',
      'Your techs get the time back',
    ],
  },
];

/* The card front carries the problem; the list of what changes lives on the
   back. Clicking anywhere on the card turns it over. Without JS the two faces
   simply stack, so nothing is hidden from a reader or a crawler. */
const ServiceCard: React.FC<{ s: (typeof solutions)[number]; i: number }> = ({ s, i }) => {
  const [flipped, setFlipped] = useState(false);
  const down = useRef<{ x: number; y: number } | null>(null);
  const moved = useRef(false);
  const frontBtn = useRef<HTMLButtonElement>(null);
  const backBtn = useRef<HTMLButtonElement>(null);
  const backId = `svc-back-${s.title.toLowerCase()}`;

  /* The face being turned away goes inert, so focus has to follow the flip or
     it would be dropped on the document. */
  useEffect(() => {
    if (!moved.current) return;
    (flipped ? backBtn : frontBtn).current?.focus();
  }, [flipped]);

  /* A swipe across the track must not read as a click, and the contact link on
     the back has to keep working. */
  const onPointerDown = (e: React.PointerEvent) => {
    down.current = { x: e.clientX, y: e.clientY };
  };
  const onClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) return;
    const d = down.current;
    if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 8) return;
    moved.current = true;
    setFlipped((v) => !v);
  };

  return (
    <article
      className="card rise"
      data-flipped={flipped || undefined}
      style={{ '--d': `${i * 110}ms` } as React.CSSProperties}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-face card-face--front" inert={flipped}>
          <p className="card-idx">{s.idx}</p>
          <p className="label card-tag" style={{ color: 'var(--signal)' }}>{s.tag}</p>
          <h3>{s.title}</h3>
          {s.status && <p className="status">{s.status}</p>}
          <p className="card-problem">{s.problem}</p>
          <button
            type="button"
            className="flip"
            ref={frontBtn}
            aria-expanded={flipped}
            aria-controls={backId}
          >
            {s.listHead} <i aria-hidden="true">&#8594;</i>
          </button>
        </div>

        <div className="card-face card-face--back" id={backId} inert={!flipped}>
          <p className="label card-tag" style={{ color: 'var(--signal)' }}>{s.title}</p>
          <p className="label back-head">{s.listHead}</p>
          <ul className="card-list">
            {s.items.map((item, k) => (
              <li key={item}>
                <i>{String(k + 1).padStart(2, '0')}</i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a className="link" href="#contact">Talk to us about {s.title}</a>
          <button type="button" className="flip flip--back" ref={backBtn}>
            <i aria-hidden="true">&#8592;</i> Back
          </button>
        </div>
      </div>
    </article>
  );
};

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
                <ServiceCard s={s} i={i} key={s.title} />
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
