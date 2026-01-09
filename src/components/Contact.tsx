
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-brand-primary rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-24 shadow-3xl relative overflow-hidden text-white reveal">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h6 className="text-brand-secondary font-black tracking-[0.2em] uppercase text-xs mb-6">Connect With Us</h6>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Let's Design <br /> Your Future.</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-md font-light">
              Schedule a complimentary discovery call to audit your current operations and identify growth opportunities.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                  <span className="text-2xl font-bold">(816) 394-8980</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email Inquiries</p>
                  <span className="text-2xl font-bold text-wrap break-all">info@vetbridgeconsulting.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-inner text-brand-primary reveal" style={{ transitionDelay: '0.4s' }}>
            {submitted ? (
              <div className="py-20 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black mb-4">Request Received!</h3>
                <p className="text-slate-500">A senior consultant will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Practice Name</label>
                    <input required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-black font-bold focus:outline-none focus:border-brand-secondary transition-colors" placeholder="VCA Animal..." />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">PIMS System</label>
                    <input required type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-black font-bold focus:outline-none focus:border-brand-secondary transition-colors" placeholder="Cornerstone, ezyVet..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Direct Email</label>
                  <input required type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-black font-bold focus:outline-none focus:border-brand-secondary transition-colors" placeholder="dr@clinic.com" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-black font-bold h-32 focus:outline-none focus:border-brand-secondary transition-colors resize-none" placeholder="What are your main operational pain points?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white font-black py-5 rounded-2xl hover:bg-brand-secondary hover:text-black transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1">
                  Submit Discovery Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
