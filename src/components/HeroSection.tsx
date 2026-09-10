import React, { useState } from 'react';
import { NavTab } from '../types';

interface HeroSectionProps {
  onStartInvesting: () => void;
  onExploreCalculators: () => void;
  onNavigate: (tab: NavTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartInvesting,
  onExploreCalculators,
}) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1M' | '3M' | '1Y' | 'ALL'>('1Y');

  // Interactive mockup state changes based on timeframe
  const portfolioStats = {
    '1M': { total: '$239,838.65', ytd: '+2.8%', ucits: '$142,500', us: '$68,200', cash: '$29,138' },
    '3M': { total: '$231,410.20', ytd: '+6.5%', ucits: '$137,200', us: '$66,100', cash: '$28,110' },
    '1Y': { total: '$239,838.65', ytd: '+18.4%', ucits: '$142,500', us: '$68,200', cash: '$29,138' },
    'ALL': { total: '$239,838.65', ytd: '+34.2%', ucits: '$142,500', us: '$68,200', cash: '$29,138' },
  }[selectedTimeframe];

  return (
    <section className="relative w-full bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Key Signals */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f2f4f7] text-[#344054] text-[12px] font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
              <span>Backed by leading global institutional investors</span>
            </div>

            <h1 className="font-display-hero text-[#0f172a] tracking-tight mb-5 leading-tight">
              Invest in US Stocks, ETFs, <br className="hidden sm:inline" />
              <span className="text-[#0050cc]">UCITS</span> & Global Markets
            </h1>

            <p className="text-[18px] text-[#475467] max-w-xl mb-8 leading-relaxed">
              Global Investing for the Global Indian. Institutional-grade international multi-asset execution, UCITS tax protection, and automated LRS compliance.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onStartInvesting}
                className="inline-flex items-center justify-center h-12 px-7 rounded-xl bg-[#000000] text-[#ffffff] text-[14px] font-semibold hover:bg-[#273143] shadow-md transition-all cursor-pointer group"
              >
                Start investing
                <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <button
                onClick={onExploreCalculators}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#f4f5f7] text-[#0f172a] text-[14px] font-medium hover:bg-[#e8eeff] transition-all cursor-pointer"
              >
                Explore calculators
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-[#475467] border-t border-[#eaecf0] w-full">
              <div className="flex items-center gap-2 text-[12px]">
                <span className="material-symbols-outlined text-[#059669] text-[20px]">
                  verified_user
                </span>
                <span className="font-semibold text-[#0f172a]">SIPC Insured</span>
                <span className="text-[#98a2b3]">up to $500K</span>
              </div>
              <div className="h-3.5 w-px bg-[#d0d5dd] hidden sm:block"></div>
              <div className="flex items-center gap-2 text-[12px]">
                <span className="material-symbols-outlined text-[#0050cc] text-[20px]">
                  account_balance
                </span>
                <span className="font-semibold text-[#0f172a]">SEBI RIA</span>
                <span className="text-[#98a2b3]">Reg. INA000021058</span>
              </div>
              <div className="h-3.5 w-px bg-[#d0d5dd] hidden sm:block"></div>
              <div className="flex items-center gap-2 text-[12px]">
                <span className="material-symbols-outlined text-[#0f172a] text-[20px]">
                  lock
                </span>
                <span className="font-semibold text-[#0f172a]">ISO 27001:2022</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural FinTech Canvas Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded-2xl bg-[#ffffff] shadow-xl p-6 border border-[#eaecf0]">
              {/* Simulated Portfolio Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#eaecf0]/80">
                <div>
                  <span className="text-[11px] text-[#98a2b3] uppercase tracking-wider font-semibold">
                    Total International Net Worth
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[32px] sm:text-[36px] font-semibold text-[#0f172a] tracking-tight">
                      {portfolioStats.total}
                    </span>
                    <span className="text-[12px] text-[#059669] bg-[#ecfdf3] px-2 py-0.5 rounded-full font-semibold">
                      {portfolioStats.ytd} YTD
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#0050cc]">
                  <span className="material-symbols-outlined text-[22px]">
                    trending_up
                  </span>
                </div>
              </div>

              {/* Timeframe pill switcher */}
              <div className="flex items-center justify-between my-3">
                <span className="text-[11px] text-[#98a2b3] font-medium">Performance History</span>
                <div className="flex items-center gap-1 bg-[#f4f5f7] p-1 rounded-lg">
                  {(['1M', '3M', '1Y', 'ALL'] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setSelectedTimeframe(tf)}
                      className={`text-[11px] px-2.5 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                        selectedTimeframe === tf
                          ? 'bg-white text-[#0050cc] shadow-sm'
                          : 'text-[#475467] hover:text-[#0f172a]'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Asset Split Pill Visualizer */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#f4f5f7] rounded-xl mb-6 text-[11px] text-center">
                <div className="bg-[#ffffff] py-2 rounded-lg shadow-sm border border-[#eaecf0]/50">
                  <p className="text-[#98a2b3] font-medium">UCITS ETFs</p>
                  <p className="font-semibold text-[#0f172a] mt-0.5">{portfolioStats.ucits}</p>
                </div>
                <div className="bg-[#ffffff] py-2 rounded-lg shadow-sm border border-[#eaecf0]/50">
                  <p className="text-[#98a2b3] font-medium">Direct US Equities</p>
                  <p className="font-semibold text-[#0f172a] mt-0.5">{portfolioStats.us}</p>
                </div>
                <div className="bg-[#ffffff] py-2 rounded-lg shadow-sm border border-[#eaecf0]/50">
                  <p className="text-[#98a2b3] font-medium">USD Cash (3.13%)</p>
                  <p className="font-semibold text-[#0f172a] mt-0.5">{portfolioStats.cash}</p>
                </div>
              </div>

              {/* Mini Live Sparkline Chart Mockup */}
              <div className="w-full h-28 mb-5 relative flex items-end">
                <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 400 120">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0050cc" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0050cc" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 100 C 60 90, 90 70, 140 75 C 190 80, 220 40, 270 45 C 320 50, 350 20, 400 15 L 400 120 L 0 120 Z"
                    fill="url(#chartGrad)"
                  />
                  <path
                    d="M0 100 C 60 90, 90 70, 140 75 C 190 80, 220 40, 270 45 C 320 50, 350 20, 400 15"
                    fill="none"
                    stroke="#0050cc"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="400" cy="15" fill="#0050cc" r="4.5" />
                </svg>
              </div>

              {/* Holding Rows Preview */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#fafafa] hover:bg-[#f4f5f7] transition-colors border border-[#eaecf0]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ffffff] shadow-sm flex items-center justify-center font-bold text-[11px] text-[#0f172a] border border-[#eaecf0]">
                      CSPX
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#0f172a]">iShares Core S&P 500 UCITS</p>
                      <p className="text-[11px] text-[#475467]">London Stock Exchange (USD) • Accumulating</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] font-semibold text-[#0f172a]">$586.42</p>
                    <p className="text-[11px] text-[#059669] font-medium">+1.42%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#fafafa] hover:bg-[#f4f5f7] transition-colors border border-[#eaecf0]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ffffff] shadow-sm flex items-center justify-center font-bold text-[11px] text-[#0f172a] border border-[#eaecf0]">
                      VWRA
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#0f172a]">Vanguard FTSE All-World UCITS</p>
                      <p className="text-[11px] text-[#475467]">Ireland Domiciled • Zero US Estate Tax</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] font-semibold text-[#0f172a]">$131.10</p>
                    <p className="text-[11px] text-[#059669] font-medium">+0.88%</p>
                  </div>
                </div>
              </div>

              {/* Interactive Brokers Custody Indicator */}
              <div className="mt-4 pt-3 border-t border-[#eaecf0] flex items-center justify-between text-[11px] text-[#98a2b3]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  Direct Clearing & Custody via Interactive Brokers LLC
                </span>
                <span className="text-[#0050cc] font-medium">Verified Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
