import React from 'react';
import { NavTab } from '../types';

interface CtaSectionProps {
  onOpenGetStarted: () => void;
  onNavigate: (tab: NavTab) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenGetStarted,
  onNavigate,
}) => {
  return (
    <section className="w-full bg-[#000000] text-white py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-headline-lg text-white font-bold mb-4 tracking-tight">
          Ready to take your portfolio truly global?
        </h2>
        <p className="text-[18px] text-[#d0daf2] max-w-2xl mx-auto mb-8 leading-relaxed">
          Join leading engineers, founders, and family offices managing global wealth with institutional precision and automated tax compliance.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenGetStarted}
            className="px-8 py-3.5 bg-white text-[#000000] text-[14px] rounded-xl hover:bg-[#f4f5f7] transition-all shadow-md font-semibold cursor-pointer"
          >
            Open your account
          </button>
          <button
            onClick={() => onNavigate('use-cases')}
            className="px-8 py-3.5 bg-transparent border border-white/20 text-white text-[14px] rounded-xl hover:bg-white/10 transition-all font-semibold cursor-pointer"
          >
            Talk to a SEBI RIA advisor
          </button>
        </div>
      </div>
    </section>
  );
};
