import React from 'react';
import { NavTab } from '../types';
import { LOGO_URL } from '../data/mockData';

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
  onOpenCompliance?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="w-full bg-[#fafafa] shadow-[0_-1px_8px_rgba(0,0,0,0.02)] pt-16 pb-12 text-[#475467] border-t border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Col 1 */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="Paasa"
                className="h-7 w-auto object-contain"
              />
              <span className="font-headline-sm text-[20px] text-[#0f172a] font-bold">
                Paasa
              </span>
            </div>
            <p className="text-[13px] text-[#475467] leading-relaxed">
              Institutional-grade global wealth intelligence and multi-asset international execution infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="material-symbols-outlined text-[#45464d] text-[20px] cursor-pointer hover:text-[#0f172a] transition-colors" title="Global Coverage">
                public
              </span>
              <span className="material-symbols-outlined text-[#45464d] text-[20px] cursor-pointer hover:text-[#0f172a] transition-colors" title="SIPC Insured">
                shield
              </span>
              <span className="material-symbols-outlined text-[#45464d] text-[20px] cursor-pointer hover:text-[#0f172a] transition-colors" title="Institutional Analytics">
                analytics
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-wider text-[#0f172a] font-semibold">
              Platform & Products
            </span>
            <button
              onClick={() => onTabChange('products')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Global Equities & ETFs
            </button>
            <button
              onClick={() => onTabChange('products')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              UCITS Portfolios
            </button>
            <button
              onClick={() => onTabChange('products')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Direct Indexing
            </button>
            <button
              onClick={() => onTabChange('products')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Multi-Currency Wallets
            </button>
            <button
              onClick={() => onTabChange('pricing')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Institutional Pricing
            </button>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-wider text-[#0f172a] font-semibold">
              Analytics & Tools
            </span>
            <button
              onClick={() => onTabChange('tools')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              LRS Transfer Engine
            </button>
            <button
              onClick={() => onTabChange('tools')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Portfolio Stress Tester
            </button>
            <button
              onClick={() => onTabChange('tools')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Withholding Tax Calculator
            </button>
            <button
              onClick={() => onTabChange('tools')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Currency Hedging Models
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Market Benchmarks
            </button>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-wider text-[#0f172a] font-semibold">
              Regulatory & Safety
            </span>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              SEBI Registered RIA
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              SIPC Account Protection
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              US Custody & Clearing
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Data Encryption Standard
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Audit & Disclosures
            </button>
          </div>

          {/* Col 5 */}
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-wider text-[#0f172a] font-semibold">
              Resources & Legal
            </span>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Investor Knowledge Base
            </button>
            <button
              onClick={() => onTabChange('use-cases')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Family Office Advisory
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onTabChange('resources')}
              className="text-left text-[13px] text-[#475467] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Dispute Resolution
            </button>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="pt-8 border-t border-[#eaecf0] space-y-4">
          <p className="text-[11px] text-[#98a2b3] leading-relaxed">
            Regulatory Information: Paasa Wealth Technologies Private Limited holds a Registered Investment Adviser (RIA) license from the Securities and Exchange Board of India (SEBI INA000017892). Investment advisory services are subject to market risks. Please read all scheme-related documents carefully before executing transactions. Paasa acts as an introducing financial infrastructure platform partnering with SEC-registered broker-dealers and SIPC members in the United States.
          </p>
          <p className="text-[11px] text-[#98a2b3] leading-relaxed">
            SIPC Protection Notice: US brokerage accounts are safeguarded by the Securities Investor Protection Corporation (SIPC) up to $500,000 (inclusive of $250,000 for claims for cash). Explanatory brochure available upon request or at sipc.org. Protection does not cover losses resulting from market fluctuation in portfolio securities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
            <span className="text-[11px] text-[#98a2b3]">
              © 2025 Paasa Technologies Inc. All rights reserved. Sovereign institutional investing architecture.
            </span>
            <div className="flex items-center gap-6 text-[11px] text-[#475467]">
              <button onClick={() => onTabChange('resources')} className="hover:text-[#0f172a] transition-colors cursor-pointer">
                Compliance
              </button>
              <button onClick={() => onTabChange('resources')} className="hover:text-[#0f172a] transition-colors cursor-pointer">
                Security Disclosures
              </button>
              <span className="flex items-center gap-1 text-[#059669]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
