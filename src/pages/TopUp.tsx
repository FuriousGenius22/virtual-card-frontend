import { useState } from "react";
import {
  CurrencyDollarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export default function TopUp() {
  const [amount, setAmount] = useState<number | string>("1000");

  return (
    <div className="w-full h-full px-4 py-6 font-sans text-[#111827] scale-[0.87] origin-top-left">

      {/* TITLE */}
      <h1 className="text-[33px] font-semibold mb-4">
        Deposit amount
      </h1>

      {/* INPUT */}
      <div className="border border-gray-300 rounded-lg px-3 py-2 bg-white
                      mb-3 w-full max-w-[480px]">
        <label className="text-[#6B7280] text-[12px] block mb-1">
          Amount, $
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full text-[18px] outline-none font-semibold"
        />
      </div>

      {/* FEES */}
      <p className="text-[13px] text-[#374151] mb-4 leading-6 max-w-[700px]">
        From $0.01 to $50 fee $5 • From $50 to $1,000 fee 1% •{" "}
        <span className="text-green-600 font-semibold">
          Over $1,000 no commission
        </span>
      </p>

      {/* CRYPTO BLOCK */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4 relative max-w-[900px]">

        <span
          className="absolute top-[-9px] right-3 text-[11px]
                     border border-green-600 px-2 py-0.5 rounded-full
                     text-green-600 bg-green-50"
        >
          Recommended • no commission
        </span>

        {/* header */}
        <div className="flex items-start gap-3">
          <div className="bg-blue-600 rounded-full w-10 h-10
                          flex justify-center items-center">
            <CurrencyDollarIcon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <p className="text-[18px] font-semibold leading-5">
              Cryptocurrency
            </p>

            <p className="text-[13px] text-[#4B5563] -mt-0.5 mb-1">
              via{" "}
              <span className="text-blue-600 underline cursor-pointer">
                DV.net
              </span>
            </p>

            <p className="text-[#6B7280] leading-4 text-[12px]">
              Instant crediting — no commission
            </p>
          </div>

          <button
            className="bg-blue-600 text-white rounded-md px-5 py-2 
                       font-semibold text-[14px] hover:bg-blue-700"
          >
            Pay
          </button>
        </div>

        <div className="w-full h-px bg-gray-200 my-3" />

        <div className="flex flex-wrap gap-2">

          {[
            "Bitcoincash",
            "BNBSmartChain",
            "Bitcoin",
            "Ethereum",
            "Polygon",
            "Litecoin",
            "Tron",
          ].map((name) => (
            <button
              key={name}
              className="border border-gray-300 rounded-full py-1 px-3 
                         text-[12px] text-[#374151] bg-white
                         hover:bg-gray-100 transition"
            >
              {name}
            </button>
          ))}

        </div>
      </div>

      {/* MANUAL PAYMENT */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 max-w-[900px]">

        <div className="flex items-start gap-3">
          <div className="bg-blue-600 rounded-full w-10 h-10
                          flex justify-center items-center">
            <GlobeAltIcon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <p className="text-[18px] font-semibold leading-5">
              Manual payments
            </p>

            <p className="text-[13px] text-[#4B5563] -mt-0.5 mb-1">
              Payment via operator
            </p>

            <p className="text-[#6B7280] leading-4 text-[12px]">
              The address for the transfer will be provided by support
            </p>
          </div>

          <button
            className="bg-blue-600 text-white rounded-md px-5 py-2 
                       font-semibold text-[14px] hover:bg-blue-700"
          >
            Pay
          </button>
        </div>

        <div className="w-full h-px bg-gray-200 my-3" />

        <div className="flex flex-wrap gap-2">

          {["Capitalist", "Nihaopay", "Payeer", "Payoneer"].map((name) => (
            <button
              key={name}
              className="bg-green-50 border border-green-600 text-green-700
                         rounded-full py-1 px-3 text-[12px] hover:bg-green-100"
            >
              {name}
            </button>
          ))}

          <button
            className="border border-gray-300 rounded-full py-1 px-3 
                       bg-white text-[12px] text-[#374151] hover:bg-gray-100"
          >
            And others
          </button>
        </div>
      </div>
    </div>
  );
}
