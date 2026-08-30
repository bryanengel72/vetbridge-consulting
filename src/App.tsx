import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Solutions';
import Referrals from './components/Referrals';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ROICalculator from './components/ROICalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CityConfig, HOME } from './city';

const App: React.FC<{ city?: CityConfig }> = ({ city = HOME }) => {
  /* Reveal-on-scroll. The hidden states are gated behind .js in CSS, so if
     this never runs the page still reads — it just doesn't animate. */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(document.querySelectorAll('.rv, .draw, .rise'));

    if (reduce) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add('in');
          io.unobserve(en.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero place={city.place} meta={city.heroMeta} />
        <Solutions />
        <Integrations />
        <Referrals />
        <About />
        <WhyChooseUs />
        <ROICalculator />
        <Contact phone={city.phone} phoneHref={city.phoneHref} />
      </main>
      <Footer phone={city.phone} phoneHref={city.phoneHref} crossLink={city.crossLink} />
      <Analytics />
    </>
  );
};

export default App;
