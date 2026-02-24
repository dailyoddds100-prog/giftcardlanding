
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto px-6 py-16 bg-[#FFF5F7] border-t border-pink-50 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center gap-8 mb-10 opacity-40 grayscale hover:grayscale-0 transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Norton_LifeLock_logo.svg" className="h-4" alt="Security" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/McAfee_logo.svg" className="h-4" alt="Security" />
        </div>

        {/* <p className="text-[10px] text-[#8B6E73] leading-relaxed mb-8 uppercase font-bold tracking-widest">
          <span className="text-[#E91E63] block mb-2 text-xs">Transparency Disclosure</span>
          This independent promotion is not sponsored, endorsed, or administered by Shein, Zara, H&M, or any other fashion retailer. All product names, logos, and brands are property of their respective owners. Participant rewards are subject to successful completion of all required partner activities.
        </p> */}

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
          <a href="#" className="text-[10px] font-black text-[#4A1D24]/60 hover:text-[#E91E63] uppercase tracking-[0.2em]">Privacy</a>
          <a href="#" className="text-[10px] font-black text-[#4A1D24]/60 hover:text-[#E91E63] uppercase tracking-[0.2em]">Terms</a>
          <a href="#" className="text-[10px] font-black text-[#4A1D24]/60 hover:text-[#E91E63] uppercase tracking-[0.2em]">Sitemap</a>
          <a href="#" className="text-[10px] font-black text-[#4A1D24]/60 hover:text-[#E91E63] uppercase tracking-[0.2em]">Contact</a>
        </div>

        <p className="text-[10px] text-[#8B6E73] font-black uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Promotional Reward Network Inc.
        </p>
      </div>
    </footer>
  );
};
