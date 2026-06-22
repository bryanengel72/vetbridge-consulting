import React from 'react';

const stats = [
  { label: 'Procedures', value: '1,566+' },
  { label: 'ZIP codes', value: '183' },
  { label: 'Revenue tracked', value: '$249K', accent: true },
  { label: 'Service lines', value: '5' },
];

const Referrals: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 reveal">
        <h6 className="text-brand-secondary font-black tracking-[0.25em] uppercase text-xs mb-4">Client Spotlight</h6>
        <h2 className="text-4xl md:text-5xl font-black text-brand-primary">Real Impact, In the Field</h2>
      </div>

      <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.15s' }}>
        <div className="relative bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
          {/* Flame accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-mint via-brand-accent to-brand-secondary"></div>

          <div className="p-7 md:p-9">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              {/* Swap this svg for the real NAWS logo if available */}
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Paw print">
                  <ellipse cx="5.6" cy="11" rx="1.9" ry="2.5" />
                  <ellipse cx="9.7" cy="7.4" rx="2" ry="2.7" />
                  <ellipse cx="14.3" cy="7.4" rx="2" ry="2.7" />
                  <ellipse cx="18.4" cy="11" rx="1.9" ry="2.5" />
                  <path d="M12 12.2c-2.9 0-5.2 2.3-5.2 4.8 0 2 1.7 3.1 3.6 2.3.5-.2 1-.3 1.6-.3s1.1.1 1.6.3c1.9.8 3.6-.3 3.6-2.3 0-2.5-2.3-4.8-5.2-4.8z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-brand-primary text-lg leading-tight">Northland Animal Welfare Society</p>
                <p className="text-sm text-slate-500">Kansas City, MO&nbsp; ·&nbsp; Community veterinary clinic</p>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                  <p className="text-[11px] text-slate-400 uppercase tracking-[0.06em] font-bold mb-1.5">{s.label}</p>
                  <p className={`text-2xl font-black leading-none ${s.accent ? 'text-brand-secondary' : 'text-brand-primary'}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Caption */}
            <p className="text-xs text-slate-400 italic mt-6">
              Live impact dashboard built &amp; maintained by VetBridge Consulting&nbsp; ·&nbsp; 2026 YTD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
