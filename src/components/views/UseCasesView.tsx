import React from 'react';

interface UseCasesViewProps {
  onOpenGetStarted: () => void;
  onOpenTools: () => void;
}

export const UseCasesView: React.FC<UseCasesViewProps> = ({
  onOpenGetStarted,
  onOpenTools,
}) => {
  return (
    <div className="w-full pt-12 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
          Architected For Global Profiles
        </span>
        <h1 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-3 tracking-tight">
          Sovereign Financial Architecture for Global Indians
        </h1>
        <p className="text-[15px] text-[#475467] leading-relaxed">
          Engineered to solve the distinct cross-border tax, FEMA, and estate requirements of high-achieving professionals and families.
        </p>
      </div>

      <div className="space-y-16">
        {/* Use Case 1: Tech Employees & RSUs */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#eaecf0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#fef3f2] text-[#d92d20] text-[11px] uppercase font-semibold">
              Highest Risk Category
            </span>
            <h2 className="text-[24px] font-bold text-[#0f172a]">
              Tech Employees with US RSUs & Stock Options
            </h2>
            <p className="text-[15px] text-[#475467] leading-relaxed">
              If you work at Google, Microsoft, Amazon, Meta, Uber, or other US tech MNCs in India, your vested RSUs held at Morgan Stanley, E*TRADE, or Charles Schwab are <strong className="text-[#0f172a]">US-situs assets</strong>.
            </p>
            <div className="p-4 bg-[#fef3f2] rounded-2xl border border-[#ffdad6] text-[13px] text-[#93000a] space-y-2">
              <p className="font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">gavel</span>
                The 40% US Estate Tax Trap:
              </p>
              <p>
                In the event of untimely demise, the US IRS levies up to 40% federal estate tax on US stock balances exceeding just $60,000. Your nominees in India cannot inherit the shares without expensive US probate court proceedings.
              </p>
            </div>
            <div className="space-y-2 pt-2 text-[13px] text-[#475467]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                <strong>The Paasa Solution:</strong> Cashless ACATS transfer or systematic rebalancing into Ireland-domiciled UCITS ETFs (CSPX / VWRA).
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                0% US Estate Tax liability, 0 US court probate, and dividend withholding dropped from 25% to 15%.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenTools}
                className="px-5 py-2.5 bg-[#0050cc] text-white rounded-xl text-[13px] font-semibold hover:bg-[#003fa4] cursor-pointer"
              >
                Calculate Estate Tax Exposure
              </button>
              <button
                onClick={onOpenGetStarted}
                className="px-5 py-2.5 bg-[#f4f5f7] text-[#0f172a] rounded-xl text-[13px] font-semibold hover:bg-[#e8eeff] cursor-pointer"
              >
                Book RSU Transition Review
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#fafafa] p-6 rounded-2xl border border-[#eaecf0]">
            <div className="flex items-center justify-between pb-3 border-b border-[#eaecf0]">
              <span className="font-bold text-[14px] text-[#0f172a]">RSU Transition Blueprint</span>
              <span className="text-[11px] bg-[#ecfdf3] text-[#059669] px-2 py-0.5 rounded font-semibold">Protected</span>
            </div>
            <div className="space-y-3 py-4 text-[13px]">
              <div className="p-3 bg-white rounded-xl border border-[#eaecf0]">
                <span className="text-[#98a2b3] text-[11px] block">Step 1</span>
                <span className="font-bold text-[#0f172a]">Direct Custody Transfer</span>
                <p className="text-[11px] text-[#475467] mt-0.5">Move vested shares from E*TRADE/Schwab without selling.</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#eaecf0]">
                <span className="text-[#98a2b3] text-[11px] block">Step 2</span>
                <span className="font-bold text-[#0f172a]">Tax-Loss Harvesting</span>
                <p className="text-[11px] text-[#475467] mt-0.5">Offset gains systematically against eligible capital losses.</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#eaecf0]">
                <span className="text-[#98a2b3] text-[11px] block">Step 3</span>
                <span className="font-bold text-[#0f172a]">Reinvest in Irish UCITS</span>
                <p className="text-[11px] text-[#475467] mt-0.5">Maintain tech exposure (CSPX / NDIA) with zero US estate tax.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 2: Returning NRIs (RNOR) */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#eaecf0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#0050cc] text-[11px] uppercase font-semibold">
              Tax Arbitrage Opportunity
            </span>
            <h2 className="text-[24px] font-bold text-[#0f172a]">
              Returning NRIs & RNOR Tax Optimization
            </h2>
            <p className="text-[15px] text-[#475467] leading-relaxed">
              When NRIs return to India, they can claim <strong>Resident but Not Ordinarily Resident (RNOR)</strong> status for up to 2-3 financial years. During this period, overseas income and capital gains are completely exempt from Indian taxation.
            </p>
            <div className="space-y-2 pt-2 text-[13px] text-[#475467]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                <strong>Step-Up in Cost Basis:</strong> Reset cost basis tax-free during the RNOR window before Indian capital gains tax applies.
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                <strong>Overseas Bank Funding:</strong> Direct ACH / Wire from Chase, BoA, HSBC, or Barclays without touching LRS limits.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-2.5 bg-[#000000] text-white rounded-xl text-[13px] font-semibold hover:bg-[#273143] cursor-pointer"
              >
                Consult RNOR Specialist
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#f0f3ff] p-6 rounded-2xl border border-[#d9e3fb] space-y-3">
            <span className="font-bold text-[14px] text-[#0050cc] block">
              The 2-Year RNOR Exemption Window
            </span>
            <p className="text-[13px] text-[#475467] leading-relaxed">
              Failing to restructure foreign portfolios before RNOR status expires exposes all subsequent global capital gains to 12.5% LTCG or slab rate STCG in India. Paasa ensures proactive structuring.
            </p>
            <div className="p-3 bg-white rounded-xl border border-[#eaecf0] text-[12px] font-semibold text-[#059669]">
              ✓ Complete DTAA relief & automated Foreign Tax Credit certification
            </div>
          </div>
        </div>

        {/* Use Case 3: Indian Residents & LRS Remittance */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#eaecf0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#ecfdf3] text-[#059669] text-[11px] uppercase font-semibold">
              Full FEMA Compliance
            </span>
            <h2 className="text-[24px] font-bold text-[#0f172a]">
              Indian Residents & LRS Remittance
            </h2>
            <p className="text-[15px] text-[#475467] leading-relaxed">
              Every Indian resident can remit up to $250,000 per financial year under the RBI Liberalized Remittance Scheme. Paasa automates Form A2 declarations and ties directly into authorized dealer bank networks.
            </p>
            <div className="space-y-2 pt-2 text-[13px] text-[#475467]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                Partner bank remittance integration (ICICI, HDFC, Kotak, Axis, IDFC).
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                Same-day funds availability in your Interactive Brokers account.
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                Instant TCS receipts for adjustment against quarterly advance tax payments.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-2.5 bg-[#0050cc] text-white rounded-xl text-[13px] font-semibold hover:bg-[#003fa4] cursor-pointer"
              >
                Open LRS Investment Account
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#fafafa] p-6 rounded-2xl border border-[#eaecf0] space-y-3">
            <h4 className="font-bold text-[14px] text-[#0f172a]">LRS Annual Allowance per Family</h4>
            <div className="p-4 bg-white rounded-xl border border-[#eaecf0] space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#475467]">1 Family Member</span>
                <span className="font-bold text-[#0f172a]">$250,000 (~₹2.1 Cr)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#475467]">Family of 4</span>
                <span className="font-bold text-[#0050cc]">$1,000,000 (~₹8.3 Cr)</span>
              </div>
              <p className="text-[11px] text-[#98a2b3] pt-2 border-t border-[#eaecf0]">
                Accounts opened individually in each member&apos;s PAN with consolidated advisory tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
