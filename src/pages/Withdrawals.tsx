
import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const Withdrawals = () => {
  const [amount, setAmount] = useState("");
  return (
    <div>
      
      <div className="w-full h-full px-6 py-8 font-sans text-[#111827] max-w-[900px]">
        {/* WHERE TO WITHDRAW */}
        <p className="text-[15px] font-medium mb-2">Where to withdraw</p>

        {/* Dropdown */}
        <div className="border border-gray-300 rounded-xl bg-white px-4 py-3 mb-3 flex items-center justify-between cursor-pointer">
          <span className="text-[16px] text-[#111827] font-medium">
            USDT (TRC20)
          </span>

          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* WALLET FIELD (disabled) */}
        <div className="border border-gray-200 rounded-xl bg-[#F9FAFB] px-4 py-3 mb-6">
          <p className="text-[15px] text-gray-400">Wallet USDT (TRC20)</p>
        </div>

        {/* WITHDRAWAL AMOUNT */}
        <p className="text-[15px] font-medium mb-2">Withdrawal amount</p>

        {/* AMOUNT INPUT BLOCK */}
        <div
          className="border border-red-300 rounded-xl bg-white px-4 py-3 
                      flex items-center justify-between mb-1"
        >
          <input
            type="number"
            placeholder="Amount, $"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full text-[15px] outline-none font-medium placeholder:text-gray-400"
          />

          <button className="text-[14px] text-gray-700 font-semibold ml-4">
            MAX
          </button>
        </div>

        {/* ERROR TEXT */}
        <p className="text-[13px] text-red-600 mb-6">
          Withdrawal is not available
        </p>

        {/* FEE LINE */}
        <p className="text-[15px] font-medium mb-4">
          Withdrawal fee: <span className="font-semibold">5%</span>
        </p>

        {/* ATTENTION WARNING */}
        <div className="flex items-start gap-2 mb-6">
          <ExclamationCircleIcon className="w-5 h-5 text-red-600 mt-[2px]" />

          <p className="text-[14px] leading-5">
            <span className="text-red-600 font-semibold">Attention!</span> This
            feature is only available when 2FA is enabled. Connect{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Telegram
            </span>{" "}
            or{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Google Authenticator
            </span>
          </p>
        </div>

        {/* DISABLED BUTTON */}
        <button
          disabled
          className="rounded-lg bg-gray-200 text-gray-500
                   cursor-not-allowed text-[15px] font-medium px-6 py-3"
        >
          Enter 2FA code
        </button>
      </div>
    </div>
  );
};

export default Withdrawals;
