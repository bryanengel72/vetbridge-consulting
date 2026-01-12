
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative reveal">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          <img
            src="/images/about-legacy.jpg"
            alt="Vet Team"
            className="w-full grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 to-transparent"></div>
        </div>

        {/* Experience Box */}
        <div className="absolute -bottom-6 right-4 md:-bottom-10 md:-right-10 lg:right-10 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-3xl border border-slate-100 reveal max-w-[200px] md:max-w-none" style={{ transitionDelay: '0.3s' }}>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl md:text-5xl font-black text-brand-primary">50+</span>
            <span className="text-brand-secondary text-sm md:text-xl font-black mb-1">Years</span>
          </div>
          <p className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest leading-tight">Healthcare & Tech <br />Combined Expertise</p>
        </div>

        {/* Floating Shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      </div>

      <div className="reveal mt-12 lg:mt-0" style={{ transitionDelay: '0.2s' }}>
        <h6 className="text-brand-secondary font-black tracking-[0.2em] uppercase text-xs mb-6">Our Legacy</h6>
        <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8 leading-[1.1]">
          Where Clinical Wisdom Meets <span className="text-brand-secondary">Tech Precision.</span>
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
          We don't just recommend software; we architect ecosystems. With deep roots in human health technology and a passion for veterinary care, VetBridge was founded to solve the complexity of modern practice management.
        </p>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed italic">
          "Our mission is to give veterinarians their time back while ensuring their business thrives in a data-driven world."
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="group">
            <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="font-bold text-brand-primary text-lg mb-2">Vendor-Agnostic</h4>
            <p className="text-sm text-slate-500">We optimize what you already have, rather than forcing new tools.</p>
          </div>
          <div className="group">
            <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <h4 className="font-bold text-brand-primary text-lg mb-2">ROI-Focused</h4>
            <p className="text-sm text-slate-500">Clear metrics, time savings, and tangible revenue growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
