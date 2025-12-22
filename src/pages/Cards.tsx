import { Link } from "react-router-dom";
import bucket from "../assets/bucket.png";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function Cards() {
  return (
    <div className="w-full h-full px-10 pt-10 font-sans text-[#1f2937] relative">

      {/* Page Title */}
      <p className="text-[28px] font-bold">Cards</p>

      {/* Top Right button */}
      <Link
        to="/new-card"
        className="absolute top-10 right-10 flex items-center gap-2 bg-black text-white text-[15px]
                   hover:bg-gray-900 px-4 py-2 rounded-lg transition-all"
      >
        <PlusIcon className="w-4 h-4 text-white" />
        Issue a card
      </Link>

      {/* Center container */}
      <div className="mt-10 w-full flex flex-col items-center">

        {/* Bucket image */}
        <img
          src={bucket}
          alt="bucket"
          className="w-[20vw] opacity-95 select-none pointer-events-none"
        />

        {/* Text */}
        <p className="text-[40px] font-bold text-[#374151] text-center mt-12">
          No cards yet. Buy a new one
        </p>

        {/* Bottom button */}
        <Link
          to="/new-card"
          className="mt-12 bg-black text-white px-10 py-4 rounded-lg text-[18px]
                     hover:bg-gray-900 transition-all"
        >
          Issue a new card
        </Link>

      </div>
    </div>
  );
}
