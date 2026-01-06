import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dashboardImg from "../assets/dashboard.png";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { TbArrowsLeftRight } from "react-icons/tb";

export default function Dashboard() {
  const [balance, setBalance] = useState<number>(0);
  const [cardCharge, setCardCharge] = useState<number>(0);
 
  useEffect(() => {
    // TODO: Fetch balance and cardCharge from backend
    setTimeout(() => {
      setBalance(0); // Placeholder
      setCardCharge(0); // Placeholder
    }, 0);
  }, []);
  const [dollars, cents] = balance.toFixed(2).split(".");
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 select-none">
      <h1 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#0D0D0D] mb-4 sm:mb-6 md:mb-8">
        Dashboard
      </h1>

      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
        {/* MAIN ACCOUNT */}
        <div className="w-full sm:w-1/3 h-auto sm:h-[175px] min-h-[160px] sm:min-h-0 rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Link to="/accounts/overview">
              <p className="text-sm sm:text-[15px] font-medium text-[#111827]">
                Main account
              </p>
            </Link>
            <IoArrowForward className="text-base sm:text-[18px] text-[#111827] flex-shrink-0" />
          </div>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-3xl sm:text-4xl md:text-[38px] font-semibold text-black">
              ${dollars}
            </span>
            <span className="text-base sm:text-lg md:text-[18px] font-medium text-[#9CA3AF]">
              .{cents}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/accounts/topUp"
              className="flex items-center gap-1.5 sm:gap-2 bg-black text-white text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 py-1.5 sm:py-[6px] rounded-lg"
            >
              <MdOutlineCreditCard className="text-base sm:text-lg md:text-[18px]" />
              <span className="whitespace-nowrap">Top-up</span>
            </Link>

            <button className="w-9 h-9 sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition">
              <TbArrowsLeftRight className="text-lg sm:text-xl md:text-[20px] text-[#4B5563]" />
            </button>
          </div>
        </div>

        {/* PERSONAL CARDS */}
        <div className="w-full sm:w-1/3 h-auto sm:h-[175px] min-h-[160px] sm:min-h-0 rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Link to="/cards">
              <p className="text-sm sm:text-[15px] font-medium text-[#111827]">
                Personal cards
              </p>
            </Link>
            <IoArrowForward className="text-base sm:text-[18px] text-[#111827] flex-shrink-0" />
          </div>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-3xl sm:text-4xl md:text-[38px] font-semibold text-black">
              ${cardCharge.toFixed(2).split(".")[0]}
            </span>
            <span className="text-base sm:text-lg md:text-[18px] font-medium text-[#9CA3AF]">
              .{cardCharge.toFixed(2).split(".")[1]}
            </span>
          </div>

          <Link
            to="/new-card"
            className="flex items-center gap-1.5 sm:gap-2 bg-[#F3F4F6] text-[#111827] text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 py-1.5 sm:py-[6px] rounded-lg hover:bg-[#E5E7EB] transition w-fit"
          >
            <MdOutlineCreditCard className="text-base sm:text-lg md:text-[18px]" />
            <span className="whitespace-nowrap">Issue a new card</span>
          </Link>
        </div>

        {/* TOTAL */}
        <div className="w-full sm:w-1/3 h-auto sm:h-[175px] min-h-[160px] sm:min-h-0 rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 flex flex-col justify-between">
          <p className="text-sm sm:text-[15px] font-medium text-[#111827]">
            Total amount
          </p>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-3xl sm:text-4xl md:text-[38px] font-semibold text-black">
              ${dollars}
            </span>
            <span className="text-base sm:text-lg md:text-[18px] font-medium text-[#9CA3AF]">
              .{cents}
            </span>
          </div>

          <div className="w-full flex items-center justify-between text-xs sm:text-sm md:text-[14px] gap-2">
            <div className="flex flex-col">
              <span className="text-[#6B7280]">Team accounts</span>
              <span className="font-medium">$0.00</span>
            </div>

            <div className="w-[1px] h-6 sm:h-[30px] bg-[#E5E7EB]" />

            <div className="flex flex-col">
              <span className="text-[#6B7280]">Team cards</span>
              <span className="font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL */}
      <div className="w-full h-auto sm:h-[250px] md:h-[300px] min-h-[200px] sm:min-h-0 rounded-xl sm:rounded-[20px] bg-[#E8F0FF] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 sm:py-8 md:py-0">
        <img src={dashboardImg} alt="balance" className="w-16 sm:w-20 md:w-[100px] mb-2 sm:mb-3" />

        <h2 className="text-lg sm:text-xl md:text-[22px] font-semibold text-[#111827] mb-1">
          Top-up your account
        </h2>

        <p className="text-sm sm:text-base md:text-[15px] text-[#6B7280] mb-4 sm:mb-6 max-w-md">
          To start using the service, you need to top-up your account
        </p>

        <Link
          to="/accounts/topUp"
          className="flex items-center gap-2 bg-black text-white text-xs sm:text-sm md:text-[14px] px-4 py-2 sm:py-[6px] rounded-lg hover:bg-gray-900 transition"
        >
          <MdOutlineCreditCard className="text-base sm:text-lg md:text-[18px]" />
          <span className="whitespace-nowrap">Top-up</span>
        </Link>
      </div>
    </div>
  );
}
