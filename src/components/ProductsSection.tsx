import React, { useState } from 'react';
import { NavTab } from '../types';

interface ProductsSectionProps {
  onNavigate: (tab: NavTab) => void;
  onExecuteOrder: (orderDetails: { symbol: string; shares: number; total: number }) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onNavigate,
  onExecuteOrder,
}) => {
  const [selectedStock, setSelectedStock] = useState<'NVDA' | 'CSPX' | 'VWRA'>('NVDA');
  const [orderAmountUSD, setOrderAmountUSD] = useState<number>(500);

  const stockDetails = {
    NVDA: { name: 'NVDA • NVIDIA Corporation', price: 138.25, exchange: 'NASDAQ Global Select', change: '+2.45% Today' },
    CSPX: { name: 'CSPX • iShares Core S&P 500', price: 586.42, exchange: 'LSE (Irish UCITS)', change: '+1.42% Today' },
    VWRA: { name: 'VWRA • Vanguard All-World', price: 131.10, exchange: 'LSE (Irish UCITS)', change: '+0.88% Today' },
  }[selectedStock];

  const estimatedShares = (orderAmountUSD / stockDetails.price).toFixed(3);
  const fxRate = 83.42;
  const estimatedINR = (orderAmountUSD * fxRate).toLocaleString('en-IN', { maximumFractionDigits: 0 });

  return (
    <section className="w-full bg-[#ffffff] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
            Institutional Infrastructure
          </span>
          <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2 tracking-tight">
            Two powerful execution engines. Complete sovereign flexibility.
          </h2>
        </div>

        {/* Product 1: Direct Investing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="px-3 py-1 rounded-full bg-[#f2f4f7] text-[#344054] text-[11px] uppercase font-semibold mb-3">
              Product
            </span>
            <h3 className="font-headline-md text-[#0f172a] font-bold mb-4">
              Direct Investing
            </h3>
            <p className="text-[18px] text-[#475467] mb-6 leading-relaxed">
              Trade from a universe of 15,000+ tickers across the world from the palm of your hand. Real-time fractional shares, zero-latency execution, and institutional depth across US and European exchanges.
            </p>
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-[13px] text-[#475467]">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                  check_circle
                </span>
                <span>Fractional units down to $1 on global stocks and UCITS ETFs</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#475467]">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                  check_circle
                </span>
                <span>Extended hours trading (Pre-market & After-hours access)</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#475467]">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                  check_circle
                </span>
                <span>Automated recurring investment schedules (SIP)</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#000000] text-[#ffffff] text-[14px] font-semibold hover:bg-[#273143] shadow-sm transition-all cursor-pointer group"
            >
              Learn more
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="lg:col-span-7 bg-[#f4f5f7] rounded-3xl p-8 lg:p-12 shadow-sm border border-[#eaecf0]">
            <div className="bg-[#ffffff] rounded-2xl shadow-md p-6 max-w-md mx-auto border border-[#eaecf0]">
              <div className="flex items-center justify-between pb-4 border-b border-[#eaecf0]">
                <div>
                  <span className="text-[14px] font-semibold text-[#0f172a]">
                    Direct Order Entry
                  </span>
                  <p className="text-[11px] text-[#475467]">
                    Interactive Brokers SmartRouting℠
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-[#ecfdf3] text-[#059669] rounded-full text-[12px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-ping"></span>
                  Live Market
                </span>
              </div>

              {/* Ticker switch pill in card */}
              <div className="flex items-center gap-1.5 my-3">
                {(['NVDA', 'CSPX', 'VWRA'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStock(s)}
                    className={`text-[12px] px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                      selectedStock === s
                        ? 'bg-[#0050cc] text-white'
                        : 'bg-[#fafafa] text-[#475467] border border-[#eaecf0]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="bg-[#fafafa] p-4 rounded-xl mb-4 border border-[#eaecf0]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-bold text-[#0f172a]">
                    {stockDetails.name}
                  </span>
                  <span className="text-[14px] font-bold text-[#0f172a]">
                    ${stockDetails.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#475467]">
                  <span>{stockDetails.exchange}</span>
                  <span className="text-[#059669] font-medium">{stockDetails.change}</span>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-[12px] text-[#475467] font-medium block mb-1">
                  Investment Amount (USD)
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-2.5 text-[#98a2b3] font-bold">$</span>
                    <input
                      type="number"
                      value={orderAmountUSD}
                      onChange={(e) => setOrderAmountUSD(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-2 bg-white border border-[#d0d5dd] rounded-xl text-[14px] font-semibold text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
                    />
                  </div>
                  <div className="flex gap-1">
                    {[100, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setOrderAmountUSD(amt)}
                        className="text-[11px] px-2 py-2 bg-[#f4f5f7] hover:bg-[#e8eeff] rounded-lg text-[#475467] font-medium cursor-pointer"
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-[#98a2b3] mt-1">
                  ≈ {estimatedShares} shares (₹{estimatedINR} approx)
                </p>
              </div>

              <div className="space-y-2 mb-6 text-[13px] border-t border-[#eaecf0] pt-3">
                <div className="flex justify-between text-[#475467]">
                  <span>Order Type</span>
                  <span className="font-semibold text-[#0f172a]">Market Order (Fractional)</span>
                </div>
                <div className="flex justify-between text-[#475467]">
                  <span>Estimated FX Rate</span>
                  <span className="font-semibold text-[#0f172a]">₹{fxRate} / USD</span>
                </div>
                <div className="flex justify-between text-[#475467]">
                  <span>Custodian Clearing Fee</span>
                  <span className="font-semibold text-[#059669]">$0.00 (Zero Commission)</span>
                </div>
              </div>

              <button
                onClick={() =>
                  onExecuteOrder({
                    symbol: selectedStock,
                    shares: Number(estimatedShares),
                    total: orderAmountUSD,
                  })
                }
                className="w-full py-3 bg-[#0050cc] text-white rounded-xl text-[14px] font-semibold hover:bg-[#003fa4] transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Execute Buy Order</span>
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product 2: Managed Strategies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 bg-[#f4f5f7] rounded-3xl p-8 lg:p-12 shadow-sm border border-[#eaecf0]">
            <div className="bg-[#ffffff] rounded-2xl shadow-md p-6 max-w-md mx-auto border border-[#eaecf0]">
              <div className="flex items-center justify-between pb-4 border-b border-[#eaecf0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0050cc]">
                    <span className="material-symbols-outlined text-[24px]">hub</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0f172a]">
                      All-Weather Sovereign
                    </h4>
                    <p className="text-[11px] text-[#475467]">
                      SEBI RIA Model Portfolio
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#eff4ff] text-[#0050cc] rounded-full text-[12px] font-semibold">
                  Moderate-Aggressive
                </span>
              </div>

              <div className="space-y-4 pt-4">
                <div>
                  <div className="flex justify-between text-[11px] text-[#475467] mb-1">
                    <span className="font-medium">Global Mega-Cap Technology (UCITS)</span>
                    <span className="font-semibold text-[#0f172a]">45%</span>
                  </div>
                  <div className="w-full h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0050cc] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#475467] mb-1">
                    <span className="font-medium">Sovereign US Treasuries (0-3M)</span>
                    <span className="font-semibold text-[#0f172a]">25%</span>
                  </div>
                  <div className="w-full h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0f172a] rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#475467] mb-1">
                    <span className="font-medium">Physical Gold ETC (Irish Domiciled)</span>
                    <span className="font-semibold text-[#0f172a]">20%</span>
                  </div>
                  <div className="w-full h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
                    <div className="h-full bg-[#76767e] rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#475467] mb-1">
                    <span className="font-medium">Emerging Asian Equities</span>
                    <span className="font-semibold text-[#0f172a]">10%</span>
                  </div>
                  <div className="w-full h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
                    <div className="h-full bg-[#059669] rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 rounded-xl bg-[#fafafa] flex items-center justify-between text-[11px] text-[#475467] border border-[#eaecf0]">
                <span>Automatic Quarterly Rebalancing</span>
                <span className="font-semibold text-[#059669]">
                  Active Tax-Loss Harvesting
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
            <span className="px-3 py-1 rounded-full bg-[#f2f4f7] text-[#344054] text-[11px] uppercase font-semibold mb-3">
              Product
            </span>
            <h3 className="font-headline-md text-[#0f172a] font-bold mb-4">
              Managed Strategies
            </h3>
            <p className="text-[18px] text-[#475467] mb-6 leading-relaxed">
              Invest in an expert strategy that maximizes returns for your level of risk, with ongoing rebalancing. Engineered specifically for overseas diversification with minimal drawdowns and maximum currency efficiency.
            </p>
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-[13px] text-[#475467]">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                  check_circle
                </span>
                <span>Regulated advisory overseen by SEBI Registered Advisors</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#475467]">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                  check_circle
                </span>
                <span>One-click execution of dynamic model portfolios</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#475467]">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                  check_circle
                </span>
                <span>Automated tax rebalancing without unwanted capital realization</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('use-cases')}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#000000] text-[#ffffff] text-[14px] font-semibold hover:bg-[#273143] shadow-sm transition-all cursor-pointer group"
            >
              Learn more
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
