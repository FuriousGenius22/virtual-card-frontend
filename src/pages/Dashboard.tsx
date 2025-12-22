// import { Button, Image } from '@nextui-org/react';
// import type { FC } from 'react';
// import React from 'react';
// import PageMeta from '../components/common/PageMeta';
// import AccountCard from '../components/common/AccountCard';
// import { Link } from 'react-router-dom';
// import { SquareChevronRight, SquarePlus, ArrowRightLeft } from 'lucide-react'

// type Props = object

// const Dashboard: FC<Props> = () => {

//   return (
//     <>
//       <div className='"w-full px-4 pt-4 sm:px-6 lg:px-8'>
//         <PageMeta
//           title='This is dashboard page'
//           description='Welcome to our page!'
//         />

//         <h1 className='mb-6 text-2xl font-semibold sm:text-3xl'>Dashboard</h1>
//         <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
//           <AccountCard
//             width="120px"
//             Link_comp={
//               <Link to="/accounts/overview"><h1 className='text-2xl font-semibold hover:underline'>Main account{">"}</h1></Link>
//             }
//             Main_str='$0.00'
//             Button_comp={
//               <div className='flex flex-row justify-start gap-5'>
//                 <Button as={Link} to="/accounts/topUp" className='flex flex-col w-full gap-3 p-2 px-4 text-white bg-black border-gray-900 rounded-lg sm:flex-row sm:w-auto'>
//                   <SquareChevronRight />
//                   Top-up
//                 </Button>
//                 <Button as={Link} to="/accounts/accountsTransfer" className='bg-gray-300' ><ArrowRightLeft /></Button>
//               </div>
//             }
//           />

//           <AccountCard width="50px"
//             Link_comp={
//               <Link to="/cards?type=personal,buyer&status=1"><h1 className='text-2xl font-semibold hover:underline'>Personal Cards{">"}</h1></Link>
//             }
//             Main_str='$0.00'
//             Button_comp={
//               <Link to="/new-card">
//                 <button className='flex flex-row gap-3 p-2 border-gray-900 rounded-lg w-50 bg-gray-300/20 hover:bg-gray-300'>
//                   <SquarePlus />
//                   Issue a new card
//                 </button>
//               </Link>
//             }
//           />

//           <AccountCard width="50px"
//             Link_comp={
//               <h1 className='text-2xl font-semibold'>Total amount</h1>
//             }
//             Main_str='$0.00'
//             Button_comp={
//               <div className='flex flex-row justify-between'>
//                 <div className='flex flex-col justify-start'>
//                   <Link to="/teams/welcome" className='text-sm hover:underline'>Teams accounts</Link>
//                   <p><span className='text-2xl font-semibold'>$0</span>.00</p>
//                 </div>
//                 <div className='line'></div>
//                 <div className='flex flex-col justify-start'>
//                   <Link to="/teams/welcome" className='text-sm hover:underline'>Team card</Link>
//                   <p><span className='text-2xl font-semibold'>$0</span>.00</p>
//                 </div>
//               </div>
//             }
//           />
//         </div>
//         <div className='mt-[24px] bg-[#e3edfc] w-full px-6 py-10 rounded-3xl flex flex-col justify-center items-center space-y-2'>
//           <Image
//             src="./images/Dashboard2.png"
//             fallbackSrc="/default-avatar.jpg"
//             alt="User avatar"
//             className="max-w-[200px] w-full h-auto"
//           />
//           <h1 className='text-xl font-semibold sm:text-2xl'>Top-up your account</h1>
//           <p className="text-sm sm:text-base">To start using the service, you need to top-up your account</p>
//           <Button as={Link} to="/accounts/topUp" className='flex flex-row w-full p-2 text-white bg-black border-gray-900 rounded-lg sm:w-auto'>
//             <SquareChevronRight />
//             Top-up
//           </Button>
//         </div>
//       </div>
//     </>
//   )

// };

// export default Dashboard;

import { Link } from "react-router-dom";
import dashboardImg from "../assets/dashboard.png";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { TbArrowsLeftRight } from "react-icons/tb";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-white px-10 py-8 select-none">
      {/* ================= TITLE ================= */}
      <h1 className="text-[32px] font-semibold text-[#0D0D0D] mb-8">
        Dashboard
      </h1>

      {/* ================= TOP CARDS ================= */}
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
            <span className="text-[38px] font-semibold text-[#000000]">$0</span>
            <span className="text-[18px] font-medium text-[#9CA3AF]">.00</span>
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
            <span className="text-[38px] font-semibold text-[#000000]">$0</span>
            <span className="text-[18px] font-medium text-[#9CA3AF]">.00</span>
          </div>

          <Link
            to="/cards/new-card"
            className="flex items-center gap-2 bg-[#F3F4F6] text-[#111827] text-[14px] px-4 py-[6px] rounded-lg"
          >
            <MdOutlineCreditCard className="text-[18px]" />
            Issue a new card
          </Link>
        </div>

        {/* TOTAL */}
        <div className="w-1/3 h-[175px] rounded-[16px] border border-[#E6E8EC] bg-[#F9FAFB] px-7 py-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-medium text-[#111827]">
              Total amount
            </p>
          </div>

          <div className="flex items-end gap-[2px] mt-[-6px]">
            <span className="text-[38px] font-semibold text-[#000000]">$0</span>
            <span className="text-[18px] font-medium text-[#9CA3AF]">.00</span>
          </div>

          <div className="w-full flex items-center justify-between text-[14px]">
            <div className="flex flex-col">
              <span className="text-[#6B7280]">Team accounts</span>
              <span className="text-[#000000] font-medium">$0.00</span>
            </div>

            <div className="w-[1px] h-[30px] bg-[#E5E7EB]" />

            <div className="flex flex-col">
              <span className="text-[#6B7280]">Team cards</span>
              <span className="text-[#000000] font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM PANEL ================= */}
      <div
        className="
        w-full h-[300px]
        rounded-[20px]
        bg-[#E8F0FF]
        flex flex-col items-center justify-center
        text-center
      "
      >
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
