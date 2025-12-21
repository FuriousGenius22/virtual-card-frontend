import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function TransferToUser() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const disabled = !email || !amount;

  return (
    <div className="px-8 py-8 w-full max-w-[900px] font-sans text-[#1f2937]">

      {/* Title */}
      <p className="text-[22px] font-bold mb-1">
        Send money to another user
      </p>
      <p className="text-[15px] text-gray-500 mb-8">
        Enter user's email and amount required for transfer
      </p>

      {/* USER EMAIL */}
      <p className="text-[15px] font-medium mb-2">
        User Email
      </p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-4 rounded-xl bg-[#f9fafb] border border-gray-200
                   text-[16px] outline-none mb-8 placeholder:text-gray-400"
      />

      {/* TRANSFER AMOUNT */}
      <p className="text-[15px] font-medium mb-2">
        Transfer amount
      </p>

      <input
        type="number"
        placeholder="Amount, $"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-4 rounded-xl bg-[#f9fafb] border border-gray-200
                   text-[16px] outline-none placeholder:text-gray-400"
      />

      {/* Transfer Fee */}
      <p className="mt-8 text-[15px] font-medium">
        Transfer fee:{" "}
        <span className="text-green-700 font-semibold">
          No commission
        </span>
      </p>

      {/* Warning */}
      <div className="flex items-start mt-2">
        <ExclamationCircleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-1" />
        <p className="text-[14px] text-gray-700 leading-5">
          <span className="text-red-600 font-semibold">Attention!</span>{" "}
          This feature is only available when 2FA is enabled.
          Connect{" "}
          <a href="#" className="text-blue-600 underline">
            Telegram
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 underline">
            Google Authenticator
          </a>
        </p>
      </div>

      {/* BUTTON */}
      <button
        disabled={disabled}
        className={`mt-8 px-6 py-3 rounded-lg text-[15px] font-medium transition-all
          ${
            disabled
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
      >
        Enter 2FA code
      </button>

    </div>
  );
}
