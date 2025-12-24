import { useEffect, useRef, useState } from "react";
import MonthButton from "../components/Transactions/MonthButton";
import DateRangeCalendar from "../components/Transactions/DateRangeCalendar";
import FilterTabs from "../components/Transactions/FilterTabs";
import FilterRow from "../components/Transactions/FilterRow";
import EmptyState from "../components/Transactions/EmptyState";

export default function Transaction() {
  const [open, setOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* ===== FILTERS ===== */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 relative">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div ref={calendarRef} className="relative">
            <MonthButton onClick={() => setOpen(!open)} />
            {open && <DateRangeCalendar onClose={() => setOpen(false)} />}
          </div>

          <FilterTabs />
        </div>

        <FilterRow />
      </div>

      {/* ===== TABLE ===== */}
      <div className="mt-4 sm:mt-6 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="hidden sm:flex justify-between text-sm text-gray-500 mb-4 px-4">
          <span>Date</span>
          <span>Transaction type</span>
          <span>Amount</span>
        </div>

        <EmptyState />
      </div>
    </div>
  );
}