
import React, { useState, useEffect } from 'react';

interface UrgencyBannerProps {
  onContinue: () => void;
}

export const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ onContinue }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('reward_timer');
    return saved ? parseInt(saved) : 599; // 10 minutes
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1;
        localStorage.setItem('reward_timer', next.toString());
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // return (
  //   <section className="bg-[#4A1D24] text-white rounded-[2.5rem] p-10 text-center relative overflow-hidden shadow-2xl">
  //     {/* Texture background */}
  //     <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(#E91E63 0.5px, transparent 0.5px)`, backgroundSize: '10px 10px' }}></div>
      
  //     <div className="relative z-10">
  //       <h2 className="text-2xl font-bold mb-4 italic text-pink-200">
  //         Hurry! Slots are filling up fast.
  //       </h2>
        
  //       <p className="text-white/70 mb-8 font-medium text-sm">
  //         Once the timer hits zero, this slot will be released to the next person in line.
  //       </p>

  //       <div className="flex flex-col items-center mb-10">
  //         <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E91E63] mb-4">Reservation Expires In:</div>
  //         <div className="text-6xl font-black font-mono tracking-tighter text-white tabular-nums">
  //           {formatTime(timeLeft)}
  //         </div>
  //       </div>

  //       <div className="bg-[#5C272E] p-4 rounded-2xl mb-10 flex items-center justify-center gap-3 border border-white/5">
  //         <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
  //         <span className="text-xs font-black uppercase tracking-widest text-white/90">Only 7 Rewards Remaining Today</span>
  //       </div>

  //       <button
  //         onClick={onContinue}
  //         className="w-full py-5 bg-[#E91E63] text-white font-black text-xl rounded-2xl shadow-[0_8px_0_0_#C2185B] hover:translate-y-[2px] hover:shadow-[0_6px_0_0_#C2185B] active:translate-y-[6px] active:shadow-none transition-all"
  //       >
  //         CONTINUE TO OFFERS
  //       </button>

  //       <div className="mt-6 flex justify-center items-center gap-2 opacity-60">
  //         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
  //           <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  //         </svg>
  //         <span className="text-[10px] uppercase font-black tracking-widest">Secure Verification Link</span>
  //       </div>
  //     </div>
  //   </section>
  // );
};
