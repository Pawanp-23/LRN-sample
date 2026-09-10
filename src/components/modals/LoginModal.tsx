import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToGetStarted: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToGetStarted,
}) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login successful! Welcome to your Paasa Portfolio.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-[#eaecf0] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#98a2b3] hover:text-[#0f172a] p-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] text-[#0050cc] flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-[26px]">lock</span>
          </div>
          <h2 className="text-[22px] font-bold text-[#0f172a]">
            Log in to Paasa
          </h2>
          <p className="text-[13px] text-[#475467] mt-1">
            Access your sovereign international wealth portal.
          </p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="flex rounded-xl bg-[#f4f5f7] p-1 border border-[#eaecf0]">
              <button
                type="button"
                onClick={() => setAuthMethod('email')}
                className={`flex-1 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                  authMethod === 'email'
                    ? 'bg-white text-[#0f172a] shadow-sm'
                    : 'text-[#475467]'
                }`}
              >
                Email Address
              </button>
              <button
                type="button"
                onClick={() => setAuthMethod('phone')}
                className={`flex-1 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                  authMethod === 'phone'
                    ? 'bg-white text-[#0f172a] shadow-sm'
                    : 'text-[#475467]'
                }`}
              >
                Mobile Number
              </button>
            </div>

            {authMethod === 'email' ? (
              <div>
                <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
                />
              </div>
            ) : (
              <div>
                <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <span className="px-3 py-2.5 bg-[#f4f5f7] border border-[#d0d5dd] rounded-xl text-[14px] text-[#475467] font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[14px] text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#000000] text-white rounded-xl text-[14px] font-semibold hover:bg-[#273143] cursor-pointer transition-colors shadow-sm"
            >
              Send Secure OTP
            </button>

            <div className="pt-2 text-center text-[12px] text-[#475467]">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSwitchToGetStarted();
                }}
                className="text-[#0050cc] font-semibold hover:underline cursor-pointer"
              >
                Sign up in 3 minutes
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="p-3 bg-[#f0f3ff] rounded-xl text-[12px] text-[#0050cc]">
              OTP sent to {authMethod === 'email' ? email : `+91 ${phone}`}
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                Enter 6-digit Verification Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                className="w-full px-3.5 py-2.5 bg-white border border-[#d0d5dd] rounded-xl text-[18px] text-center tracking-widest font-mono font-bold text-[#0f172a] focus:outline-none focus:border-[#0050cc]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0050cc] text-white rounded-xl text-[14px] font-semibold hover:bg-[#003fa4] cursor-pointer transition-colors shadow-sm"
            >
              Verify & Enter Account
            </button>

            <button
              type="button"
              onClick={() => setOtpSent(false)}
              className="w-full py-2 text-[12px] text-[#475467] hover:text-[#0f172a] cursor-pointer"
            >
              Change login details
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
