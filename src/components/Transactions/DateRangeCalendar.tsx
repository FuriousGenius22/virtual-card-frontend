import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function SimpleCalendarModal({ onClose }: { onClose?: () => void }) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-lg p-8 z-50 absolute top-full left-0 flex flex-col gap-4">
      <Calendar
        onChange={(value) => setDate(value as Date)}
        value={date}
        className="w-full text-base"
        tileClassName={() => "py-2"}
      />
      <button
        onClick={onClose}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow hover:bg-blue-700 transition mt-2"
      >
        Close
      </button>
    </div>
  );
}
