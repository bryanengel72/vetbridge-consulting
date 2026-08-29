import React from 'react';

const commitments = [
  {
    title: 'We take no commissions.',
    desc: "No reseller agreements, no referral fees, nothing paid to us by a vendor. Our only incentive is that the thing works, because that's what gets us the next engagement.",
  },
  {
    title: 'We work inside what you already run.',
    desc: 'Cornerstone, ezyVet, AVImark, whatever is on your machines. Replacing a PIMS costs a year and a lot of goodwill, and we will talk you out of it unless there is genuinely no other way.',
  },
  {
    title: 'Every engagement has a number on it.',
    desc: "Hours saved, revenue found, or errors eliminated, agreed before we start. If we can't name the number in advance, we'll tell you it isn't worth doing yet.",
  },
];

/* The carbon copy — the one inverted band. Its tokens always sit opposite
   the page, so it flips to paper in dark theme. */
const WhyChooseUs: React.FC = () => {
  return (
    <section id="how" className="carbon" aria-labelledby="h-how">
      <div className="shell">
        <div className="row">
          <div className="stub">
            <span className="idx">06</span>
            <span>How we work</span>
          </div>

          <div>
            <h2
              id="h-how"
              className="rv"
              style={{ fontSize: 'var(--t-4)', maxWidth: '17ch', marginBottom: 'var(--s6)' }}
            >
              There's no software for us to sell you.
            </h2>

            {commitments.map((c) => (
              <div className="commit rv" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}

            <div className="rv" style={{ marginTop: 'var(--s6)', display: 'grid', gap: 'var(--s4)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--t-2)', marginBottom: 'var(--s2)' }}>
                  Start with the audit.
                </h3>
                <p style={{ color: 'var(--carbon-fg2)', maxWidth: '54ch' }}>
                  A call, a look at your last twelve months of practice data, and a written summary
                  of what we'd change and what it's worth. Free, and there's nothing to sign at the
                  end of it.
                </p>
              </div>
              <div>
                <a className="btn" href="#contact">Book a free audit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
