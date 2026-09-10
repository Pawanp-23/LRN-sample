import React, { useState } from 'react';
import { NavTab } from '../types';
import { MEDIA_ARTICLES } from '../data/mockData';

interface ConsolidateAndMediaProps {
  onNavigate: (tab: NavTab) => void;
}

export const ConsolidateAndMedia: React.FC<ConsolidateAndMediaProps> = ({ onNavigate }) => {
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [brokerSource, setBrokerSource] = useState('Vested');

  return (
    <section className="w-full bg-[#ffffff] py-20 border-t border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Transfer Existing Investments Banner */}
        <div className="bg-[#ffffff] rounded-3xl p-8 lg:p-12 shadow-md mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#eaecf0]">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-wider text-[#0050cc] font-semibold">
              Consolidate Holdings
            </span>
            <h3 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-3">
              Transfer existing investments to Paasa
            </h3>
            <p className="text-[15px] text-[#475467] leading-relaxed mb-4">
              Move your holdings without booking taxable capital gains. ACATS and direct custodian transfer guides & automated instructions for all US brokers available directly in the app.
            </p>
            <div className="flex items-center gap-4 text-[#475467] text-[12px]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0f172a] bg-[#ecfdf3] text-[#059669] px-3 py-1 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">
                  support_agent
                </span>
                WhatsApp concierge: +91-9871076013
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <button
              onClick={() => setShowTransferModal(true)}
              className="px-6 py-3 rounded-xl bg-[#000000] text-[#ffffff] text-[14px] font-semibold hover:bg-[#273143] transition-all shadow-sm cursor-pointer"
            >
              Initiate Transfer
            </button>
          </div>
        </div>

        {/* Media Mentions */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#eaecf0]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#0050cc] font-semibold">
                Press & Analysis
              </span>
              <h3 className="font-headline-md text-[#0f172a] font-bold mt-1">
                Paasa in the Media
              </h3>
            </div>
            <button
              onClick={() => onNavigate('resources')}
              className="text-[14px] font-semibold text-[#0050cc] hover:text-[#003fa4] flex items-center gap-1 cursor-pointer group"
            >
              View press archive
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDIA_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('resources')}
                className="group bg-[#fafafa] p-6 rounded-2xl hover:bg-[#f4f5f7] transition-all flex flex-col justify-between border border-[#eaecf0] hover:shadow-sm cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-bold text-[11px] uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${article.outletColor}15`,
                        color: article.outletColor,
                      }}
                    >
                      {article.outlet}
                    </span>
                    <span className="text-[11px] text-[#98a2b3]">
                      {article.type} • {article.readTime}
                    </span>
                  </div>
                  <h4 className="text-[16px] text-[#0f172a] font-bold group-hover:text-[#0050cc] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-[13px] text-[#475467] line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#0050cc] pt-4 inline-flex items-center gap-1">
                  {article.linkText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transfer Modal */}
        {showTransferModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#eaecf0] relative">
              <button
                onClick={() => setShowTransferModal(false)}
                className="absolute top-4 right-4 text-[#98a2b3] hover:text-[#0f172a] p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#0050cc] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">swap_horiz</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#0f172a]">
                    ACATS Transfer Concierge
                  </h3>
                  <p className="text-[12px] text-[#475467]">
                    Transfer US shares without selling or paying capital gains tax
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-[13px]">
                <div>
                  <label className="block text-[#475467] font-medium mb-1">
                    Current Broker / Custodian
                  </label>
                  <select
                    value={brokerSource}
                    onChange={(e) => setBrokerSource(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[#0f172a] font-semibold focus:outline-none focus:border-[#0050cc]"
                  >
                    <option value="Vested">Vested (DriveWealth)</option>
                    <option value="INDmoney">INDmoney (DriveWealth / Alpaca)</option>
                    <option value="Charles Schwab">Charles Schwab</option>
                    <option value="Fidelity">Fidelity</option>
                    <option value="E*TRADE">E*TRADE / Morgan Stanley</option>
                    <option value="Interactive Brokers">Existing Interactive Brokers</option>
                    <option value="Other">Other Global Broker</option>
                  </select>
                </div>

                <div className="p-3 bg-[#f0f3ff] rounded-xl text-[#0050cc] text-[12px] space-y-1">
                  <p className="font-semibold">How ACATS transfer works:</p>
                  <p className="text-[#475467]">
                    1. We generate an Automated Customer Account Transfer Service request.
                  </p>
                  <p className="text-[#475467]">
                    2. Your shares move seamlessly into your Paasa IBKR account.
                  </p>
                  <p className="text-[#475467]">
                    3. No tax realization or TDS triggered.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    alert(`Transfer request initiated for ${brokerSource}. Our concierge team will reach out via WhatsApp/email within 1 business day.`);
                    setShowTransferModal(false);
                  }}
                  className="flex-1 py-2.5 bg-[#0050cc] text-white rounded-xl text-[14px] font-semibold hover:bg-[#003fa4] cursor-pointer"
                >
                  Confirm & Request Forms
                </button>
                <button
                  onClick={() => setShowTransferModal(false)}
                  className="px-4 py-2.5 bg-[#f4f5f7] text-[#475467] rounded-xl text-[14px] font-medium hover:bg-[#e8eeff] cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
