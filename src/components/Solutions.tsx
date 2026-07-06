import React from 'react';

const solutions = [
  {
    id: 'rev',
    num: '01',
    title: 'VetRev',
    shortDesc: 'Identify pricing optimization opportunities based on your actual patient population and service patterns.',
    tag: 'Revenue Cycle Management',
    challenge: 'Without granular cost data, you\'re pricing services based on industry averages—not your reality. This means missed revenue opportunities and potential underpricing of high-cost procedures.',
    gain: [
      'Cost-per-patient visibility – Know exactly what each visit costs',
      'Competitive intelligence – Billing code frequency trends',
      'Strategic pricing models – Data-backed wellness plans',
      'Patient population insights – Optimize inventory and staffing'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: 'from-violet-400 to-violet-600',
  },
  {
    id: 'hub',
    num: '02',
    title: 'VetHub',
    shortDesc: 'Real-time, automatic capture of vital signs from physiological monitors directly into your EHR.',
    tag: 'Biomedical Integration',
    challenge: 'Clinical teams waste 10-15+ hours daily transcribing monitor readings. Every manual entry risks documentation errors and critical vitals can be missed.',
    gain: [
      'Time savings – Eliminate 10-15+ hours/week of manual entry',
      'Clinical accuracy – Zero transcription errors; automated capture',
      'Seamless workflow – Data flows directly to your PIMS/EHR',
      'Compliance confidence – Complete, timestamped records'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'insight',
    num: '03',
    title: 'VetInsight',
    shortDesc: 'Aggregate data from PIMS, lab equipment, imaging, inventory, and scheduling into a unified data lake.',
    tag: 'Analytics & Data Lake',
    challenge: 'Your data is siloed across multiple systems. You can\'t easily answer questions like "What\'s my actual capacity utilization?" or drive profitable outcomes.',
    gain: [
      '360-degree visibility – Access all systems from one dashboard',
      'Custom reporting – Get answers to specific business questions',
      'Holistic insights – Relate scheduling to clinical outcomes',
      'Future-ready – Foundation for advanced AI applications'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: 'from-purple-600 to-brand-primary',
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10 reveal">
        <div className="max-w-2xl">
          <h6 className="text-brand-secondary font-black tracking-[0.25em] uppercase text-xs mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-brand-secondary"></span>
            Core Ecosystem
          </h6>
          <h2 className="text-5xl md:text-6xl font-semibold text-brand-primary leading-[1.05] font-display">
            Architecture for <em className="text-brand-secondary font-light">peak</em> performance
          </h2>
        </div>
        <div className="bg-white p-7 rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-secondary/10 flex items-center gap-5">
          <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-secondary shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          </div>
          <div>
            <h4 className="font-bold text-brand-primary">Interactive Deep Dive</h4>
            <p className="text-sm text-slate-500">Hover or tap any card to see Challenges vs. Gains.</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {solutions.map((sol, i) => (
          <div key={sol.id} className={`group h-[640px] perspective-1000 reveal stagger-${i + 1}`}>
            <div className="relative w-full h-full card-flip preserve-3d cursor-default">

              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden bg-white p-10 rounded-[2.5rem] shadow-xl shadow-brand-primary/5 border border-brand-secondary/10 flex flex-col overflow-hidden">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${sol.accent} opacity-[0.06] rounded-bl-[6rem]`}></div>
                <span className="absolute top-8 right-9 text-6xl font-black text-brand-primary/5 font-display select-none">{sol.num}</span>

                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${sol.accent} flex items-center justify-center mb-8 text-white shadow-xl shadow-brand-secondary/25`}>
                  {sol.icon}
                </div>

                <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-brand-secondary/70 mb-4">{sol.tag}</span>
                <h3 className="text-4xl font-semibold text-brand-primary mb-6 font-display">{sol.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {sol.shortDesc}
                </p>

                <div className="mt-auto pt-8 border-t border-brand-secondary/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Flip for Challenge &amp; Gain</span>
                  <div className="w-9 h-9 rounded-full bg-lilac-mist flex items-center justify-center text-brand-secondary/40 group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-primary p-9 rounded-[2.5rem] shadow-2xl shadow-brand-primary/30 flex flex-col border border-white/10 overflow-hidden grain">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/30 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="mb-6 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
                    <h4 className="text-brand-accent font-black text-[10px] uppercase tracking-[0.25em]">The Challenge</h4>
                  </div>
                  <p className="text-slate-300 text-[13px] leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-rose-400/40 rounded-full"></span>
                    {sol.challenge}
                  </p>
                </div>

                <div className="mb-8 relative">
                  <h4 className="text-white/50 font-black text-[10px] uppercase tracking-[0.25em] mb-4">What You'll Gain</h4>
                  <ul className="space-y-3">
                    {sol.gain.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-white text-sm">
                        <svg className="w-5 h-5 text-brand-mint shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        <span className="leading-tight font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto relative">
                  <a href="#contact" className="shine-effect w-full bg-brand-accent text-brand-primary py-4 rounded-xl font-black text-center text-xs block hover:bg-white transition-all uppercase tracking-[0.2em]">
                    Start with {sol.title}
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
