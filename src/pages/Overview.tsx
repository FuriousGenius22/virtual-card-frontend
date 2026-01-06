import { Link } from "react-router-dom";
import {
  BanknotesIcon,
  CreditCardIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Overview = () => {
  const [balance, setBalance] = useState<number>(0);
  const [cardCharge, setCardCharge] = useState<number>(0);
  useEffect(() => {
    // TODO: Fetch balance and cardCharge from backend
    setBalance(0); // Placeholder
    setCardCharge(0); // Placeholder
  }, []);
  const [dollars, cents] = balance.toFixed(2).split(".");
  const [cardDollars, cardCents] = cardCharge.toFixed(2).split(".");

  return (
    <div className="w-full h-full px-6 py-8 font-sans">
      {/* PAGE TITLE */}
      <h1 className="text-[28px] font-semibold mb-6 text-[#111827]">
        List of accounts
      </h1>
      {/* MAIN GRID CONTAINER */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-6">
        {/* TOP TWO BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* LEFT MAIN ACCOUNT */}
          <Link
            to="/history/view"
            className="flex-1 bg-[#F9FAFB] hover:bg-[#F3F4F6] cursor-pointer p-6 rounded-xl border border-gray-200 transition"
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#2563EB]">
                <BanknotesIcon className="w-9 h-9 text-white" />
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <p className="text-[20px] font-semibold text-[#1F2937]">
                    Main account
                  </p>
                </div>
                <p className="text-[28px] font-semibold text-[#111827]">
                  ${dollars}
                  <span className="text-[16px] font-normal">.{cents}</span>
                </p>
              </div>
            </div>
          </Link>
          {/* RIGHT PERSONAL CARDS */}
          <Link
            to="/cards"
            className="flex-1 bg-[#F9FAFB] hover:bg-[#F3F4F6] cursor-pointer p-6 rounded-xl border border-gray-200 transition"
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#2563EB]">
                <CreditCardIcon className="w-9 h-9 text-white" />
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <p className="text-[20px] font-semibold text-[#1F2937]">
                    Personal Cards
                  </p>
                  <p className="text-[14px] text-[#6B7280] mt-0.5">Cards: 0</p>
                </div>
                <p className="text-[28px] font-semibold text-[#111827]">
                  ${cardDollars}
                  <span className="text-[16px] font-normal">.{cardCents}</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* BOTTOM BAR */}
        <Link
          to="/decline-board"
          className="block w-full mt-6 border border-gray-200 rounded-xl hover:bg-[#F9FAFB] transition px-6 py-4 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* DECLINE RATE */}
            <div className="flex items-center gap-2 justify-start">
              <p className="text-[20px] font-medium text-[#1F2937]">
                Decline Rate
              </p>
              <InformationCircleIcon className="w-4 h-4 text-[#2563EB]" />
              <p className="text-[28px] font-semibold text-[#059669] ml-3">0%</p>
            </div>
            {/* STATS */}
            <div className="flex flex-wrap md:flex-nowrap items-center text-[14px] text-[#6B7280] gap-6 md:gap-10">
              <span>
                Total transactions:
                <span className="ml-1 font-semibold text-[#1F2937]">0</span>
              </span>
              <span>
                Successful transactions:
                <span className="ml-1 font-semibold text-[#1F2937]">0</span>
              </span>
              <span>
                Declined transactions:
                <span className="ml-1 font-semibold text-[#1F2937]">0</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Overview;
