import { Search, FileText, ChevronDown, Settings } from "lucide-react";

export default function FilterRow() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button className="h-10 px-4 rounded-full border border-gray-200 text-sm flex items-center gap-2">
        What to show
        <ChevronDown size={16} />
      </button>

      <button className="h-10 px-4 rounded-full border border-gray-200 text-sm text-gray-400">
        Cards
      </button>

      <div className="flex-1 relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          placeholder="Search by transactions"
          className="w-full h-10 pl-10 pr-3 rounded-full border border-gray-200 text-sm"
        />
      </div>

      <button className="h-10 px-4 rounded-full border border-gray-200 flex items-center gap-2 text-sm">
        <FileText size={16} />
        Statement
        <ChevronDown size={16} />
      </button>

      <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center">
        <Settings size={16} />
      </button>
    </div>
  );
}
