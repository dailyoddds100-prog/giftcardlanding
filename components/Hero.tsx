
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative w-full pt-12 pb-16 px-6 md:px-10 bg-gradient-to-b from-[#FFF0F3] to-white text-center flex flex-col items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -ml-32 -mt-32"></div>
      <div className="absolute top-20 right-0 w-48 h-48 bg-rose-200/20 rounded-full blur-2xl -mr-24"></div>

      <div className="mb-8 relative">
        <span className="bg-white text-[#E91E63] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-sm border border-pink-100">
          Exclusive Promotion
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-[#4A1D24] leading-[1.1] mb-6 relative z-10">
        Get a{" "}
        <span className="text-[#E91E63] italic font-serif">$750 Fashion</span>{" "}
        Gift Card Today
      </h1>

      {/* <p className="text-lg text-[#6B4F54] font-medium mb-10 max-w-md mx-auto leading-relaxed">
        Help our partners grow by completing 2–3 simple tasks. No payment or
        credit card required to participate.
      </p> */}

      {/* Mock Gift Card Visual */}
      <a href="https://glctrk.org/aff_c?offer_id=90&aff_id=168663" target="_blank"
        className="relative mb-12 w-full max-w-[280px] aspect-[1.6/1] bg-gradient-to-br from-[#E91E63] to-[#C2185B] rounded-2xl shadow-2xl p-6 text-left overflow-hidden group hover:rotate-1 transition-transform cursor-pointer"
        // onClick={onStart}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="h-full flex flex-col justify-between relative z-10">
          <div className="text-white/80 font-bold tracking-widest text-[10px] uppercase">
            Official Reward Card
          </div>
          <div className="text-3xl font-black text-white">$750.00</div>
          <div className="flex justify-between items-end">
            <div className="text-white/60 text-[8px] font-mono">
              {/* VALID FOR: 24 HOURS */}
            </div>
            <div className="w-10 h-6 bg-white/20 rounded-md"></div>
          </div>
        </div>
      </a>

      <a href="https://glctrk.org/aff_c?offer_id=90&aff_id=168663" target="_blank" rel="noopener noreferrer">
        <button
          // onClick={onStart}

          className="group relative px-12 py-5 bg-[#E91E63] text-white font-black text-xl rounded-2xl shadow-[0_12px_24px_rgba(233,30,99,0.3)] hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(233,30,99,0.4)] active:translate-y-1 active:shadow-none transition-all w-full sm:w-auto z-10 animate-shake"
        >
          START NOW
        </button>
      </a>


      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#8B6E73] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          {/* <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg> */}
          {/* No Fees */}
        </div>
        <div className="flex items-center gap-1.5">
          {/* <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg> */}
          {/* Safe & Verified */}
        </div>
      </div>
    </section>
  );
};
