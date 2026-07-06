import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative">
      {/* Oversized watermark */}
      <span className="absolute -top-16 right-0 text-[10rem] font-black text-brand-primary/[0.03] font-display select-none pointer-events-none leading-none hidden lg:block" aria-hidden="true">
        Bridge
      </span>

      <div className="relative reveal">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-primary/15 border border-brand-secondary/10">
          <img
            src="/images/about-legacy.jpg"
            alt="Vet Team"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/25 via-transparent to-transparent"></div>
        </div>

        {/* Experience Box */}
        <div className="absolute -bottom-6 right-4 md:-bottom-10 md:-right-6 lg:right-10 bg-brand-primary text-white p-6 md:p-9 rounded-[2rem] shadow-2xl shadow-brand-primary/30 reveal stagger-2 max-w-[210px] md:max-w-none overflow-hidden grain">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/40 rounded-full blur-[50px]"></div>
          <div className="relative flex items-end gap-2 mb-2">
            <span className="text-3xl md:text-5xl font-black font-display">50+</span>
            <span className="text-brand-mint text-sm md:text-xl font-black mb-1">Years</span>
          </div>
          <p className="relative text-[10px] md:text-xs font-bold text-brand-mint/70 uppercase tracking-widest leading-tight">Healthcare &amp; Tech<br />Combined Expertise</p>
        </div>

        {/* Floating shape */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl -z-10"></div>
      </div>

      <div className="reveal stagger-1 mt-12 lg:mt-0">
        <h6 className="text-brand-secondary font-black tracking-[0.25em] uppercase text-xs mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-brand-secondary"></span>
          Our Legacy
        </h6>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-primary mb-8 leading-[1.08] font-display">
          Where clinical wisdom meets <em className="text-brand-secondary font-light">tech precision.</em>
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
          We don't just recommend software; we architect ecosystems. With deep roots in human health technology and a passion for veterinary care, VetBridge was founded to solve the complexity of modern practice management.
        </p>

        {/* Pull quote */}
        <blockquote className="relative pl-6 mb-10 border-l-2 border-brand-accent">
          <p className="text-lg text-brand-primary/80 leading-relaxed font-display italic">
            "Our mission is to give veterinarians their time back while ensuring their business thrives in a data-driven world."
          </p>
        </blockquote>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="group">
            <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-accent group-hover:text-brand-primary group-hover:-rotate-6 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="font-bold text-brand-primary text-lg mb-2">Vendor-Agnostic</h4>
            <p className="text-sm text-slate-500 leading-relaxed">We optimize what you already have, rather than forcing new tools.</p>
          </div>
          <div className="group">
            <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-accent group-hover:text-brand-primary group-hover:rotate-6 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h4 className="font-bold text-brand-primary text-lg mb-2">ROI-Focused</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Clear metrics, time savings, and tangible revenue growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
