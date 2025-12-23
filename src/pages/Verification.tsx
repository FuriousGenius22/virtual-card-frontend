import { ChevronDown, Check, X } from "lucide-react";
import { useState } from "react";

export default function Verification() {
  const [citizenship, setCitizenship] = useState("Samoa");

  return (
    <div className="max-w-6xl mt-10">
      <div className="flex gap-6">
        {/* LEFT PANEL */}
        <div className="flex-1 rounded-xl border border-blue-100 bg-white px-8 py-6">
          <h2 className="text-2xl font-semibold mb-6">Residence</h2>

          <div className="space-y-6 max-w-lg">
            {/* Citizenship */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Citizenship
              </label>

              <div className="relative">
                <select
                  value={citizenship}
                  onChange={(e) => setCitizenship(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-blue-100
                             bg-white px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Samoa</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Germany</option>
                  <option>Japan</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                             text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Continue button */}
            <button
              className="inline-flex items-center justify-center
                         rounded-lg bg-black px-6 py-3
                         text-sm font-medium text-white
                         hover:bg-gray-900 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>

        {/* RIGHT PANEL – PROGRESS */}
        <div className="w-80 rounded-xl border border-blue-100 bg-white px-6 py-6">
          <ul className="space-y-4 text-sm">
            {/* Residence */}
            <li className="flex items-center gap-3 font-medium">
              <StatusIcon type="done" />
              Residence
            </li>

            {/* Personal data */}
            <li className="flex items-center gap-3 text-gray-400">
              <StatusIcon type="disabled" />
              Personal data
            </li>

            {/* Upload documents */}
            <li className="space-y-2">
              <div className="flex items-center gap-3 text-gray-400 font-medium">
                <StatusIcon type="disabled" />
                Upload documents
              </div>

              <ul className="ml-7 space-y-1 text-sm">
                <li className="flex items-center gap-2 text-red-400">
                  <X size={14} />
                  State Passport
                </li>
                <li className="flex items-center gap-2 text-red-400">
                  <X size={14} />
                  Address Confirmation
                </li>
                <li className="flex items-center gap-2 text-red-400">
                  <X size={14} />
                  Selfie with document
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- STATUS ICON ---------- */

function StatusIcon({
  type,
}: {
  type: "done" | "disabled";
}) {
  if (type === "done") {
    return (
      <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
        <Check size={14} className="text-gray-700" />
      </div>
    );
  }

  return (
    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
      <Check size={14} className="text-gray-300" />
    </div>
  );
}
