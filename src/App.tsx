import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Solutions';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ROICalculator from './components/ROICalculator';
import Referrals from './components/Referrals';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-porcelain selection:bg-brand-secondary/25 selection:text-brand-primary">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-mint transition-transform duration-100 origin-left w-full"
        style={{ transform: `scaleX(${scrollProgress})` }} />

      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <Integrations />
        <section id="solutions" className="py-28 bg-lilac-mist relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <Solutions />
        </section>
        <section id="about" className="py-28 bg-porcelain relative overflow-hidden">
          <About />
        </section>
        <section id="why-us" className="py-28 bg-lilac-mist relative overflow-hidden border-y border-brand-secondary/10">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-porcelain to-transparent"></div>
          <WhyChooseUs />
        </section>
        <section id="referrals" className="py-28 bg-porcelain relative overflow-hidden">
          <Referrals />
        </section>
        <section id="roi-calculator" className="py-28 bg-lilac-mist relative overflow-hidden border-t border-brand-secondary/10">
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-brand-secondary/8 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <ROICalculator />
        </section>
        <section id="contact" className="py-28 bg-porcelain">
          <Contact />
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
