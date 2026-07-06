import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_ekg9k3n';
    const TEMPLATE_ID = 'template_kwdi3g9';
    const PUBLIC_KEY = 'gD_uQtcmPNPx4tyTy';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
        .then(
          () => {
            setSubmitted(true);
            setIsSending(false);
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Failed to send message. Please ensure you have set up your EmailJS keys in Contact.tsx.');
            setIsSending(false);
          }
        );
    }
  };

  const inputClasses = "w-full bg-lilac-mist/70 border-2 border-brand-secondary/10 rounded-2xl px-6 py-4 text-brand-primary font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-brand-secondary focus:bg-white transition-all";

  return (
    <div className="container mx-auto px-6">
      <div className="bg-ink rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20 shadow-2xl shadow-brand-primary/25 relative overflow-hidden text-white reveal grain">
        {/* Atmosphere */}
        <div className="aurora-blob w-[600px] h-[600px] bg-brand-secondary/30 -top-40 -right-40"></div>
        <div className="aurora-blob w-[500px] h-[500px] bg-brand-primary/70 -bottom-40 -left-20" style={{ animationDelay: '-7s' }}></div>
        <div className="absolute inset-0 dot-grid-light opacity-30"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h6 className="text-brand-mint font-black tracking-[0.25em] uppercase text-xs mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-mint"></span>
              Connect With Us
            </h6>
            <h2 className="text-5xl md:text-7xl font-semibold mb-10 leading-[1.02] font-display">
              Let's design <br /> your <em className="text-gradient-violet font-light">future.</em>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-md font-light leading-relaxed">
              Contact us to audit your current operations and identify growth opportunities.
            </p>

            <div className="space-y-8">
              <a href="tel:+18163948980" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-mint group-hover:bg-brand-accent group-hover:text-brand-primary transition-all shrink-0">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                  <span className="text-2xl font-bold group-hover:text-brand-mint transition-colors">(816) 394-8980</span>
                </div>
              </a>
              <a href="mailto:info@vetbridgeconsulting.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-mint group-hover:bg-brand-accent group-hover:text-brand-primary transition-all shrink-0">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email Inquiries</p>
                  <span className="text-xl md:text-2xl font-bold text-wrap break-all group-hover:text-brand-mint transition-colors">info@vetbridgeconsulting.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-brand-primary reveal stagger-2">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black mb-4 font-display">Request Received!</h3>
                <p className="text-slate-500">A senior consultant will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Practice Name</label>
                    <input required name="practice_name" type="text" className={inputClasses} placeholder="VCA Animal..." />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">PIMS System</label>
                    <input required name="pims_system" type="text" className={inputClasses} placeholder="Cornerstone, ezyVet..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Direct Email</label>
                  <input required name="user_email" type="email" className={inputClasses} placeholder="dr@clinic.com" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea required name="message" className={`${inputClasses} h-32 resize-none`} placeholder="What are your main operational pain points?"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="shine-effect w-full bg-brand-primary text-white font-black py-5 rounded-2xl hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
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
