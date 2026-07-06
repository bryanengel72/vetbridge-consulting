import React from 'react';

const reasons = [
  {
    title: 'Vendor-Agnostic',
    desc: 'We integrate with your existing systems — Cornerstone, ezyVet, AVImark, and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'ROI-Focused',
    desc: 'Every engagement includes clear metrics, time savings, or revenue impact.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Healthcare Tech Driven',
    desc: 'Enterprise-level healthcare expertise, scaled for veterinary practices.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h4l2-5 3 9 2-4h5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 .6.108 1.17.3 1.7" opacity="0.5" />
      </svg>
    ),
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-20 reveal">
        <h6 className="text-brand-secondary font-black tracking-[0.25em] uppercase text-xs mb-5 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-brand-secondary"></span>
          Why Choose Us?
          <span className="w-8 h-px bg-brand-secondary"></span>
        </h6>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-primary mb-6 font-display">The VetBridge <em className="text-brand-secondary font-light">advantage</em></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className={`group relative flex flex-col items-center text-center p-10 rounded-[2rem] bg-white border border-brand-secondary/10 shadow-lg shadow-brand-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-secondary/15 overflow-hidden reveal stagger-${i + 1}`}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-mint via-brand-accent to-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="w-16 h-16 rounded-2xl bg-lilac-mist text-brand-secondary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-mint group-hover:scale-110 transition-all duration-500">
              {r.icon}
            </div>
            <h3 className="text-2xl font-semibold text-brand-primary mb-4 font-display">{r.title}</h3>
            <p className="text-slate-600 leading-relaxed max-w-xs">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA band */}
      <div className="mt-24 relative rounded-[2.5rem] overflow-hidden reveal">
        <div className="absolute inset-0 bg-brand-primary"></div>
        <div className="absolute inset-0 grain"></div>
        <div className="aurora-blob w-[500px] h-[500px] bg-brand-secondary/40 -top-40 -right-20"></div>
        <div className="aurora-blob w-[400px] h-[400px] bg-brand-accent/20 -bottom-32 -left-10" style={{ animationDelay: '-8s' }}></div>

        <div className="relative z-10 p-12 md:p-16 text-center">
          <h4 className="text-3xl md:text-4xl font-semibold text-white mb-6 font-display">Ready to improve your practice operations?</h4>
          <p className="text-brand-mint/80 mb-10 max-w-2xl mx-auto text-lg font-light">
            Our team is standing by to help you unlock the full potential of your clinic. No commitment, just a conversation.
          </p>
          <a href="#contact" className="shine-effect inline-flex items-center gap-3 bg-brand-accent text-brand-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-white shadow-xl shadow-black/20 transition-all transform hover:-translate-y-1">
            Book a Free Audit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
