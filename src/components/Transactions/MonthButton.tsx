import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function MonthButton({ onClick }: Props) {
  return (
    <div className="flex items-center gap-1">
      <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={onClick}
        className="h-9 px-4 flex items-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium"
      >
        <Calendar size={16} />
        Month
      </button>

      <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}