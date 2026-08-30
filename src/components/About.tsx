import React from 'react';

/* Every fact here is already in the paragraph copy. "50+" is years of
   combined healthcare-technology experience — not a delivery count. */
const disciplines = ['Device integration', 'Clinical interfaces', 'Revenue cycle'];

const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="h-about">
      <div className="shell">
        <div className="row">
          <div className="stub">
            <span className="idx">05</span>
            <span>Who we are</span>
          </div>

          <div className="about">
            <div className="rv">
              <h2
                id="h-about"
                style={{ fontSize: 'var(--t-4)', maxWidth: '16ch', marginBottom: 'var(--s5)' }}
              >
                We did this in hospitals first.
              </h2>
              <div className="prose">
                <p>
                  VetBridge came out of hospital IT: device integration, clinical interfaces,
                  revenue cycle. The problems inside a veterinary practice are the same ones,
                  minus the budget and minus the leverage to get a vendor to build you an
                  interface because you asked nicely.
                </p>
                <p>
                  We started VetBridge to do that work at a scale a five-doctor clinic can
                  actually pay for. Most of our time goes into systems that were never designed
                  to be connected to anything. That work is unglamorous and it is where the hours
                  and the money are hiding.
                </p>
                <p style={{ color: 'var(--fg)' }}>
                  We have no reseller agreements. If the software you're running is fine, the
                  audit will say so.
                </p>
              </div>
            </div>

            <div className="rv" style={{ '--d': '120ms' } as React.CSSProperties}>
              <div className="tally">
                <p className="num big">50+</p>
                <p className="label" style={{ marginTop: 'var(--s3)' }}>
                  Years in healthcare technology, combined
                </p>
                <ul>
                  {disciplines.map((d, i) => (
                    <li key={d}>
                      {d} <span>{String(i + 1).padStart(2, '0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
