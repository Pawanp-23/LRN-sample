import React, { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [fullName, setFullName] = useState('');
  const [residence, setResidence] = useState('Indian Resident');
  const [bank, setBank] = useState('HDFC Bank');
  const [initialAmountUSD, setInitialAmountUSD] = useState(1000);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 600);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#eaecf0] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#98a2b3] hover:text-[#0f172a] p-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#98a2b3] mb-2 uppercase tracking-wider">
            <span className={step >= 1 ? 'text-[#0050cc]' : ''}>1. Identity KYC</span>
            <span className={step >= 2 ? 'text-[#0050cc]' : ''}>2. LRS Remittance</span>
            <span className={step >= 3 ? 'text-[#0050cc]' : ''}>3. Account Ready</span>
          </div>
          <div className="w-full h-1.5 bg-[#f4f5f7] rounded-full overflow-hidden flex">
            <div
              className="bg-[#0050cc] h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* STEP 1: Identity & KYC */}
        {step === 1 && (
          <form onSubmit={handleNextStep1} className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#0050cc] font-semibold">
                Step 1 of 3
              </span>
              <h2 className="text-[20px] font-bold text-[#0f172a] mt-1">
                Complete Instant KYC
              </h2>
              <p className="text-[13px] text-[#475467]">
                100% digital verification linked with CKYC & Digilocker (~3 mins).
              </p>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                Full Legal Name (as on PAN)
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rohan Sharma"
                className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  required
                  maxLength={10}
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] uppercase tracking-wider font-mono focus:outline-none focus:border-[#0050cc]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                  Aadhaar (Last 4 digits)
                </label>
                <input
                  type="text"
                  required
                  maxLength={4}
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ''))}
                  placeholder="8892"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] tracking-wider font-mono focus:outline-none focus:border-[#0050cc]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                Residential Status
              </label>
              <select
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
              >
                <option value="Indian Resident">Indian Resident (FEMA Compliant)</option>
                <option value="NRI">NRI (Non-Resident Indian)</option>
                <option value="RNOR">Returning NRI (RNOR)</option>
                <option value="Foreign National">Foreign National / Expat</option>
              </select>
            </div>

            <div className="p-3 bg-[#f0f3ff] rounded-xl text-[11px] text-[#0050cc] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Direct paperless KYC approved by SEBI registered depository</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#000000] text-white rounded-xl text-[14px] font-semibold hover:bg-[#273143] cursor-pointer transition-colors"
            >
              {isSubmitting ? 'Verifying Identity...' : 'Continue to Remittance Setup'}
            </button>
          </form>
        )}

        {/* STEP 2: Remittance & Bank Linking */}
        {step === 2 && (
          <form onSubmit={handleNextStep2} className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#0050cc] font-semibold">
                Step 2 of 3
              </span>
              <h2 className="text-[20px] font-bold text-[#0f172a] mt-1">
                Remit & Fund Brokerage Account
              </h2>
              <p className="text-[13px] text-[#475467]">
                Connect your Indian bank for automated Form A2 generation under RBI LRS.
              </p>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                Primary Remittance Bank
              </label>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
              >
                <option value="HDFC Bank">HDFC Bank (Instant NetBanking Wire)</option>
                <option value="ICICI Bank">ICICI Bank (Money2World API)</option>
                <option value="Axis Bank">Axis Bank (Direct A2 Remit)</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                <option value="State Bank of India">State Bank of India</option>
                <option value="Overseas Bank">International Bank (Chase, HSBC, Barclays)</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                Planned Initial Remittance (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-[#98a2b3] font-bold">$</span>
                <input
                  type="number"
                  min="50"
                  value={initialAmountUSD}
                  onChange={(e) => setInitialAmountUSD(Number(e.target.value) || 0)}
                  className="w-full pl-7 pr-3 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] font-semibold focus:outline-none focus:border-[#0050cc]"
                />
              </div>
              <p className="text-[11px] text-[#98a2b3] mt-1">
                ≈ ₹{(initialAmountUSD * 83.42).toLocaleString('en-IN', { maximumFractionDigits: 0 })} at interbank FX rate
              </p>
            </div>

            <div className="p-4 bg-[#fafafa] rounded-xl border border-[#eaecf0] space-y-1.5 text-[12px] text-[#475467]">
              <div className="flex justify-between">
                <span>Form A2 Declaration:</span>
                <span className="font-semibold text-[#059669]">Auto-Prepared</span>
              </div>
              <div className="flex justify-between">
                <span>RBI Purpose Code:</span>
                <span className="font-semibold text-[#0f172a]">S0001 (Overseas Portfolio Investment)</span>
              </div>
              <div className="flex justify-between">
                <span>Clearing Custodian:</span>
                <span className="font-semibold text-[#0f172a]">Interactive Brokers LLC</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 bg-[#f4f5f7] text-[#475467] rounded-xl text-[13px] font-semibold hover:bg-[#e8eeff] cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 bg-[#0050cc] text-white rounded-xl text-[14px] font-semibold hover:bg-[#003fa4] cursor-pointer transition-colors shadow-sm"
              >
                {isSubmitting ? 'Configuring Custody...' : 'Generate Form A2 & Submit'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Account Ready */}
        {step === 3 && (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ecfdf3] text-[#059669] flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <h2 className="text-[22px] font-bold text-[#0f172a]">
              Your Paasa Account is Ready!
            </h2>
            <p className="text-[14px] text-[#475467] leading-relaxed max-w-sm mx-auto">
              Your verified profile for <strong className="text-[#0f172a]">{fullName || 'Investor'}</strong> has been linked with Interactive Brokers LLC.
            </p>

            <div className="p-4 bg-[#fafafa] rounded-2xl border border-[#eaecf0] text-left text-[12px] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#475467]">IBKR Account ID</span>
                <span className="font-mono font-bold text-[#0f172a]">U82947190</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#475467]">SIPC Insurance</span>
                <span className="font-semibold text-[#059669]">Active (Up to $500,000)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#475467]">UCITS Tax Shield</span>
                <span className="font-semibold text-[#059669]">Enabled (0% US Estate Tax)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#475467]">USD Cash Yield</span>
                <span className="font-semibold text-[#0050cc]">3.13% Annualized</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-[#000000] text-white rounded-xl text-[14px] font-semibold hover:bg-[#273143] cursor-pointer transition-colors shadow-md"
            >
              Enter Dashboard & Start Investing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
