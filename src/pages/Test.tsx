import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const RadioCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-3xl w-72">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-3xl"
      >
        Select Option
        <FiChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2">
          <label className="flex gap-2">
            <input type="radio" name="opt" />
            Option 1
          </label>
          <label className="flex gap-2">
            <input type="radio" name="opt" />
            Option 2
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioCollapse;
