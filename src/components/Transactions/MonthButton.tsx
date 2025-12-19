import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function MonthButton({ onClick }: Props) {
  return (
    <div className="flex items-center ">
      <button className="h-[4vh] w-[5vh] flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 bg-white">
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={onClick}
        className="h-[4vh] w-[40vh] px-4 flex items-center gap-2 rounded-[3px] border border-gray-200 bg-white "
      >
        <Calendar size={16} />
        Month
      </button>

      <button className="h-[4vh] w-[5vh] flex items-center justify-center rounded-lg border border-gray-200 bg-white">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
