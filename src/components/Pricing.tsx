import React from 'react';

/* The fee schedule is a worksheet: lettered lines like the estimator's A–H,
   mono fees on the right rail. Order is the client journey — audit, roadmap,
   engagements, then the care plan that follows a build. */
const lines = [
  {
    letter: 'A',
    title: 'Practice audit',
    fee: '$0',
    feeNote: 'Always',
    free: true,
    sub: "About an hour on a call, plus a look at your last twelve months of data. Read-only access — we never touch your systems.",
    items: [
      'Your top two or three operational findings',
      'One number: what the gap is costing you per year',
      "If your software is fine, the audit says so — and we're done",
    ],
  },
  {
    letter: 'B',
    title: 'Operational roadmap',
    fee: '$1,500',
    feeNote: 'One-time · credited',
    free: false,
    sub: "The full prioritized 90-day plan behind the audit's findings — what to fix, in what order, and what each fix is worth. Standalone, or credited in full toward your first engagement.",
    items: [] as string[],
  },
  {
    letter: 'C',
    title: 'VetRev — pricing & billing analysis',
    fee: 'from $5,000',
    feeNote: 'Typical $5,000–8,500',
    free: false,
    sub: 'True cost per visit by service and by doctor, your top billing codes against market rates, wellness plans priced off your numbers. Delivered in 3–4 weeks.',
    items: [],
  },
  {
    letter: 'D',
    title: 'VetInsight — data unification build',
    fee: 'from $12,000',
    feeNote: 'Typical $12,000–25,000',
    free: false,
    sub: 'Scheduling, labs, inventory and billing feeding one place you can actually query. Reports built around your questions. Delivered in 6–10 weeks.',
    items: [],
  },
];

const tiers = [
  {
    name: 'Essentials',
    fee: '$750',
    mark: false,
    rows: [
      ['Response', '2 business days'],
      ['Enhancement hours', '1 / mo'],
      ['Monitoring & fixes', 'Included'],
      ['Monthly check-in', 'Included'],
    ],
  },
  {
    name: 'Standard',
    fee: '$1,250',
    mark: true,
    rows: [
      ['Response', 'Next business day'],
      ['Enhancement hours', '3 / mo'],
      ['Monitoring & fixes', 'Included'],
      ['Monthly check-in', 'Included'],
    ],
  },
  {
    name: 'Priority',
    fee: '$2,500',
    mark: false,
    rows: [
      ['Response', 'Same day'],
      ['Enhancement hours', '6 / mo'],
      ['Monitoring & fixes', 'Included'],
      ['Monthly check-in', 'Included'],
    ],
  },
];

const notes = [
  {
    title: 'Nonprofits and shelters: 40% off this schedule.',
    body: 'Policy, not a negotiation. Our first client is a nonprofit and shaped how we work.',
  },
  {
    title: 'Multi-site groups price per location.',
    body: 'Care plans scale with locations, not with renegotiation. Engagement quotes cover the group.',
  },
  {
    title: 'VetHub is in development — it has no price yet.',
    body: "Monitor-to-record integration isn't deployed, so it isn't on this schedule. Pricing publishes when it ships; care-plan clients hear first.",
  },
  {
    title: 'No commissions, ever.',
    body: 'Nothing on this page is padded by a vendor referral. If the software you’re running is fine, the audit will say so.',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" aria-labelledby="h-fees">
      <div className="shell">
        <div className="row">
          <div className="stub">
            <span className="idx">07</span>
            <span>Fee schedule</span>
          </div>

          <div>
            <h2
              id="h-fees"
              className="rv"
              style={{ fontSize: 'var(--t-4)', maxWidth: '16ch', marginBottom: 'var(--s3)' }}
            >
              The audit is free. The fixes have a number on them.
            </h2>
            <p className="lead rv" style={{ marginBottom: 'var(--s5)' }}>
              Every engagement is a fixed fee, agreed before we start, priced against a number
              we name in advance — hours saved, revenue found, or errors eliminated. No hourly
              billing, and the quote doesn't move.
            </p>

            <div className="fee-sheet rv">
              {lines.map((l) => (
                <div className="fee-line" data-free={l.free || undefined} key={l.letter}>
                  <span className="fee-letter">{l.letter}</span>
                  <div>
                    <h3>{l.title}</h3>
                    <p className="fee-sub">{l.sub}</p>
                    {l.items.length > 0 && (
                      <ul className="fee-inc">
                        {l.items.map((it) => (
                          <li key={it}>
                            <i aria-hidden="true">&mdash;</i>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="fee-amt">
                    {l.fee}
                    <small>{l.feeNote}</small>
                  </p>
                </div>
              ))}
            </div>

            <h3 className="rv" style={{ fontSize: 'var(--t-2)', marginTop: 'var(--s6)' }}>
              After the build: the care plan.
            </h3>
            <p className="prose rv" style={{ marginTop: 'var(--s2)' }}>
              Monitoring, fixes, updates and small enhancements, per location, per month.
              Every plan includes a monthly check-in on your numbers.
            </p>

            <div className="fee-tiers">
              {tiers.map((t, i) => (
                <div
                  className="fee-tier rise"
                  data-mark={t.mark || undefined}
                  style={{ '--d': `${i * 110}ms` } as React.CSSProperties}
                  key={t.name}
                >
                  <p className="fee-tname">{t.name}</p>
                  <p className="fee-tfee">
                    {t.fee}
                    <span> /location/mo</span>
                  </p>
                  <ul>
                    {t.rows.map(([k, v]) => (
                      <li key={k}>
                        <span>{k}</span>
                        <b>{v}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="meta rv" style={{ marginTop: 'var(--s3)', maxWidth: '62ch' }}>
              Fixes never count against enhancement hours — if something we built breaks, we fix
              it. Enhancement hours cover new asks: new views, new reports, small changes.
              Anything larger gets quoted as its own fixed-fee engagement. Hours don't roll over.
            </p>

            <div className="fee-notes rv">
              {notes.map((n) => (
                <div className="fee-note" key={n.title}>
                  <h4>{n.title}</h4>
                  <p>{n.body}</p>
                </div>
              ))}
            </div>

            <div className="rv" style={{ marginTop: 'var(--s5)' }}>
              <a className="btn" href="#contact">Book a free audit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
