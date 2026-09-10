import React from 'react';

interface AudienceAndStepsProps {
  onOpenGetStarted: () => void;
}

export const AudienceAndSteps: React.FC<AudienceAndStepsProps> = ({ onOpenGetStarted }) => {
  return (
    <section className="w-full bg-[#fafafa] py-24 border-t border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Eligibility Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
              Target Audience
            </span>
            <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-4">
              Who is Paasa for?
            </h2>
            <p className="text-[15px] text-[#475467] leading-relaxed mb-4">
              Paasa is available to users in India, USA, UK, Middle East, Singapore, Thailand, and select other regions. We provide India-specific tax documentation.
            </p>
            <div className="p-3 bg-[#f4f5f7] rounded-xl text-[#98a2b3] text-[11px] border border-[#eaecf0]">
              Note: Onboarding for European resident citizens is not supported at this time due to MiFID regulations.
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm border border-[#eaecf0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0050cc] text-[20px]">
                  flag
                </span>
                <h4 className="text-[16px] text-[#0f172a] font-bold">
                  Indian residents
                </h4>
              </div>
              <p className="text-[13px] text-[#475467]">
                PAN and Aadhaar (digital copies). 100% paperless verification completed in minutes.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm border border-[#eaecf0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0050cc] text-[20px]">
                  flight
                </span>
                <h4 className="text-[16px] text-[#0f172a] font-bold">
                  NRIs
                </h4>
              </div>
              <p className="text-[13px] text-[#475467]">
                Government-issued ID and foreign address proof (digital copies). Fund directly via overseas bank accounts.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm border border-[#eaecf0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0050cc] text-[20px]">
                  flight_land
                </span>
                <h4 className="text-[16px] text-[#0f172a] font-bold">
                  Returning NRIs (RNOR)
                </h4>
              </div>
              <p className="text-[13px] text-[#475467]">
                PAN and Indian address proof. Optimize foreign capital gains before RNOR tax exemption lapses.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm border border-[#eaecf0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0050cc] text-[20px]">
                  public
                </span>
                <h4 className="text-[16px] text-[#0f172a] font-bold">
                  Foreign nationals
                </h4>
              </div>
              <p className="text-[13px] text-[#475467]">
                Government-issued ID and foreign address proof. Compliant multi-asset execution across 90+ markets.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Steps */}
        <div className="border-t border-[#eaecf0] pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
              Onboarding
            </span>
            <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2">
              Get started in 3 simple steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#ffffff] rounded-3xl p-8 shadow-sm relative border border-[#eaecf0]">
              <div className="text-[11px] text-[#0050cc] font-bold uppercase tracking-wider mb-2">
                Step 1
              </div>
              <h3 className="font-headline-sm text-[#0f172a] font-bold mb-3">
                Complete KYC
              </h3>
              <p className="text-[13px] text-[#475467] leading-relaxed mb-6">
                PAN & Aadhaar are required. 100% digital verification with instant broker identity approval.
              </p>
              <div className="p-4 bg-[#fafafa] rounded-xl flex items-center justify-between text-[11px] font-semibold text-[#0f172a] border border-[#eaecf0]">
                <span>Identity Verification</span>
                <span className="text-[#059669] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check</span> ~3 Minutes
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#ffffff] rounded-3xl p-8 shadow-sm relative border border-[#eaecf0]">
              <div className="text-[11px] text-[#0050cc] font-bold uppercase tracking-wider mb-2">
                Step 2
              </div>
              <h3 className="font-headline-sm text-[#0f172a] font-bold mb-3">
                Remit funds
              </h3>
              <p className="text-[13px] text-[#475467] leading-relaxed mb-6">
                Under the RBI&apos;s Liberalized Remittance Scheme (LRS). Transfer funds in and out worldwide, as long as the account is in your name.
              </p>
              <div className="p-4 bg-[#fafafa] rounded-xl flex items-center justify-between text-[11px] font-semibold text-[#0f172a] border border-[#eaecf0]">
                <span>LRS Partner Banks</span>
                <span className="text-[#0050cc] font-medium">Auto Form A2 Prep</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#ffffff] rounded-3xl p-8 shadow-sm relative border border-[#eaecf0]">
              <div className="text-[11px] text-[#0050cc] font-bold uppercase tracking-wider mb-2">
                Step 3
              </div>
              <h3 className="font-headline-sm text-[#0f172a] font-bold mb-3">
                Start investing
              </h3>
              <p className="text-[13px] text-[#475467] leading-relaxed mb-6">
                Pick a strategy or invest directly in your choice of 15,000+ equities, UCITS ETFs, or hold uninvested USD at 3.13% yield.
              </p>
              <div className="p-4 bg-[#fafafa] rounded-xl flex items-center justify-between text-[11px] font-semibold text-[#0f172a] border border-[#eaecf0]">
                <span>Execution</span>
                <span className="text-[#059669] font-medium">Immediate Trading</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center px-8 py-3.5 bg-[#000000] text-[#ffffff] text-[14px] font-semibold rounded-xl hover:bg-[#273143] transition-all shadow-sm cursor-pointer group"
            >
              Open account
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <p className="text-[11px] text-[#98a2b3] mt-3">
              White glove onboarding and personalized concierge assistance available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
