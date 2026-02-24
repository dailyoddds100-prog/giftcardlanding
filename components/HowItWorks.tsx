
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Open Offers',
      description: 'Click the "Start Now" button to see available tasks for your region.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Finish 2–3 Tasks',
      description: 'Complete short tasks like app installs or signing up for free trials.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Claim Your Gift',
      description: 'Once verified, your digital reward card code will be sent to your email.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-[#4A1D24] mb-3">Simple Qualification</h2>
        <div className="w-16 h-1 bg-[#E91E63] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-pink-50 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#FFF0F3] text-[#E91E63] rounded-2xl font-black text-xl">
              {step.number}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#E91E63]">{step.icon}</span>
                <h3 className="text-xl font-bold text-[#4A1D24]">{step.title}</h3>
              </div>
              <p className="text-[#6B4F54] leading-snug text-sm font-medium">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
