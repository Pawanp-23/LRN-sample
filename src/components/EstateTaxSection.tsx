import React from 'react';
import { NavTab } from '../types';

interface EstateTaxSectionProps {
  onNavigate: (tab: NavTab) => void;
  onOpenCalculator: () => void;
}

export const EstateTaxSection: React.FC<EstateTaxSectionProps> = ({
  onNavigate,
  onOpenCalculator,
}) => {
  return (
    <section className="w-full bg-[#ffffff] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Explainer */}
          <div className="lg:col-span-6">
            <span className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#0050cc] text-[12px] font-semibold">
              UCITS ETFs Strategy
            </span>
            <h2 className="font-headline-lg text-[#0f172a] font-bold mt-4 mb-5 tracking-tight">
              Shield your wealth from US estate tax
            </h2>
            <p className="text-[18px] text-[#475467] leading-relaxed mb-6">
              UCITS ETFs give the same market access as U.S. ETFs, but protect you from U.S. estate tax on foreign nationals—taxed progressively up to{' '}
              <span className="text-[#d92d20] font-semibold">40% on assets above $60,000</span> upon death.
            </p>
            <p className="text-[15px] text-[#475467] mb-8 leading-relaxed">
              By switching to Ireland-domiciled accumulating ETFs (such as CSPX or VWRA), you eliminate US estate tax exposure entirely while reducing dividend withholding taxes from 25% to 15%.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => onNavigate('resources')}
                className="w-full text-left p-5 rounded-2xl bg-[#fafafa] hover:bg-[#f4f5f7] transition-colors shadow-sm border border-[#eaecf0] cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[16px] text-[#0f172a] font-bold group-hover:text-[#0050cc] transition-colors">
                      What are UCITS ETFs?
                    </h4>
                    <p className="text-[13px] text-[#475467] mt-1">
                      Low-cost, Diversified, Europe-domiciled, and 100% US estate tax–safe.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#0050cc] text-[22px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    north_east
                  </span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('use-cases')}
                className="w-full text-left p-5 rounded-2xl bg-[#fafafa] hover:bg-[#f4f5f7] transition-colors shadow-sm border border-[#eaecf0] cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[16px] text-[#0f172a] font-bold group-hover:text-[#0050cc] transition-colors">
                      How to shield RSUs from US estate tax?
                    </h4>
                    <p className="text-[13px] text-[#475467] mt-1">
                      Reinvest concentrated tech RSUs into globally diversified, estate-tax-protected portfolios.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#0050cc] text-[22px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    north_east
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Comparison Table Tile */}
          <div className="lg:col-span-6 bg-[#f4f5f7] rounded-3xl p-6 lg:p-8 shadow-sm border border-[#eaecf0]">
            <div className="bg-[#ffffff] rounded-2xl p-6 shadow-md border border-[#eaecf0]">
              <h4 className="text-[16px] text-[#0f172a] font-bold mb-4 pb-3 border-b border-[#eaecf0]">
                Standard US Stocks vs. UCITS ETFs
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#fef3f2] text-[#d92d20] border border-[#ffdad6]">
                  <div className="flex items-center justify-between text-[14px] font-semibold mb-1">
                    <span>US-Domiciled Securities (VOO, SPY, QQQ)</span>
                    <span className="text-[12px] bg-[#ffdad6] px-2 py-0.5 rounded">High Tax Exposure</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#475467] mt-2">
                    Subject to up to 40% US federal estate tax on amounts above $60K for non-US residents. 25% withholding tax automatically deducted on all dividends.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#ecfdf3] text-[#059669] border border-[#a6f4c5]">
                  <div className="flex items-center justify-between text-[14px] font-semibold mb-1">
                    <span>Ireland UCITS (CSPX, VWRA, VUAA)</span>
                    <span className="text-[12px] bg-[#d1fadf] px-2 py-0.5 rounded">Complete Shield</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#475467] mt-2">
                    <strong className="text-[#059669]">0% US Estate Tax.</strong> No probate requirements in the US court system. Dividend withholding reduced to 15% due to Ireland-US tax treaty.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#eaecf0] flex items-center justify-between text-[11px] text-[#98a2b3]">
                <span>Automatic tax-efficient accumulating structures</span>
                <button
                  onClick={onOpenCalculator}
                  className="text-[#0050cc] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                >
                  Run Tax Simulator →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
