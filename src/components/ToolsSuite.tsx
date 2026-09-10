import React from 'react';
import { NavTab } from '../types';

interface ToolsSuiteProps {
  onSelectTool: (toolId: string) => void;
  onNavigate: (tab: NavTab) => void;
}

export const ToolsSuite: React.FC<ToolsSuiteProps> = ({ onSelectTool, onNavigate }) => {
  const tools = [
    {
      id: 'estate-tax',
      title: 'U.S. Estate Tax Liability Calculator',
      description: 'Calculate potential estate tax liability on US equities for non-resident alien investors.',
      cta: 'Calculate liability →',
      icon: 'shield_with_heart',
      iconColor: 'text-[#d92d20]',
    },
    {
      id: 'brokerage',
      title: 'Global Brokerage Calculator',
      description: 'Compare total effective brokerage and clearing fees across major international exchanges.',
      cta: 'Open calculator →',
      icon: 'calculate',
      iconColor: 'text-[#0f172a]',
    },
    {
      id: 'tax-reports',
      title: 'IBKR Tax Reports Generator',
      description: 'Instantly generate Schedule FA and FSI summaries directly from IBKR trade reports.',
      cta: 'Generate reports →',
      icon: 'receipt_long',
      iconColor: 'text-[#059669]',
    },
    {
      id: 'ucits-screener',
      title: 'UCITS ETF Screener',
      description: 'Discover and filter over 2,500 UCITS compliant funds with TER, AUM and domicile data.',
      cta: 'Launch screener →',
      icon: 'filter_list',
      iconColor: 'text-[#0050cc]',
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] py-24 border-t border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
              Institutional Modeling
            </span>
            <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2">
              Tools & Calculators
            </h2>
          </div>
          <p className="text-[13px] text-[#475467] max-w-md mt-2 md:mt-0">
            Run accurate simulations for remittance costs, estate tax exposures, and dividend withholding differences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t) => (
            <div
              key={t.id}
              onClick={() => {
                onSelectTool(t.id);
                onNavigate('tools');
              }}
              className="p-6 rounded-2xl bg-[#fafafa] hover:bg-[#f4f5f7] transition-all shadow-sm flex flex-col justify-between border border-[#eaecf0] hover:shadow-md cursor-pointer group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 border border-[#eaecf0]">
                  <span className={`material-symbols-outlined text-[22px] ${t.iconColor}`}>
                    {t.icon}
                  </span>
                </div>
                <h4 className="text-[16px] text-[#0f172a] font-bold mb-2 group-hover:text-[#0050cc] transition-colors leading-snug">
                  {t.title}
                </h4>
                <p className="text-[13px] text-[#475467] leading-relaxed">
                  {t.description}
                </p>
              </div>
              <span className="text-[12px] font-semibold text-[#0050cc] pt-4 inline-flex items-center gap-1 group-hover:underline">
                {t.cta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
