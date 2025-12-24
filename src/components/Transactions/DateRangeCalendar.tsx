import { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import type { Range } from "react-date-range";
import { FiX } from "react-icons/fi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface CalendarDropdownProps {
  onClose?: () => void;
}

export default function CalendarDropdown({ onClose }: CalendarDropdownProps) {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const nextMonth = addMonths(currentMonth, 1);

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection.startDate && selection.endDate) {
      setDateRange({
        startDate: selection.startDate,
        endDate: selection.endDate,
        key: "selection",
      });
    }
  };

  const handleApply = () => {
    // Handle apply logic here
    if (onClose) {
      onClose();
    }
  };

  const handlePresetClick = (preset: string) => {
    const today = new Date();
    let startDate = new Date();
    let endDate = new Date();

    switch (preset) {
      case "Today":
        startDate = today;
        endDate = today;
        break;
      case "Week":
        startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        endDate = today;
        break;
      case "Month":
        startDate = subMonths(today, 1);
        endDate = today;
        break;
      case "Quarter":
        startDate = subMonths(today, 3);
        endDate = today;
        break;
      case "Year":
        startDate = subMonths(today, 12);
        endDate = today;
        break;
      case "All time":
        startDate = new Date(2020, 0, 1);
        endDate = today;
        break;
    }

    setDateRange({
      startDate,
      endDate,
      key: "selection",
    });
  };

  return (
    <div className="mt-4 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 w-full max-w-5xl px-4 sm:px-6 py-4 sm:py-6 z-50 absolute top-full left-0">
      {/* PRESET BUTTONS */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
        {["Today", "Week", "Month", "Quarter", "Year", "All time"].map(v => (
          <button
            key={v}
            onClick={() => handlePresetClick(v)}
            className="px-3 sm:px-4 py-1.5 sm:py-1 text-xs sm:text-sm rounded-lg border bg-white hover:bg-gray-50 transition whitespace-nowrap"
          >
            {v}
          </button>
        ))}
      </div>

      {/* DATE INPUTS */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2 flex-1 sm:flex-none sm:w-[200px] lg:w-[250px] justify-between">
          <input 
            className="outline-none text-sm flex-1" 
            value={dateRange.startDate ? format(dateRange.startDate, "dd.MM.yyyy") : ""}
            placeholder="Start date"
            readOnly
          />
          {dateRange.startDate && (
            <button 
              onClick={() => setDateRange({ startDate: new Date(), endDate: new Date(), key: "selection" })} 
              className="ml-2"
            >
              <FiX className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        <span className="text-gray-400 font-medium hidden sm:inline">—</span>

        <div className="flex items-center border rounded-lg px-3 py-2 flex-1 sm:flex-none sm:w-[200px] lg:w-[250px] justify-between">
          <input 
            className="outline-none text-sm flex-1" 
            value={dateRange.endDate ? format(dateRange.endDate, "dd.MM.yyyy") : ""}
            placeholder="End date"
            readOnly
          />
          {dateRange.endDate && (
            <button 
              onClick={() => setDateRange({ startDate: new Date(), endDate: new Date(), key: "selection" })} 
              className="ml-2"
            >
              <FiX className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* TWO CALENDARS - DateRangePicker */}
      <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
        <div className="w-full lg:w-auto">
          <DateRangePicker
            ranges={[dateRange]}
            onChange={handleSelect}
            months={2}
            direction="horizontal"
            showMonthAndYearPickers={true}
            showDateDisplay={false}
            moveRangeOnFirstSelection={false}
            rangeColors={["#2563eb"]}
            className="date-range-picker"
          />
        </div>
      </div>

      {/* APPLY BUTTON */}
      <div className="flex justify-start mt-4 sm:mt-6">
        <button 
          onClick={handleApply}
          className="bg-black text-white px-6 py-2 rounded-xl text-sm hover:bg-gray-900 transition"
        >
          Apply
        </button>
      </div>

      <style>{`
        .date-range-picker .rdrDateRangePickerWrapper {
          width: 100%;
        }
        .date-range-picker .rdrCalendarWrapper {
          width: 100%;
        }
        .date-range-picker .rdrMonth {
          width: 100%;
        }
        .date-range-picker .rdrMonthAndYearWrapper {
          padding: 0.5rem;
        }
        .date-range-picker .rdrDay {
          height: 2.5rem;
        }
        .date-range-picker .rdrDayNumber {
          font-size: 0.875rem;
        }
        .date-range-picker .rdrWeekDay {
          font-size: 0.75rem;
          padding: 0.5rem 0;
        }
        .date-range-picker .rdrSelected,
        .date-range-picker .rdrInRange,
        .date-range-picker .rdrStartEdge,
        .date-range-picker .rdrEndEdge {
          background-color: #2563eb !important;
          color: white !important;
        }
        .date-range-picker .rdrInRange {
          background-color: #dbeafe !important;
          color: #1e40af !important;
        }
        .date-range-picker .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span {
          color: #1e40af !important;
        }
        .date-range-picker .rdrDayToday .rdrDayNumber span:after {
          background-color: #2563eb !important;
        }
      `}</style>
    </div>
  );
}
