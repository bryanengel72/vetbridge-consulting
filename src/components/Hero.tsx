
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-primary flex items-center pt-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            Optimizing Practice Performance
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8">
            Smarter <br />
            <span className="text-brand-secondary italic font-serif">Operations</span> <br />
            for Modern Vets.
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl font-light leading-relaxed">
            We bridge the gap between healthcare technology and veterinary excellence through data, analytics, and seamless integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="group bg-brand-secondary text-brand-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-2xl shadow-brand-secondary/20 flex items-center justify-center gap-2">
              Contact Us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="relative z-10 animate-float">
            <div className="bg-gradient-to-br from-slate-800 to-brand-primary rounded-[3rem] p-3 shadow-2xl border border-white/10 backdrop-blur-xl">
              <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                  alt="Modern Vet"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent"></div>

                {/* Floating Data UI elements */}
                <div className="absolute top-10 right-10 glass p-4 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-tighter">Growth Index</p>
                  </div>
                  <p className="text-2xl font-black text-white">+24.8%</p>
                </div>


              </div>
            </div>

            {/* Decorative Badges */}
            <div className="absolute -bottom-10 -right-10 bg-brand-secondary p-8 rounded-3xl shadow-3xl text-brand-primary rotate-6 transform hover:rotate-0 transition-transform cursor-pointer">
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
