
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';



const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Reveal logic
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-brand-secondary/20 selection:text-brand-primary">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <Solutions />
        </section>
        <section id="about" className="py-24">
          <About />
        </section>
        <section id="why-us" className="py-24 bg-brand-primary text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
          <WhyChooseUs />
        </section>
        <section id="contact" className="py-24 bg-slate-50">
          <Contact />
        </section>
      </main>
      <Footer />

      {/* Gemini Discovery Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatAssistant />
      </div>
    </div>
  );
};

export default App;
