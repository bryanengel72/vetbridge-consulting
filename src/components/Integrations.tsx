import React from 'react';

/* Shepherd is the only PIMS we've actually delivered in, so it sits on its own.
   The grid below is capability — systems we'll work in — and must never be
   labelled as experience. */
const agnostic = [
  'Cornerstone', 'ezyVet', 'AVImark',
  'IDEXX Neo', 'Digitail', 'Covetrus Pulse',
  'Vetspire', 'ImproMed', 'DaySmart Vet',
];

const Integrations: React.FC = () => {
  return (
    <section id="systems" style={{ paddingBlock: 'var(--s6)' }}>
      <div className="shell">
        <hr className="hairline draw rv" />
        <div className="row" style={{ paddingTop: 'var(--s5)' }}>
          <div className="stub">
            <span className="idx">03</span>
            <span>Systems</span>
          </div>

          <div>
            <p className="label rv" style={{ marginBottom: 'var(--s3)' }}>Delivered in</p>
            <div className="delivered rv" style={{ marginBottom: 'var(--s6)' }}>
              <p className="d-name">Shepherd</p>
              <p className="meta">
                Live dashboard for Northland Animal Welfare Society, running since 2026.
              </p>
            </div>

            <p className="label rv" style={{ marginBottom: 'var(--s3)' }}>
              We're PIMS-agnostic — we'll work in whatever you run
            </p>
            <ul className="systems systems--3 rv" style={{ '--d': '80ms' } as React.CSSProperties}>
              {agnostic.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
