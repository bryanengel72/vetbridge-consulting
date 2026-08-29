import React, { useState } from 'react';

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const nfInt = new Intl.NumberFormat('en-US');

/* A worksheet, not a black box: the formula for every derived line is
   printed beside it so the visitor can argue with the maths. */
const ROICalculator: React.FC = () => {
  const [vets, setVets] = useState(3);
  const [rev, setRev] = useState(650000);
  const [eff, setEff] = useState(15);
  const [appts, setAppts] = useState(15);

  const practiceRevenue = vets * rev;              // E = A × B
  const recovered = practiceRevenue * (eff / 100); // F = E × C
  const valuation = recovered * 4.5;               // G = F × 4.5
  const addedAppts = Math.round(vets * appts * 250 * (eff / 100)); // H

  return (
    <section id="estimator" aria-labelledby="h-est" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="row">
          <div className="stub">
            <span className="idx">07</span>
            <span>Estimator</span>
          </div>

          <div>
            <div className="rv" style={{ marginBottom: 'var(--s5)' }}>
              <h2
                id="h-est"
                style={{ fontSize: 'var(--t-4)', maxWidth: '16ch', marginBottom: 'var(--s3)' }}
              >
                Rough math on what this is worth.
              </h2>
              <p className="lead">
                Fill in the four lines you already know. The formulas are shown so you can argue
                with them. These are estimates on industry multiples, not a quote — the audit is
                where the real numbers come from.
              </p>
            </div>

            <form className="work rv" style={{ '--d': '80ms' } as React.CSSProperties}>
              <div className="wl">
                <span className="ln">A</span>
                <label htmlFor="w-vets">Number of DVMs</label>
                <div className="ctl">
                  <input
                    id="w-vets" type="range" min={1} max={20} step={1}
                    value={vets} onChange={(e) => setVets(Number(e.target.value))}
                  />
                </div>
                <output htmlFor="w-vets">{vets}</output>
              </div>

              <div className="wl">
                <span className="ln">B</span>
                <label htmlFor="w-rev">Revenue per DVM, per year</label>
                <div className="ctl">
                  <input
                    id="w-rev" type="number" inputMode="numeric"
                    min={200000} max={2000000} step={10000}
                    value={rev} onChange={(e) => setRev(Number(e.target.value))}
                    style={{
                      border: '1px solid var(--rule-ui)', background: 'transparent',
                      padding: '10px 12px', fontFamily: 'var(--mono)', width: '100%',
                      minHeight: 48, color: 'var(--fg)',
                    }}
                  />
                  <p className="meta" style={{ marginTop: 6 }}>Industry average runs $600K–$800K</p>
                </div>
                <output htmlFor="w-rev">{usd.format(rev || 0)}</output>
              </div>

              <div className="wl">
                <span className="ln">C</span>
                <label htmlFor="w-eff">Efficiency gain assumed</label>
                <div className="ctl">
                  <input
                    id="w-eff" type="range" min={5} max={40} step={1}
                    value={eff} onChange={(e) => setEff(Number(e.target.value))}
                  />
                  <p className="meta" style={{ marginTop: 2 }}>
                    Conservative 5% &nbsp;·&nbsp; Aggressive 40%. Above 25% assumes you also change
                    how you schedule.
                  </p>
                </div>
                <output htmlFor="w-eff">{eff}%</output>
              </div>

              <div className="wl">
                <span className="ln">D</span>
                <label htmlFor="w-appts">Appointments per DVM, per day</label>
                <div className="ctl">
                  <input
                    id="w-appts" type="range" min={8} max={30} step={1}
                    value={appts} onChange={(e) => setAppts(Number(e.target.value))}
                  />
                </div>
                <output htmlFor="w-appts">{appts}</output>
              </div>

              <div className="wl wl--out">
                <span className="ln">E</span>
                <span className="nm">Practice revenue</span>
                <span className="fx">A × B</span>
                <span className="val">{usd.format(practiceRevenue)}</span>
              </div>
              <div className="wl wl--out wl--total">
                <span className="ln">F</span>
                <span className="nm">Annual revenue recovered</span>
                <span className="fx">E × C</span>
                <span className="val" style={{ color: 'var(--signal)' }}>{usd.format(recovered)}</span>
              </div>
              <div className="wl wl--out">
                <span className="ln">G</span>
                <span className="nm">Estimated valuation change</span>
                <span className="fx">F × 4.5 EBITDA</span>
                <span className="val">{usd.format(valuation)}</span>
              </div>
              <div className="wl wl--out">
                <span className="ln">H</span>
                <span className="nm">Additional appointments / year</span>
                <span className="fx">A × D × 250 × C</span>
                <span className="val">{nfInt.format(addedAppts)}</span>
              </div>
            </form>

            <div
              style={{
                display: 'flex', flexWrap: 'wrap', gap: 'var(--s3)',
                alignItems: 'center', marginTop: 'var(--s4)',
              }}
            >
              <a className="btn" href="#contact">Book a free audit</a>
              <p className="meta" style={{ maxWidth: '44ch' }}>
                Illustrative only. Not a projection of your results and not an offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
