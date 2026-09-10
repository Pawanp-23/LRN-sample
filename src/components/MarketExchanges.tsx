import React, { useState } from 'react';
import { EXCHANGE_COUNTRIES, TICKERS_DATA } from '../data/mockData';
import { TickerInfo } from '../types';

interface MarketExchangesProps {
  onSelectTicker?: (ticker: TickerInfo) => void;
}

export const MarketExchanges: React.FC<MarketExchangesProps> = ({ onSelectTicker }) => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTickerModal, setSelectedTickerModal] = useState<TickerInfo | null>(null);

  const filteredTickers = TICKERS_DATA.filter((ticker) => {
    const matchesSearch =
      ticker.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticker.exchange.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticker.country.toLowerCase().includes(searchQuery.toLowerCase());

    if (!activeCountry) return matchesSearch;
    if (activeCountry === 'us') return matchesSearch && ticker.country === 'United States';
    if (activeCountry === 'uk' || activeCountry === 'de') return matchesSearch && (ticker.isUcits || ticker.exchange.includes('LSE'));
    if (activeCountry === 'ch') return matchesSearch && ticker.country === 'Switzerland';
    if (activeCountry === 'hk') return matchesSearch && ticker.country.includes('Hong Kong');
    if (activeCountry === 'nl') return matchesSearch && ticker.country === 'Netherlands';
    return matchesSearch;
  });

  return (
    <section className="w-full bg-[#fafafa] py-20 border-y border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#0050cc] text-[12px] font-semibold mb-4">
          Global Footprint
        </div>
        <h2 className="font-headline-lg text-[#0f172a] font-bold mb-3 tracking-tight">
          Access the world&apos;s markets
        </h2>
        <p className="text-[15px] text-[#475467] max-w-2xl mx-auto mb-10 leading-relaxed">
          Invest across major global exchanges and currencies with seamless LRS remittance and multi-currency wallets.
        </p>

        {/* Country Pills / Exchange Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-10">
          {EXCHANGE_COUNTRIES.map((country) => {
            const isSelected = activeCountry === country.id;
            return (
              <button
                key={country.id}
                onClick={() => setActiveCountry(isSelected ? null : country.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-[14px] transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0050cc] text-white border-[#0050cc] shadow-md scale-105'
                    : 'bg-[#ffffff] text-[#0f172a] border-[#eaecf0] hover:bg-[#f4f5f7]'
                }`}
              >
                <span className="text-base">{country.flag}</span>
                <span className="font-semibold">{country.name}</span>
                <span
                  className={`text-[11px] font-normal ${
                    isSelected ? 'text-white/80' : 'text-[#98a2b3]'
                  }`}
                >
                  ({country.exchanges})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search / Ticker Bar */}
        <div className="max-w-2xl mx-auto mb-6 relative">
          <div className="relative flex items-center bg-[#ffffff] rounded-2xl shadow-md p-2 border border-[#eaecf0]">
            <span className="material-symbols-outlined text-[#98a2b3] ml-3 mr-2 text-[22px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for stocks & ETFs across US, UCITS & Europe (e.g. CSPX, NVDA, VWRA)..."
              className="w-full bg-transparent text-[#0f172a] text-[15px] focus:outline-none placeholder:text-[#98a2b3]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#98a2b3] hover:text-[#0f172a] mr-2 p-1"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
            <button className="px-5 py-2.5 rounded-xl bg-[#000000] text-[#ffffff] text-[14px] font-medium hover:bg-[#273143] transition-colors shrink-0 cursor-pointer">
              Search tickers
            </button>
          </div>

          {/* Quick results if searching or filtered */}
          {(searchQuery || activeCountry) && (
            <div className="mt-3 bg-white rounded-2xl shadow-xl border border-[#eaecf0] p-4 text-left max-h-72 overflow-y-auto space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#eaecf0] text-[12px] text-[#98a2b3]">
                <span>Showing {filteredTickers.length} results</span>
                {activeCountry && (
                  <button
                    onClick={() => setActiveCountry(null)}
                    className="text-[#0050cc] hover:underline cursor-pointer"
                  >
                    Clear country filter
                  </button>
                )}
              </div>
              {filteredTickers.length === 0 ? (
                <p className="py-4 text-center text-[14px] text-[#475467]">
                  No matching tickers found. Try searching &quot;CSPX&quot;, &quot;NVDA&quot;, &quot;VWRA&quot;, or &quot;VUAA&quot;.
                </p>
              ) : (
                filteredTickers.map((t) => (
                  <div
                    key={t.symbol}
                    onClick={() => {
                      setSelectedTickerModal(t);
                      if (onSelectTicker) onSelectTicker(t);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f4f5f7] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f0f3ff] text-[#0050cc] font-bold text-[12px] flex items-center justify-center">
                        {t.symbol.slice(0, 4)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[14px] text-[#0f172a]">
                            {t.symbol}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#f2f4f7] text-[#344054]">
                            {t.category}
                          </span>
                          {t.estateTaxShield && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ecfdf3] text-[#059669] font-medium">
                              Estate-Tax Shielded
                            </span>
                          )}
                        </div>
                        <p className="text-[12px] text-[#475467]">{t.name} • {t.exchange}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[14px] text-[#0f172a]">
                        ${t.price.toFixed(2)}
                      </p>
                      <p
                        className={`text-[11px] font-medium ${
                          t.changePercent >= 0 ? 'text-[#059669]' : 'text-[#d92d20]'
                        }`}
                      >
                        {t.changePercent >= 0 ? '+' : ''}
                        {t.changePercent}%
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Custody Callout */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[#98a2b3] text-[11px]">
          <span>Custodian:</span>
          <span className="font-semibold text-[#0f172a] flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#0050cc]">
              security
            </span>
            Interactive Brokers (IBKR)
          </span>
          <span className="mx-2 hidden sm:inline">•</span>
          <span>Hypothetical figures for illustrative purposes only</span>
        </div>

        {/* Selected Ticker Info Modal */}
        {selectedTickerModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl text-left border border-[#eaecf0] relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setSelectedTickerModal(null)}
                className="absolute top-4 right-4 text-[#98a2b3] hover:text-[#0f172a] p-1 rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0050cc] font-bold text-[16px] flex items-center justify-center">
                  {selectedTickerModal.symbol}
                </div>
                <div>
                  <h3 className="font-bold text-[18px] text-[#0f172a]">
                    {selectedTickerModal.name}
                  </h3>
                  <p className="text-[13px] text-[#475467]">
                    {selectedTickerModal.exchange} • {selectedTickerModal.country}
                  </p>
                </div>
              </div>

              <div className="bg-[#fafafa] p-4 rounded-xl space-y-2 mb-4 border border-[#eaecf0]">
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#475467]">Current Price</span>
                  <span className="font-bold text-[#0f172a]">
                    {selectedTickerModal.currency} ${selectedTickerModal.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#475467]">24h Movement</span>
                  <span className={`font-semibold ${selectedTickerModal.changePercent >= 0 ? 'text-[#059669]' : 'text-[#d92d20]'}`}>
                    {selectedTickerModal.changePercent >= 0 ? '+' : ''}{selectedTickerModal.changePercent}%
                  </span>
                </div>
                {selectedTickerModal.ter && (
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#475467]">Expense Ratio (TER)</span>
                    <span className="font-semibold text-[#0f172a]">{selectedTickerModal.ter}%</span>
                  </div>
                )}
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#475467]">US Estate Tax Status</span>
                  <span className={`font-semibold ${selectedTickerModal.estateTaxShield ? 'text-[#059669]' : 'text-[#d92d20]'}`}>
                    {selectedTickerModal.estateTaxShield ? 'Protected (0% US Tax)' : 'Subject to up to 40%'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedTickerModal(null)}
                className="w-full py-2.5 bg-[#000000] text-white rounded-xl text-[14px] font-semibold hover:bg-[#273143] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
