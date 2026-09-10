import React from 'react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] py-24 border-t border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
            Enterprise Security
          </span>
          <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-3">
            Safety is our cornerstone
          </h2>
          <p className="text-[15px] text-[#475467]">
            Regulated, independent custody structures that prioritize sovereignty and absolute fund protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#fafafa] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#eaecf0]">
            <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] text-[#0050cc] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[28px]">shield</span>
            </div>
            <h4 className="text-[20px] text-[#0f172a] font-bold mb-2">
              SIPC Insured
            </h4>
            <p className="text-[13px] text-[#475467] leading-relaxed">
              Securities are covered up to $500,000 by SIPC (inclusive of $250,000 for cash). Learn more at sipc.org.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#fafafa] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#eaecf0]">
            <div className="w-12 h-12 rounded-2xl bg-[#ecfdf3] text-[#059669] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <h4 className="text-[20px] text-[#0f172a] font-bold mb-2">
              SEBI Registered RIA
            </h4>
            <p className="text-[13px] text-[#475467] leading-relaxed">
              Advisory services are lent by a Registered Investment Advisor (INA000021058), meaning we are legally bound to advise in your best interest.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#fafafa] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#eaecf0]">
            <div className="w-12 h-12 rounded-2xl bg-[#f2f4f7] text-[#0f172a] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[28px]">lock</span>
            </div>
            <h4 className="text-[20px] text-[#0f172a] font-bold mb-2">
              End-to-End Security
            </h4>
            <p className="text-[13px] text-[#475467] leading-relaxed">
              AES-256 bank-grade data encrypted across the board; two-factor hardware authentication mandatory on all actions.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#fafafa] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#eaecf0]">
            <div className="w-12 h-12 rounded-2xl bg-[#e8eeff] text-[#0050cc] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[28px]">person_check</span>
            </div>
            <h4 className="text-[20px] text-[#0f172a] font-bold mb-2">
              You Always Own Your Assets
            </h4>
            <p className="text-[13px] text-[#475467] leading-relaxed">
              Held with Interactive Brokers in your own name and PAN. You retain control even in the unlikely event Paasa ceases operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
