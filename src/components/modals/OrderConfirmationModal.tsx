import React from 'react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    symbol: string;
    shares: number;
    total: number;
  } | null;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  if (!isOpen || !orderDetails) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#eaecf0] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#98a2b3] hover:text-[#0f172a] p-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="w-14 h-14 rounded-2xl bg-[#ecfdf3] text-[#059669] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-[32px]">check</span>
        </div>

        <h3 className="text-[20px] font-bold text-[#0f172a] text-center">
          Order Routed Successfully
        </h3>
        <p className="text-[13px] text-[#475467] text-center mt-1 mb-6">
          Sent to Interactive Brokers SmartRouting℠ engine.
        </p>

        <div className="bg-[#fafafa] rounded-2xl p-4 border border-[#eaecf0] space-y-2.5 text-[13px] mb-6">
          <div className="flex justify-between">
            <span className="text-[#475467]">Asset</span>
            <span className="font-bold text-[#0f172a]">{orderDetails.symbol}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#475467]">Estimated Shares</span>
            <span className="font-semibold text-[#0f172a]">{orderDetails.shares} Units</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#475467]">Total Order Value</span>
            <span className="font-bold text-[#0050cc]">${orderDetails.total.toLocaleString()} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#475467]">Commission & Brokerage</span>
            <span className="font-bold text-[#059669]">$0.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#475467]">Clearing Custody</span>
            <span className="font-semibold text-[#0f172a]">Interactive Brokers LLC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#475467]">Status</span>
            <span className="font-semibold text-[#059669] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse"></span>
              Executed (Fractional)
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#000000] text-white rounded-xl text-[14px] font-semibold hover:bg-[#273143] cursor-pointer transition-colors shadow-sm"
        >
          Done
        </button>
      </div>
    </div>
  );
};
