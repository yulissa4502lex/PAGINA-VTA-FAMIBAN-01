
import React, { useState, useEffect } from 'react';

// Sub-components
import Hero from './components/Hero';
import Problem from './components/Problem';
import Authority from './components/Authority';
import Story from './components/Story';
import ImplementationProtocol from './components/ImplementationProtocol';
import Solution from './components/Solution';
import WhatIsInside from './components/WhatIsInside';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LegalSupport from './components/LegalSupport';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Hero />
      <Problem />
      <Authority />
      <Story />
      <ImplementationProtocol />
      <Solution />
      <WhatIsInside />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
      <LegalSupport />
      {showSticky && <StickyCTA />}
    </div>
  );
};

export default App;
