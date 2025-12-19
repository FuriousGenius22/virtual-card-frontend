import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  onClose: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DateRangeCalendar({ onClose }: Props) {
  return (
    <div className="absolute top-12 left-0 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-5 w-[640px]">
      {/* Inputs */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center justify-between px-3 h-10 bg-gray-50 rounded-lg w-full">
          <span className="text-sm">30.11.2025</span>
          <X size={14} className="text-gray-400" />
        </div>
        <span className="text-gray-400">—</span>
        <div className="flex items-center justify-between px-3 h-10 bg-gray-50 rounded-lg w-full">
          <span className="text-sm">17.12.2025</span>
          <X size={14} className="text-gray-400" />
        </div>
      </div>

      {/* Calendars */}
      <div className="grid grid-cols-2 gap-10">
        {["November", "December"].map((month) => (
          <div key={month}>
            <div className="flex items-center justify-between mb-3">
              <ChevronLeft size={18} />
              <span className="font-medium">{month}</span>
              <ChevronRight size={18} />
            </div>

            <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-y-2 text-sm">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`h-8 flex items-center justify-center rounded-full
                    ${i === 29 || i === 16 ? "bg-gray-900 text-white" : ""}
                    ${i > 16 && month === "December" ? "text-gray-300" : ""}
                  `}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start mt-5">
        <button className="bg-black text-white px-6 h-10 rounded-lg text-sm">
          Apply
        </button>
      </div>
    </div>
  );
}
