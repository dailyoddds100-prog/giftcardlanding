
import React from 'react';

interface OfferModalProps {
  onClose: () => void;
}

export const OfferModal: React.FC<OfferModalProps> = ({ onClose }) => {
  const offers = [
    {
      id: 1,
      title: "Survey: Your Style 2024",
      company: "TrendWatch",
      cta: "Earn Progress",
      tag: "POPULAR",
      icon: "📊"
    },
    {
      id: 2,
      title: "Install: Fashion Daily App",
      company: "GlamourTech",
      cta: "Verify Install",
      tag: "FASTEST",
      icon: "📱"
    },
    {
      id: 3,
      title: "Join: Beauty Club Trial",
      company: "LuxeBox",
      cta: "Register Free",
      tag: "HIGH VALUE",
      icon: "💄"
    }
  ];

  return (
    <div className="fixed inset-0 bg-[#2D1B1E]/90 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8B6E73] hover:text-[#E91E63] transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#FFF0F3] text-[#E91E63] text-[10px] font-black px-4 py-1 rounded-full mb-4 uppercase tracking-widest">Step 2: Complete Tasks</div>
            <h2 className="text-3xl font-black text-[#4A1D24] mb-2 leading-tight">Pick 2 Tasks to Unlock</h2>
            <p className="text-sm text-[#6B4F54] font-medium leading-relaxed">
              Once you finish 2 tasks, your <span className="text-[#E91E63] font-black">$100 Fashion Reward</span> will be instantly released.
            </p>
          </div>

          <div className="space-y-4">
            {offers.map((offer) => (
              <a 
                key={offer.id}
                href="#"
                className="flex items-center gap-4 p-5 border-2 border-[#FFF0F3] rounded-[1.5rem] hover:border-[#E91E63] hover:bg-[#FFF5F7] transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0F3] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {offer.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-extrabold text-[#4A1D24]">{offer.title}</h3>
                    <span className="text-[8px] font-black bg-pink-100 text-[#E91E63] px-2 py-0.5 rounded uppercase">{offer.tag}</span>
                  </div>
                  <p className="text-[10px] text-[#8B6E73] font-bold uppercase tracking-widest">By {offer.company}</p>
                </div>
                <div className="px-4 py-2 bg-[#E91E63] text-white text-[11px] font-black rounded-xl shadow-lg active:scale-95 transition-all">
                  {offer.cta}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#FFF5F7] rounded-[1.5rem] border border-pink-100">
            <div className="flex justify-between items-end mb-3">
              <span className="text-[10px] font-black text-[#4A1D24] uppercase tracking-[0.2em]">Unlock Progress</span>
              <span className="text-sm font-black text-[#E91E63]">50% COMPLETE</span>
            </div>
            <div className="w-full bg-[#FFF0F3] h-4 rounded-full overflow-hidden p-1 shadow-inner border border-white">
              <div className="w-1/2 h-full bg-[#E91E63] rounded-full animate-pulse shadow-[0_0_10px_rgba(233,30,99,0.3)]"></div>
            </div>
            <p className="text-[10px] text-[#6B4F54] font-bold mt-4 text-center uppercase tracking-widest leading-relaxed">
              Almost there! 1 more task required to <br/> qualify for the $100 reward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
