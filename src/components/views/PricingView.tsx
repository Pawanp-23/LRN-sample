import React from 'react';

interface PricingViewProps {
  onOpenGetStarted: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenGetStarted }) => {
  return (
    <div className="w-full pt-12 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
          No Hidden Spreads • Institutional Terms
        </span>
        <h1 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-3 tracking-tight">
          Transparent, Fair Institutional Pricing
        </h1>
        <p className="text-[15px] text-[#475467] leading-relaxed">
          Never pay inflated retail bank forex spreads or opaque transaction markups.
        </p>
      </div>

      {/* 2 Core Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        {/* Plan 1: Direct Investing */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#eaecf0] flex flex-col justify-between">
          <div>
            <span className="text-[11px] uppercase font-bold text-[#475467] tracking-wider">
              Self-Directed
            </span>
            <h2 className="text-[24px] font-bold text-[#0f172a] mt-1 mb-2">
              Direct Investing
            </h2>
            <p className="text-[13px] text-[#475467] mb-6">
              For active or DIY investors wanting institutional access across US, UCITS, and European markets.
            </p>
            <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#eaecf0]">
              <span className="text-[44px] font-bold text-[#0f172a]">$0</span>
              <span className="text-[14px] text-[#475467]">/ month platform fee</span>
            </div>

            <div className="space-y-3 text-[13px] text-[#475467]">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>$0 commission on all US & European equities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Full access to 15,000+ global tickers & Irish UCITS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Interbank FX spread ~0.25% (vs 2.5% at Indian banks)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Earn up to 3.13% yield on uninvested USD cash</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Automated Schedule FA & FSI tax report package</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#eaecf0]">
            <button
              onClick={onOpenGetStarted}
              className="w-full py-3 bg-[#000000] text-white rounded-xl text-[14px] font-semibold hover:bg-[#273143] cursor-pointer transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </div>

        {/* Plan 2: Managed Portfolios */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-md border-2 border-[#0050cc] flex flex-col justify-between relative">
          <div className="absolute -top-3.5 right-8 bg-[#0050cc] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            SEBI RIA Regulated
          </div>

          <div>
            <span className="text-[11px] uppercase font-bold text-[#0050cc] tracking-wider">
              Discretionary Advisory
            </span>
            <h2 className="text-[24px] font-bold text-[#0f172a] mt-1 mb-2">
              Managed Strategies
            </h2>
            <p className="text-[13px] text-[#475467] mb-6">
              Expert-curated, globally diversified sovereign portfolios with active rebalancing and tax-loss harvesting.
            </p>
            <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#eaecf0]">
              <span className="text-[44px] font-bold text-[#0050cc]">0.50%</span>
              <span className="text-[14px] text-[#475467]">AUM / year (billed quarterly)</span>
            </div>

            <div className="space-y-3 text-[13px] text-[#475467]">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Everything in Direct Investing included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Fiduciary oversight by SEBI Registered Investment Advisor</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Automated quarterly portfolio rebalancing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Active US Estate Tax shielding with Ireland UCITS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                <span>Dedicated WhatsApp wealth concierge & CA advisory support</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#eaecf0]">
            <button
              onClick={onOpenGetStarted}
              className="w-full py-3 bg-[#0050cc] text-white rounded-xl text-[14px] font-semibold hover:bg-[#003fa4] cursor-pointer transition-colors shadow-sm"
            >
              Start Managed Strategy
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#eaecf0]">
        <h3 className="text-[20px] font-bold text-[#0f172a] mb-6">
          How Paasa Compares
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-[#eaecf0] text-[#98a2b3] font-semibold text-[11px] uppercase tracking-wider">
                <th className="pb-3">Feature</th>
                <th className="pb-3 text-[#0050cc] font-bold">Paasa</th>
                <th className="pb-3">Traditional Bank (HDFC/ICICI)</th>
                <th className="pb-3">Retail US Apps (DriveWealth)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaecf0]">
              <tr>
                <td className="py-4 font-semibold text-[#0f172a]">US Brokerage Commission</td>
                <td className="py-4 text-[#059669] font-bold">$0.00</td>
                <td className="py-4 text-[#d92d20]">$10 - $25 / trade</td>
                <td className="py-4 text-[#475467]">$0 or $1-3 fee</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-[#0f172a]">UCITS / European ETFs Access</td>
                <td className="py-4 text-[#059669] font-bold">✓ Full (Ireland Domiciled)</td>
                <td className="py-4 text-[#d92d20]">✗ US stocks only</td>
                <td className="py-4 text-[#d92d20]">✗ US stocks only</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-[#0f172a]">US Estate Tax Shielding (0% tax)</td>
                <td className="py-4 text-[#059669] font-bold">✓ Complete Shield</td>
                <td className="py-4 text-[#d92d20]">✗ 40% Tax Risk</td>
                <td className="py-4 text-[#d92d20]">✗ 40% Tax Risk</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-[#0f172a]">FX Remittance Markup</td>
                <td className="py-4 text-[#059669] font-bold">~0.25%</td>
                <td className="py-4 text-[#d92d20]">1.5% - 3.5%</td>
                <td className="py-4 text-[#475467]">1.0% - 2.0%</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-[#0f172a]">Custodian & Clearing</td>
                <td className="py-4 font-semibold text-[#0f172a]">Interactive Brokers LLC</td>
                <td className="py-4 text-[#475467]">Third party broker</td>
                <td className="py-4 text-[#475467]">DriveWealth / Alpaca</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-[#0f172a]">SEBI Regulated RIA Advisory</td>
                <td className="py-4 text-[#059669] font-bold">✓ Included</td>
                <td className="py-4 text-[#d92d20]">✗ Execution only</td>
                <td className="py-4 text-[#d92d20]">✗ Execution only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
