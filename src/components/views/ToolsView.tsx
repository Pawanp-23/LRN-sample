import React, { useState } from 'react';
import { TICKERS_DATA } from '../../data/mockData';

interface ToolsViewProps {
  initialTool?: string;
  onOpenGetStarted: () => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({
  initialTool = 'estate-tax',
  onOpenGetStarted,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTool);

  // 1. Estate Tax Calculator State
  const [estatePortfolioUSD, setEstatePortfolioUSD] = useState<number>(750000);
  const [dividendYieldPercent, setDividendYieldPercent] = useState<number>(1.8);

  // Non-Resident Alien Estate Tax Calculation
  const calculateEstateTax = (amount: number) => {
    if (amount <= 60000) return 0;
    const taxable = amount - 60000;
    // IRS Non-resident alien progressive tax schedule approximation:
    if (taxable <= 10000) return taxable * 0.18;
    if (taxable <= 20000) return 1800 + (taxable - 10000) * 0.20;
    if (taxable <= 40000) return 3800 + (taxable - 20000) * 0.22;
    if (taxable <= 60000) return 8200 + (taxable - 40000) * 0.24;
    if (taxable <= 80000) return 13000 + (taxable - 60000) * 0.26;
    if (taxable <= 100000) return 18200 + (taxable - 80000) * 0.28;
    if (taxable <= 150000) return 23800 + (taxable - 100000) * 0.30;
    if (taxable <= 250000) return 38800 + (taxable - 150000) * 0.32;
    if (taxable <= 500000) return 70800 + (taxable - 250000) * 0.34;
    if (taxable <= 750000) return 155800 + (taxable - 500000) * 0.37;
    if (taxable <= 1000000) return 248300 + (taxable - 750000) * 0.39;
    return 345800 + (taxable - 1000000) * 0.40;
  };

  const estateTaxDue = calculateEstateTax(estatePortfolioUSD);
  const estateTaxEffectiveRate = ((estateTaxDue / estatePortfolioUSD) * 100).toFixed(1);
  const annualDividendUSD = (estatePortfolioUSD * (dividendYieldPercent / 100));
  const usDividendTax = annualDividendUSD * 0.25; // 25% for US stocks
  const ucitsDividendTax = annualDividendUSD * 0.15; // 15% for Ireland treaty
  const annualDividendTaxSaved = usDividendTax - ucitsDividendTax;

  // 2. LRS Remittance Calculator State
  const [remitAmountINR, setRemitAmountINR] = useState<number>(1000000);
  const lrsThresholdINR = 700000;
  const taxableTCSAmount = Math.max(0, remitAmountINR - lrsThresholdINR);
  const tcsAmount = taxableTCSAmount * 0.20; // 20% TCS above 7L

  const bankFxMarkup = remitAmountINR * 0.025; // 2.5% bank spread
  const paasaFxMarkup = remitAmountINR * 0.0025; // 0.25% Paasa spread
  const fxSavings = bankFxMarkup - paasaFxMarkup;

  return (
    <div className="w-full pt-12 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Title */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
          Financial Engineering Suite
        </span>
        <h1 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-3 tracking-tight">
          Institutional Modeling & Compliance Tools
        </h1>
        <p className="text-[15px] text-[#475467] leading-relaxed">
          Simulate US estate tax exposures, LRS remittance efficiencies, UCITS fund structures, and India tax filings.
        </p>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#f4f5f7] rounded-2xl max-w-2xl mx-auto border border-[#eaecf0]">
          {[
            { id: 'estate-tax', label: 'U.S. Estate Tax Simulator', icon: 'shield_with_heart' },
            { id: 'brokerage', label: 'LRS & Remittance Calculator', icon: 'calculate' },
            { id: 'ucits-screener', label: 'UCITS ETF Screener', icon: 'filter_list' },
            { id: 'tax-reports', label: 'Schedule FA / FSI Guide', icon: 'receipt_long' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-[#0050cc] shadow-sm'
                  : 'text-[#475467] hover:text-[#0f172a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tool 1: Estate Tax Calculator */}
      {activeTab === 'estate-tax' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-[#eaecf0] space-y-6">
            <div className="border-b border-[#eaecf0] pb-4">
              <h3 className="text-[18px] font-bold text-[#0f172a]">
                U.S. Estate Tax Liability Calculator
              </h3>
              <p className="text-[13px] text-[#475467] mt-1">
                For non-US resident investors holding US-domiciled equities.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#475467]">Total US Equity Portfolio</span>
                <span className="text-[#0f172a]">${estatePortfolioUSD.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="25000"
                value={estatePortfolioUSD}
                onChange={(e) => setEstatePortfolioUSD(Number(e.target.value))}
                className="w-full accent-[#0050cc] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#98a2b3] mt-1">
                <span>$50,000</span>
                <span>$1,000,000</span>
                <span>$5,000,000</span>
              </div>
            </div>

            <div className="flex gap-2">
              {[250000, 500000, 1000000, 2000000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setEstatePortfolioUSD(preset)}
                  className={`text-[12px] py-1.5 flex-1 rounded-lg border font-semibold cursor-pointer ${
                    estatePortfolioUSD === preset
                      ? 'bg-[#eff4ff] text-[#0050cc] border-[#0050cc]'
                      : 'bg-[#fafafa] text-[#475467] border-[#eaecf0]'
                  }`}
                >
                  ${preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}K`}
                </button>
              ))}
            </div>

            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#475467]">Expected Dividend Yield</span>
                <span className="text-[#0f172a]">{dividendYieldPercent}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.5"
                step="0.1"
                value={dividendYieldPercent}
                onChange={(e) => setDividendYieldPercent(Number(e.target.value))}
                className="w-full accent-[#0050cc] cursor-pointer"
              />
            </div>

            <div className="p-4 bg-[#fef3f2] rounded-2xl border border-[#ffdad6] text-[12px] text-[#93000a] space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">warning</span>
                IRS Non-Resident Alien Rule:
              </div>
              <p>
                Non-US residents only receive a $60,000 exemption threshold (compared to $13.6M for US citizens). Any excess is taxed at rates scaling up to 40%.
              </p>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-[#eaecf0]">
            <h3 className="text-[18px] font-bold text-[#0f172a] mb-6">
              Simulation Results Comparison
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* US Domestic Stock Card */}
              <div className="p-6 rounded-2xl bg-[#fef3f2] border border-[#ffdad6] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d92d20]">
                    US Domiciled Stocks (VOO, NVDA, AAPL)
                  </span>
                  <div className="mt-3">
                    <span className="text-[12px] text-[#475467]">Potential Estate Tax Due</span>
                    <p className="text-[32px] font-bold text-[#d92d20] mt-0.5">
                      ${Math.round(estateTaxDue).toLocaleString()}
                    </p>
                    <span className="text-[12px] text-[#d92d20] font-semibold">
                      Effective Rate: {estateTaxEffectiveRate}%
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ffdad6] text-[12px] text-[#475467] space-y-1.5">
                  <div className="flex justify-between">
                    <span>Dividend Withholding</span>
                    <span className="font-semibold text-[#d92d20]">25% (${Math.round(usDividendTax)}/yr)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IRS Exemption</span>
                    <span className="font-semibold">$60,000 only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>US Probate Required?</span>
                    <span className="font-semibold text-[#d92d20]">Yes (Court delays)</span>
                  </div>
                </div>
              </div>

              {/* Irish UCITS Card */}
              <div className="p-6 rounded-2xl bg-[#ecfdf3] border border-[#a6f4c5] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669]">
                    Ireland UCITS ETFs (CSPX, VWRA, VUAA)
                  </span>
                  <div className="mt-3">
                    <span className="text-[12px] text-[#475467]">Estate Tax Due with Paasa</span>
                    <p className="text-[32px] font-bold text-[#059669] mt-0.5">
                      $0.00
                    </p>
                    <span className="text-[12px] text-[#059669] font-semibold">
                      100% Tax Shielded (0% IRS Liability)
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#a6f4c5] text-[12px] text-[#475467] space-y-1.5">
                  <div className="flex justify-between">
                    <span>Dividend Withholding</span>
                    <span className="font-semibold text-[#059669]">15% (${Math.round(ucitsDividendTax)}/yr)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Tax Saved</span>
                    <span className="font-semibold text-[#059669]">+${Math.round(annualDividendTaxSaved)}/yr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>US Probate Required?</span>
                    <span className="font-semibold text-[#059669]">No (Irish Domicile)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#f0f3ff] rounded-2xl border border-[#d9e3fb] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[14px] font-bold text-[#0050cc]">
                  Save up to ${Math.round(estateTaxDue).toLocaleString()} by structuring through UCITS
                </p>
                <p className="text-[12px] text-[#475467]">
                  Same S&P 500 / Global equity market return with complete sovereign safety.
                </p>
              </div>
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-2.5 bg-[#0050cc] text-white rounded-xl text-[13px] font-semibold hover:bg-[#003fa4] whitespace-nowrap cursor-pointer"
              >
                Structure Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tool 2: LRS Remittance Calculator */}
      {activeTab === 'brokerage' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-[#eaecf0] space-y-6">
            <div className="border-b border-[#eaecf0] pb-4">
              <h3 className="text-[18px] font-bold text-[#0f172a]">
                RBI LRS Remittance & TCS Calculator
              </h3>
              <p className="text-[13px] text-[#475467] mt-1">
                Calculate TCS (Tax Collected at Source) & FX costs under Liberalized Remittance Scheme.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#475467]">Remittance Amount</span>
                <span className="text-[#0f172a]">₹{remitAmountINR.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={remitAmountINR}
                onChange={(e) => setRemitAmountINR(Number(e.target.value))}
                className="w-full accent-[#0050cc] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#98a2b3] mt-1">
                <span>₹1 Lakh</span>
                <span>₹25 Lakh</span>
                <span>₹50 Lakh</span>
              </div>
            </div>

            <div className="p-4 bg-[#fafafa] rounded-2xl border border-[#eaecf0] space-y-2 text-[13px]">
              <div className="flex justify-between text-[#475467]">
                <span>Annual LRS Limit per Individual</span>
                <span className="font-semibold text-[#0f172a]">$250,000 (~₹2.1 Crore)</span>
              </div>
              <div className="flex justify-between text-[#475467]">
                <span>Exempt Threshold (0% TCS)</span>
                <span className="font-semibold text-[#059669]">₹7,00,000 / Financial Year</span>
              </div>
              <div className="flex justify-between text-[#475467]">
                <span>TCS Rate above ₹7 Lakh</span>
                <span className="font-semibold text-[#0f172a]">20% (Adjustable against advance tax)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-[#eaecf0] space-y-6">
            <h3 className="text-[18px] font-bold text-[#0f172a]">
              Remittance Breakdown
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#fafafa] border border-[#eaecf0]">
                <span className="text-[11px] text-[#98a2b3] font-medium">Investable Corpus</span>
                <p className="text-[20px] font-bold text-[#0f172a] mt-1">
                  ₹{remitAmountINR.toLocaleString('en-IN')}
                </p>
                <span className="text-[11px] text-[#475467]">≈ ${(remitAmountINR / 83.42).toFixed(0)} USD</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#fef3f2] border border-[#ffdad6]">
                <span className="text-[11px] text-[#d92d20] font-medium">Upfront TCS (Refundable)</span>
                <p className="text-[20px] font-bold text-[#d92d20] mt-1">
                  ₹{tcsAmount.toLocaleString('en-IN')}
                </p>
                <span className="text-[11px] text-[#475467]">Adjustable in ITR</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#ecfdf3] border border-[#a6f4c5]">
                <span className="text-[11px] text-[#059669] font-medium">Paasa FX Savings</span>
                <p className="text-[20px] font-bold text-[#059669] mt-1">
                  ₹{Math.round(fxSavings).toLocaleString('en-IN')}
                </p>
                <span className="text-[11px] text-[#059669] font-semibold">vs. Retail Bank Spreads</span>
              </div>
            </div>

            <div className="p-5 bg-[#fafafa] rounded-2xl border border-[#eaecf0] space-y-3 text-[13px]">
              <h4 className="font-bold text-[#0f172a]">Why Remitting through Paasa Saves Thousands:</h4>
              <div className="space-y-2 text-[#475467]">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                  <strong>Institutional FX Rate:</strong> Standard banks charge 1.5% to 3.5% currency spreads. Paasa direct clearing routes through IBKR interbank rates at ~0.2%.
                </p>
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                  <strong>Automated Form A2:</strong> Generates all FEMA compliance documents and bank declarations in one click.
                </p>
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#059669] text-[18px]">check</span>
                  <strong>TCS Certificate:</strong> Directly downloaded for your Chartered Accountant to claim against quarterly advance tax liability.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tool 3: UCITS ETF Screener */}
      {activeTab === 'ucits-screener' && (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#eaecf0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#eaecf0]">
            <div>
              <h3 className="text-[20px] font-bold text-[#0f172a]">
                UCITS ETF Screener & Database
              </h3>
              <p className="text-[13px] text-[#475467]">
                Top Irish-domiciled UCITS ETFs for international investors with 0% US estate tax risk.
              </p>
            </div>
            <span className="px-3 py-1 bg-[#ecfdf3] text-[#059669] rounded-full text-[12px] font-semibold">
              Live Quotes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="border-b border-[#eaecf0] text-[#98a2b3] font-semibold text-[11px] uppercase tracking-wider">
                  <th className="pb-3">Ticker</th>
                  <th className="pb-3">Fund Name</th>
                  <th className="pb-3">Benchmark</th>
                  <th className="pb-3">TER (Fee)</th>
                  <th className="pb-3">Distribution</th>
                  <th className="pb-3">Domicile</th>
                  <th className="pb-3 text-right">Price (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaecf0]">
                {TICKERS_DATA.filter((t) => t.isUcits).map((etf) => (
                  <tr key={etf.symbol} className="hover:bg-[#f4f5f7] transition-colors">
                    <td className="py-4 font-bold text-[#0050cc]">
                      {etf.symbol}
                    </td>
                    <td className="py-4 font-semibold text-[#0f172a]">
                      {etf.name}
                    </td>
                    <td className="py-4 text-[#475467]">
                      {etf.symbol === 'CSPX' || etf.symbol === 'VUAA' ? 'S&P 500 Index' : etf.symbol === 'VWRA' ? 'FTSE All-World Index' : 'MSCI EM IMI'}
                    </td>
                    <td className="py-4 font-semibold text-[#0f172a]">
                      {etf.ter}%
                    </td>
                    <td className="py-4 text-[#059669] font-medium">
                      Accumulating (Acc)
                    </td>
                    <td className="py-4 text-[#475467]">
                      🇮🇪 Ireland (0% US Tax)
                    </td>
                    <td className="py-4 text-right font-bold text-[#0f172a]">
                      ${etf.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tool 4: Schedule FA & FSI Guide */}
      {activeTab === 'tax-reports' && (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#eaecf0] max-w-4xl mx-auto space-y-6">
          <div className="border-b border-[#eaecf0] pb-4">
            <h3 className="text-[20px] font-bold text-[#0f172a]">
              Schedule FA & Schedule FSI Tax Automation
            </h3>
            <p className="text-[13px] text-[#475467] mt-1">
              Indian residents holding overseas assets are legally required to file Schedule FA (Foreign Assets) in ITR-2 / ITR-3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#fafafa] border border-[#eaecf0] space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#0050cc] flex items-center justify-center font-bold text-[13px]">
                  FA
                </span>
                <h4 className="font-bold text-[15px] text-[#0f172a]">Schedule FA (Foreign Assets)</h4>
              </div>
              <p className="text-[13px] text-[#475467] leading-relaxed">
                Mandatory disclosure of overseas depository accounts, equity shares, and custodial assets held anytime during the calendar year (Jan 1 to Dec 31).
              </p>
              <div className="p-3 bg-white rounded-xl text-[12px] border border-[#eaecf0] text-[#059669] font-semibold">
                ✓ Paasa automatically calculates Peak Value, Closing Balance, and Gross Amount paid.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#fafafa] border border-[#eaecf0] space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#ecfdf3] text-[#059669] flex items-center justify-center font-bold text-[13px]">
                  FSI
                </span>
                <h4 className="font-bold text-[15px] text-[#0f172a]">Schedule FSI & TR (Tax Relief)</h4>
              </div>
              <p className="text-[13px] text-[#475467] leading-relaxed">
                Declaration of foreign source dividends and capital gains to claim Foreign Tax Credit (FTC) under Section 90/91 (DTAA).
              </p>
              <div className="p-3 bg-white rounded-xl text-[12px] border border-[#eaecf0] text-[#059669] font-semibold">
                ✓ Auto-generates Form 67 XML for Foreign Tax Credit claims.
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#f0f3ff] rounded-2xl border border-[#d9e3fb] flex items-center justify-between">
            <div className="text-[13px] text-[#0050cc]">
              <strong>Download Sample Tax Package:</strong> See sample IBKR 1042-S, Schedule FA worksheet, and capital gains reports.
            </div>
            <button
              onClick={() => alert("Sample Schedule FA and Tax Reporting Package downloaded successfully.")}
              className="px-4 py-2 bg-[#0050cc] text-white rounded-xl text-[12px] font-semibold hover:bg-[#003fa4] cursor-pointer"
            >
              Download Sample CSV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
