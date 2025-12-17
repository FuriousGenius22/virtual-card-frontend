import { useState } from "react"
import { format, addMonths, subMonths } from "date-fns"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import type { DateRange } from "./types"

const initialRange: DateRange = {
  from: new Date(2022, 0, 12),
  to: new Date(2025, 11, 31),
}

export default function DateRangePicker({
  onChange,
}: {
  onChange?: (range: DateRange) => void
}) {
  const [range, setRange] = useState<DateRange>(initialRange)
  const [open, setOpen] = useState(false)

  const updateRange = (newRange: DateRange) => {
    setRange(newRange)
    onChange?.(newRange)
  }

  return (
    <div className="relative inline-flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 shadow-sm rounded-xl">

      <button
        className="flex items-center justify-center w-4 h-4 text-gray-500 transition rounded-lg hover:bg-gray-100 hover:text-gray-900"
        onClick={() =>
          updateRange({
            from: subMonths(range.from, 1),
            to: subMonths(range.to, 1),
          })
        }
      >
        ‹
      </button>

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        <span className="text-gray-500">📅</span>
        <span className="whitespace-nowrap">
          {format(range.from, "dd.MM.yyyy")}
          <span className="mx-1 text-gray-400">—</span>
          {format(range.to, "dd.MM.yyyy")}
        </span>
      </button>

      <button
        className="flex items-center justify-center w-8 h-8 text-gray-500 transition rounded-lg hover:bg-gray-100 hover:text-gray-900"
        onClick={() =>
          updateRange({
            from: addMonths(range.from, 1),
            to: addMonths(range.to, 1),
          })
        }
      >
        ›
      </button>

      {open && (
        <div className="absolute left-0 z-50 p-4 mt-3 bg-white border border-gray-200 shadow-xl top-full rounded-2xl">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={(selected) => {
              if (selected?.from && selected?.to) {
                updateRange({
                  from: selected.from,
                  to: selected.to,
                })
                setOpen(false)
              }
            }}
            className="text-sm"
          />
          <DayPicker
            mode="range"
            selected={range}
            onSelect={(selected) => {
              if (selected?.from && selected?.to) {
                updateRange({
                  from: selected.from,
                  to: selected.to,
                })
                setOpen(false)
              }
            }}
            className="text-sm"
          />
        </div>
      )}
    </div>
  )
}
