
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Footer } from './components/Footer';
import { OfferModal } from './components/OfferModal';
import { LoadingOverlay } from './components/LoadingOverlay';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [liveViewers, setLiveViewers] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = () => {
    setIsLoading(true);
    // Perceived performance: simulate finding offers
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Dynamic Status Bar */}
      {/* <div className="w-full bg-[#E91E63] text-white text-[10px] font-bold py-1.5 px-4 text-center uppercase tracking-[0.2em] sticky top-0 z-50 shadow-sm flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          {liveViewers} people viewing this offer
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Reward ID: #SHEIN-2026-XP</span>
      </div> */}

      <main className="w-full max-w-2xl mx-auto flex flex-col flex-grow bg-white shadow-2xl relative">
        <Hero onStart={handleCtaClick} />
        
        <div className="px-5 py-12 md:px-10 space-y-20">
          <HowItWorks />
          <UrgencyBanner onContinue={handleCtaClick} />
        </div>

        {/* <Footer /> */}
      </main>

      {/* Floating Sticky CTA on Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-40">
        <button
          onClick={handleCtaClick}
          className="w-full py-4.5 bg-[#E91E63] text-white font-extrabold rounded-2xl shadow-[0_8px_20px_rgba(233,30,99,0.4)] active:scale-95 transition-all text-lg flex items-center justify-center gap-2 animate-shake"
        >
          {/* <span>Claim $100 Card Now</span> */}
          {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg> */}
        </button>
      </div>

      {isLoading && <LoadingOverlay />}
      {isModalOpen && <OfferModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
