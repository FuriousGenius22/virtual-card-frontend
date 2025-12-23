import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dashboardImg from "../assets/dashboard.png";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { TbArrowsLeftRight } from "react-icons/tb";

const BALANCE_KEY = "total_account_balance";

export default function Dashboard() {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const stored = Number(localStorage.getItem(BALANCE_KEY) || 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBalance(stored);
  }, []);

  const [dollars, cents] = balance.toFixed(2).split(".");

  return (
    <div className="w-full min-h-screen bg-white px-10 py-8 select-none">
      <h1 className="text-[32px] font-semibold text-[#0D0D0D] mb-8">
        Dashboard
      </h1>

      <div className="flex w-full gap-6 mb-10">
        {/* MAIN ACCOUNT */}
        <div className="w-1/3 h-[175px] rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-7 py-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Link to="/accounts/overview">
              <p className="text-[15px] font-medium text-[#111827]">
                Main account
              </p>
            </Link>
            <IoArrowForward className="text-[18px] text-[#111827]" />
          </div>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-[38px] font-semibold text-black">
              ${dollars}
            </span>
            <span className="text-[18px] font-medium text-[#9CA3AF]">
              .{cents}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/accounts/topUp"
              className="flex items-center gap-2 bg-black text-white text-[14px] px-4 py-[6px] rounded-lg"
            >
              <MdOutlineCreditCard className="text-[18px]" />
              Top-up
            </Link>

            <button className="w-[38px] h-[38px] flex items-center justify-center rounded-lg bg-[#F3F4F6]">
              <TbArrowsLeftRight className="text-[20px] text-[#4B5563]" />
            </button>
          </div>
        </div>

        {/* PERSONAL CARDS */}
        <div className="w-1/3 h-[175px] rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-7 py-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Link to="/cards">
              <p className="text-[15px] font-medium text-[#111827]">
                Personal cards
              </p>
            </Link>
            <IoArrowForward className="text-[18px] text-[#111827]" />
          </div>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-[38px] font-semibold text-black">$0</span>
            <span className="text-[18px] font-medium text-[#9CA3AF]">.00</span>
          </div>

          <Link
            to="/new-card"
            className="flex items-center gap-2 bg-[#F3F4F6] text-[#111827] text-[14px] px-4 py-[6px] rounded-lg"
          >
            <MdOutlineCreditCard className="text-[18px]" />
            Issue a new card
          </Link>
        </div>

        {/* TOTAL */}
        <div className="w-1/3 h-[175px] rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-7 py-6 flex flex-col justify-between">
          <p className="text-[15px] font-medium text-[#111827]">
            Total amount
          </p>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-[38px] font-semibold text-black">
              ${dollars}
            </span>
            <span className="text-[18px] font-medium text-[#9CA3AF]">
              .{cents}
            </span>
          </div>

          <div className="w-full flex items-center justify-between text-[14px]">
            <div className="flex flex-col">
              <span className="text-[#6B7280]">Team accounts</span>
              <span className="font-medium">$0.00</span>
            </div>

            <div className="w-[1px] h-[30px] bg-[#E5E7EB]" />

            <div className="flex flex-col">
              <span className="text-[#6B7280]">Team cards</span>
              <span className="font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL */}
      <div className="w-full h-[300px] rounded-[20px] bg-[#E8F0FF] flex flex-col items-center justify-center text-center">
        <img src={dashboardImg} alt="balance" className="w-[100px] mb-3" />

        <h2 className="text-[22px] font-semibold text-[#111827] mb-1">
          Top-up your account
        </h2>

        <p className="text-[15px] text-[#6B7280] mb-6">
          To start using the service, you need to top-up your account
        </p>

        <Link
          to="/accounts/topUp"
          className="flex items-center gap-2 bg-black text-white text-[14px] px-4 py-[6px] rounded-lg"
        >
          <MdOutlineCreditCard className="text-[18px]" />
          Top-up
        </Link>
      </div>
    </div>
  );
}
