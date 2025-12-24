import { Link } from "react-router-dom";
import bucket from "../assets/bucket.png";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function Cards() {
  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 font-sans text-[#1f2937] relative">

      {/* Page Title and Button Row */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
        <p className="text-xl sm:text-2xl md:text-[28px] font-bold">Cards</p>

        {/* Top Right button - visible on larger screens */}
        <Link
          to="/new-card"
          className="hidden sm:flex items-center gap-2 bg-black text-white text-sm md:text-[15px]
                     hover:bg-gray-900 px-3 md:px-4 py-2 rounded-lg transition-all"
        >
          <PlusIcon className="w-4 h-4 text-white" />
          Issue a card
        </Link>
      </div>

      {/* Center container */}
      <div className="mt-6 sm:mt-8 md:mt-10 w-full flex flex-col items-center">

        {/* Bucket image */}
        <img
          src={bucket}
          alt="bucket"
          className="w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] max-w-[200px] sm:max-w-none opacity-95 select-none pointer-events-none"
        />

        {/* Text */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#374151] text-center mt-6 sm:mt-8 md:mt-12 px-4">
          No cards yet. Buy a new one
        </p>

        {/* Bottom button - visible on all screens */}
        <Link
          to="/new-card"
          className="mt-6 sm:mt-8 md:mt-12 bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-base sm:text-lg md:text-[18px]
                     hover:bg-gray-900 transition-all w-full sm:w-auto text-center"
        >
          Issue a new card
        </Link>

      </div>
    </div>
  );
}
