import React from 'react';

const systems = [
  'Cornerstone', 'ezyVet', 'AVImark', 'IDEXX Neo', 'Shepherd', 'Digitail',
  'Covetrus Pulse', 'Vetspire', 'ImproMed', 'DaySmart Vet',
];

const Integrations: React.FC = () => {
  return (
    <div className="bg-ink border-t border-white/5 py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Vendor-agnostic &nbsp;·&nbsp; We work with the systems you already run
        </p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-4 pr-4">
          {[...systems, ...systems].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 px-6 py-3 rounded-full glass text-slate-300 font-semibold text-sm tracking-wide hover:text-white hover:border-brand-accent/40 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
