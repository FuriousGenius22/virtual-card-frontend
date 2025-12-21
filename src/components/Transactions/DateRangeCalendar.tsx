import { useState } from "react";
import { addMonths, format } from "date-fns";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function CalendarDropdown() {
  const [month, setMonth] = useState(new Date());

  const next = () => setMonth(addMonths(month, 1));
  const prev = () => setMonth(addMonths(month, -1));

  return (
    <div className="mt-4 bg-white rounded-2xl shadow-xl border border-gray-200 w-full px-6 py-6">

      {/* PRESET BUTTONS */}
      <div className="flex gap-3">
        {["Today", "Week", "Month", "Quarter", "Year", "All time"].map(v => (
          <button
            key={v}
            className="px-4 py-1 text-sm rounded-lg border bg-white hover:bg-gray-50"
          >
            {v}
          </button>
        ))}
      </div>

      {/* DATE INPUTS */}
      <div className="flex gap-6 mt-6">
        <div className="flex items-center border rounded-lg px-3 py-2 w-[250px] justify-between">
          <input className="outline-none text-sm" defaultValue="31.12.2021" />
          <FiX className="text-gray-400" />
        </div>

        <span className="text-gray-400 font-medium">—</span>

        <div className="flex items-center border rounded-lg px-3 py-2 w-[250px] justify-between">
          <input className="outline-none text-sm" defaultValue="21.12.2025" />
          <FiX className="text-gray-400" />
        </div>
      </div>

      {/* TWO MONTH BLOCK */}
      <div className="flex justify-between mt-8">

        {/* MONTH ONE */}
        <div className="w-1/2">

          <div className="flex items-center justify-between mb-2">
            <FiChevronLeft onClick={prev} className="cursor-pointer" />
            <h3 className="font-medium">
              {format(month, "MMMM")}
            </h3>
            <FiChevronRight onClick={next} className="opacity-0" />
          </div>

          <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
            {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <span key={d}>{d}</span>)}
          </div>

          <div className="h-[210px] bg-gray-50 rounded-xl" />

        </div>

        {/* MONTH TWO */}
        <div className="w-1/2 pl-6 border-l">
          <div className="flex items-center justify-between mb-2">
            <FiChevronLeft className="opacity-0" />
            <h3 className="font-medium">
              {format(addMonths(month, 1), "MMMM")}
            </h3>
            <FiChevronRight onClick={next} className="cursor-pointer" />
          </div>

          <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
            {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <span key={d}>{d}</span>)}
          </div>

          <div className="h-[210px] bg-[#e3edff] rounded-xl" />
        </div>

      </div>

      <div className="flex justify-start mt-6">
        <button className="bg-black text-white px-6 py-2 rounded-xl text-sm">
          Apply
        </button>
      </div>

    </div>
  );
}
