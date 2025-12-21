import { useState } from "react";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

export default function AccountsTransfer() {
  const accounts = [
    { id: 1, name: "Main account", balance: 1200 },
    { id: 2, name: "Trading account", balance: 500 },
    { id: 3, name: "Investing wallet", balance: 2000 },
  ];

  const [from, setFrom] = useState(accounts[0]);
  const [to, setTo] = useState<typeof accounts[0] | null>(null);
  const [amount, setAmount] = useState("");

  const disabled =
    !to || !amount || Number(amount) <= 0 || Number(amount) > from.balance;

  return (
    <div className="px-8 py-6 w-full max-w-[900px] font-sans text-[#111827]">

      {/* Title */}
      <p className="text-[20px] font-bold mb-6">
        Between your accounts and cards
      </p>

      {/* From */}
      <p className="text-[15px] font-medium mb-1">From</p>

      <div className="border border-gray-200 rounded-xl bg-[#F9FAFB] px-4 py-3 mb-6 cursor-pointer">
        <select
          value={from.id}
          onChange={(e) => {
            const selected = accounts.find(
              (acc) => acc.id === Number(e.target.value)
            );
            if (selected) setFrom(selected);
          }}
          className="w-full bg-transparent outline-none text-[16px] font-medium"
        >
          {accounts.map((acc) => (
            <option key={acc.id} value={acc.id}>
              {acc.name}
            </option>
          ))}
        </select>

        <p className="text-[14px] text-gray-600">
          ${from.balance}
        </p>
      </div>

      {/* Swap */}
      <div className="flex justify-center items-center mb-6">
        <ArrowsUpDownIcon className="w-6 h-6 text-gray-300" />
      </div>

      {/* To */}
      <p className="text-[15px] font-medium mb-1">To</p>

      <div className="border border-gray-200 rounded-xl bg-[#F9FAFB] px-4 py-3 mb-6 cursor-pointer">
        <select
          value={to?.id ?? ""}
          onChange={(e) => {
            const selected = accounts.find(
              (acc) => acc.id === Number(e.target.value)
            );
            if (selected) setTo(selected);
          }}
          className="w-full bg-transparent outline-none text-[16px] font-medium text-gray-800"
        >
          <option value="">Choose an account</option>
          {accounts
            .filter((acc) => acc.id !== from.id)
            .map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
        </select>
      </div>

      {/* Sum */}
      <p className="text-[15px] font-medium mb-1">Sum</p>

      <div className="border border-gray-300 rounded-xl bg-[#F9FAFB] px-4 py-3 flex justify-between items-center mb-4">
        <input
          type="number"
          placeholder="Amount, $"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-transparent w-full outline-none font-medium placeholder:text-gray-400"
        />

        <button
          onClick={() => setAmount(String(from.balance))}
          className="text-[14px] font-semibold text-gray-700"
        >
          MAX
        </button>
      </div>

      {/* Fee */}
      <p className="text-[14px] mb-6">
        Transfer fee:{" "}
        <span className="text-green-700 font-semibold">No commission</span>
      </p>

      {/* Button */}
      <button
        disabled={disabled}
        className={`px-6 py-3 rounded-lg text-[15px] font-medium transition-all
        ${
          disabled
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
        }`}
      >
        Transfer ${amount || 0}
      </button>
    </div>
  );
}
