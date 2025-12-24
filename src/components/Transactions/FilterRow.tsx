import { Search, FileText, ChevronDown, Settings } from "lucide-react";

export default function FilterRow() {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mt-4">
      <div className="flex-1 min-w-[200px] sm:min-w-0 sm:flex-initial relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          placeholder="Search by transactions"
          className="w-full h-9 sm:h-10 pl-9 sm:pl-10 pr-3 rounded-full border border-gray-200 text-xs sm:text-sm"
        />
      </div>

      <button className="h-9 sm:h-10 px-3 sm:px-4 rounded-full border border-gray-200 flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap hover:bg-gray-50 transition">
        <FileText size={14} className="sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">Statement</span>
        <ChevronDown size={14} className="sm:w-4 sm:h-4" />
      </button>

      <button className="h-9 sm:h-10 w-9 sm:w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
        <Settings size={14} className="sm:w-4 sm:h-4" />
      </button>
    </div>
  );
}