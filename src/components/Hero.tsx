
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 24.8;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 flex items-center pt-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="reveal stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-brand-secondary text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            Optimizing Practice Performance
          </div>

          <h2 className="reveal stagger-2 text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 text-reveal-mask">
            Smarter <br />
            <span className="text-brand-primary italic font-serif">Operations</span> <br />
            for Modern Vets.
          </h2>

          <p className="reveal stagger-3 text-xl md:text-2xl text-slate-600 mb-12 max-w-xl font-light leading-relaxed">
            We bridge the gap between healthcare technology and veterinary excellence through data, analytics, and seamless integration.
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="shine-effect group bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-secondary transition-all shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-2">
              Contact Us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="relative z-10">
            <div className="bg-white rounded-[3rem] p-3 shadow-2xl border border-slate-100">
              <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                  alt="Modern Vet"
                  className="w-full h-full object-cover animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

                {/* Floating Data UI elements */}
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Growth Index</p>
                  </div>
                  <p className="text-2xl font-black text-slate-900">+{count.toFixed(1)}%</p>
                </div>


              </div>
            </div>

            {/* Decorative Badges */}
            <div className="absolute -bottom-10 -right-10 bg-brand-secondary p-8 rounded-3xl shadow-3xl text-white rotate-6 transform hover:rotate-0 transition-transform cursor-pointer border border-white/20">
              <p className="text-5xl font-black leading-none">50+</p>
              <p className="text-xs font-black uppercase tracking-widest mt-2">Combined Years <br /> Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
