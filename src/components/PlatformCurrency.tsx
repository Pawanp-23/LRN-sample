import React, { useState } from 'react';
import { NavTab } from '../types';
import { CURRENCY_RATES } from '../data/mockData';

interface PlatformCurrencyProps {
  onNavigate: (tab: NavTab) => void;
  onOpenLogin: () => void;
}

export const PlatformCurrency: React.FC<PlatformCurrencyProps> = ({
  onNavigate,
  onOpenLogin,
}) => {
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
  const [amount, setAmount] = useState<number>(1000);

  const sourceRate = CURRENCY_RATES[sourceCurrency]?.rateToUSD || 1.0;
  const targetRate = CURRENCY_RATES[targetCurrency]?.rateToUSD || 1.0;
  const converted = ((amount * sourceRate) / targetRate).toFixed(2);

  return (
    <section className="w-full bg-[#fafafa] py-24 border-y border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Cross Platform Banner */}
        <div className="bg-[#ffffff] rounded-3xl p-8 lg:p-12 shadow-sm mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#eaecf0]">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
              Platform
            </span>
            <h3 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-4">
              Trade anywhere, anytime
            </h3>
            <p className="text-[18px] text-[#475467] leading-relaxed mb-6">
              Seamlessly switch between desktop and mobile. Full institutional portfolio control, instant order routing, and live reports wherever you are.
            </p>
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#000000] text-[#ffffff] text-[14px] font-semibold hover:bg-[#273143] transition-all cursor-pointer group shadow-sm"
            >
              Log in on desktop
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                computer
              </span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-center">
            <div className="p-4 bg-[#fafafa] rounded-2xl border border-[#eaecf0] min-w-[130px]">
              <span className="material-symbols-outlined text-[36px] text-[#0f172a] mb-2 block">
                laptop_mac
              </span>
              <p className="text-[12px] font-semibold text-[#0f172a]">Desktop Web</p>
              <p className="text-[11px] text-[#98a2b3]">Full Trading Desk</p>
            </div>
            <div className="p-4 bg-[#fafafa] rounded-2xl border border-[#eaecf0] min-w-[130px]">
              <span className="material-symbols-outlined text-[36px] text-[#0f172a] mb-2 block">
                smartphone
              </span>
              <p className="text-[12px] font-semibold text-[#0f172a]">iOS & Android</p>
              <p className="text-[11px] text-[#98a2b3]">Real-time alerts</p>
            </div>
          </div>
        </div>

        {/* Multi Currency Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Currency Hold & Convert */}
          <div className="lg:col-span-6 bg-[#ffffff] rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between border border-[#eaecf0]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#0050cc] font-semibold">
                Multi-currency
              </span>
              <h3 className="font-headline-md text-[#0f172a] font-bold mt-2 mb-4">
                Hold, convert, and invest across 9 currencies
              </h3>
              <p className="text-[15px] text-[#475467] mb-6 leading-relaxed">
                Spot currencies are foreign exchange (FX) trades where one currency is exchanged for another at current market prices with minimal markups. No inflated bank spreads or hidden wire deductions.
              </p>

              {/* Supported Currencies Matrix */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { code: 'USD', name: 'United States' },
                  { code: 'EUR', name: 'Eurozone' },
                  { code: 'GBP', name: 'British Pound' },
                  { code: 'CHF', name: 'Swiss Franc' },
                  { code: 'SGD', name: 'Singapore Dollar' },
                  { code: 'JPY', name: 'Japanese Yen' },
                ].map((cur) => (
                  <div
                    key={cur.code}
                    className="p-3 rounded-xl bg-[#fafafa] text-center border border-[#eaecf0] hover:border-[#0050cc] transition-colors"
                  >
                    <span className="text-[20px] font-bold text-[#0f172a] block">
                      {cur.code}
                    </span>
                    <p className="text-[11px] text-[#98a2b3] mt-0.5">{cur.name}</p>
                  </div>
                ))}
              </div>

              {/* Interactive Mini Currency Converter */}
              <div className="p-4 rounded-xl bg-[#f0f3ff] border border-[#d9e3fb] mb-4">
                <div className="flex items-center justify-between text-[12px] font-semibold text-[#0050cc] mb-2">
                  <span>Interactive FX Rate Preview</span>
                  <span>Zero Spread Markup</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                  <div>
                    <label className="text-[11px] text-[#475467] block mb-1">You send</label>
                    <div className="flex items-center bg-white rounded-lg border border-[#eaecf0] px-2 py-1.5">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value) || 0)}
                        className="w-full text-[13px] font-semibold text-[#0f172a] focus:outline-none"
                      />
                      <select
                        value={sourceCurrency}
                        onChange={(e) => setSourceCurrency(e.target.value)}
                        className="text-[12px] font-bold bg-transparent text-[#0f172a] focus:outline-none ml-1 cursor-pointer"
                      >
                        {Object.keys(CURRENCY_RATES).map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="text-center sm:pt-4 text-[#0050cc]">
                    <span className="material-symbols-outlined text-[20px]">
                      sync_alt
                    </span>
                  </div>

                  <div>
                    <label className="text-[11px] text-[#475467] block mb-1">Recipient gets</label>
                    <div className="flex items-center bg-white rounded-lg border border-[#eaecf0] px-2 py-1.5">
                      <span className="w-full text-[13px] font-semibold text-[#0f172a]">
                        {converted}
                      </span>
                      <select
                        value={targetCurrency}
                        onChange={(e) => setTargetCurrency(e.target.value)}
                        className="text-[12px] font-bold bg-transparent text-[#0f172a] focus:outline-none ml-1 cursor-pointer"
                      >
                        {Object.keys(CURRENCY_RATES).map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-[12px] text-[#0050cc] border-t border-[#eaecf0]">
              <span>Special FX rates for deposits with our partner banks</span>
              <span className="material-symbols-outlined text-[18px]">trending_flat</span>
            </div>
          </div>

          {/* Right: USD Cash Yield & India-Ready Tax Reports */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Yield Card */}
            <div className="bg-[#000000] text-[#ffffff] rounded-3xl p-8 lg:p-10 shadow-md relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="relative z-10">
                <span className="text-[11px] uppercase tracking-wider text-[#dbe1ff] font-semibold">
                  Special features • Built for diversification
                </span>
                <p className="text-[15px] text-[#d0daf2] mt-2">Earn interest up to</p>
                <div className="flex items-baseline gap-3 my-2">
                  <span className="font-display-hero text-white font-bold tracking-tight">
                    3.13%
                  </span>
                  <span className="text-[14px] text-[#d0daf2]">annualized yield</span>
                </div>
                <p className="text-[13px] text-[#d0daf2] leading-relaxed">
                  on uninvested USD cash balances above $10,000. Interest accrues daily and is paid monthly directly into your brokerage account.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-[#d0daf2]">
                <span>SIPC protected cash balances up to $250K</span>
                <span className="text-[#6ffbbe] font-semibold">Automatic Opt-In</span>
              </div>
            </div>

            {/* India Tax Ready Card */}
            <div className="bg-[#ffffff] rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-[#eaecf0]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ecfdf3] text-[#059669] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    description
                  </span>
                </div>
                <h4 className="font-headline-sm text-[#0f172a] font-bold mb-2">
                  India-ready tax reports, generated for you
                </h4>
                <p className="text-[13px] text-[#475467] leading-relaxed">
                  Schedule FA, Schedule FSI, foreign capital gains, and all required ITR disclosure reports automatically compiled and sent to you at financial year end.
                </p>
              </div>

              <div className="pt-4 mt-2">
                <button
                  onClick={() => onNavigate('tools')}
                  className="inline-flex items-center text-[14px] font-semibold text-[#0050cc] hover:text-[#003fa4] cursor-pointer group"
                >
                  Learn more about tax automation
                  <span className="material-symbols-outlined ml-1 text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
