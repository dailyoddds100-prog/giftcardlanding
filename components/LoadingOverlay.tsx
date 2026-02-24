
import React from 'react';

export const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 relative mb-8">
        <div className="absolute inset-0 border-4 border-[#FFF0F3] rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#E91E63] rounded-full border-t-transparent animate-spin"></div>
      </div>
      <h2 className="text-2xl font-black text-[#4A1D24] mb-2">Analyzing Availability...</h2>
      <p className="text-[#6B4F54] font-medium max-w-xs animate-pulse">
        Checking regional partner inventory for a $100 Gift Card reward in your area.
      </p>
      
      <div className="mt-12 space-y-2 w-full max-w-xs">
        <div className="flex justify-between text-[10px] font-black text-[#E91E63] uppercase tracking-widest">
          <span>Finding best offers</span>
          <span>85%</span>
        </div>
        <div className="w-full bg-[#FFF0F3] h-2 rounded-full overflow-hidden">
          <div className="w-[85%] h-full bg-[#E91E63] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
