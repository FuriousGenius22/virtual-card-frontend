import { ChevronDown, X } from "lucide-react";

export default function General() {
  return (
    <div className="space-y-6 max-w-5xl mt-10">
      {/* PROFILE SETTINGS */}
      <div className="rounded-xl border border-blue-100 bg-white px-6 py-5">
        <h2 className="text-xl font-semibold mb-4">Profile settings</h2>

        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center text-blue-600 font-semibold text-xl">
              AN
            </div>

            {/* ERROR BADGE */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border border-red-600 flex items-center justify-center">
                <X size={12} className="text-red-600" />
              </div>
            </div>
          </div>

          {/* EMAIL INFO */}
          <div>
            <p className="font-medium">
              Andromeda0723@outlook.com
            </p>
            <p className="text-sm text-gray-500">
              Registered December 23, 2025
            </p>
          </div>
        </div>
      </div>

      {/* FORMAT SETTINGS */}
      <div className="rounded-xl border border-blue-100 bg-white px-6 py-5">
        <h2 className="text-xl font-semibold mb-6">Format settings</h2>

        <div className="space-y-6 max-w-xl">
          {/* DATE FORMAT */}
          <div className="flex items-center justify-between gap-6">
            <label className="text-sm font-medium text-gray-700">
              Date and time format
            </label>

            <div className="relative w-64">
              <select
                className="w-full appearance-none rounded-lg border border-blue-100 bg-white px-4 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="MM-DD-YYYY"
              >
                <option value="MM-DD-YYYY">
                  MM-DD-YYYY, HH:mm AM/PM
                </option>
                <option value="DD-MM-YYYY">
                  DD-MM-YYYY, HH:mm
                </option>
              </select>

              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* TIME ZONE */}
          <div className="flex items-center justify-between gap-6">
            <label className="text-sm font-medium text-gray-700">
              Time zone
            </label>

            <div className="relative w-64">
              <select
                className="w-full appearance-none rounded-lg border border-blue-100 bg-white px-4 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select time zone
                </option>
                <option value="UTC">UTC</option>
                <option value="GMT">GMT</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
              </select>

              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
