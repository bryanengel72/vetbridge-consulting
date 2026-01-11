
import React from 'react';

const reasons = [
  {
    title: 'Vendor-Agnostic',
    desc: 'We integrate with your existing systems — Cornerstone, ezyVet, Avimark, and more.',
    icon: '⚙️'
  },
  {
    title: 'ROI-Focused',
    desc: 'Every engagement includes clear metrics, time savings, or revenue impact.',
    icon: '📊'
  },
  {
    title: 'Healthcare Tech Driven',
    desc: 'Enterprise-level healthcare expertise, scaled for veterinary practices.',
    icon: '🏥'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-20">
        <h6 className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us?</h6>
        <h2 className="text-4xl md:text-6xl font-black mb-6">The VetBridge Advantage</h2>
        <div className="h-1.5 w-24 bg-brand-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {reasons.map((r, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-5xl mb-6">{r.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{r.title}</h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm text-center">
        <h4 className="text-2xl font-bold mb-6">Ready to improve your practice operations?</h4>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Our team is standing by to help you unlock the full potential of your clinic. No commitment, just a conversation.
        </p>
        <a href="#contact" className="inline-block bg-brand-secondary text-brand-primary px-10 py-5 rounded-xl font-black text-lg hover:bg-white transition-all transform hover:scale-105">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default WhyChooseUs;
