import { type FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import nothingFound from "../assets/nothingfound.webm";

/* Heroicon SVGs */
const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M15 19l-7-7 7-7"></path>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7"></path>
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M19 9l-7 7-7-7"></path>
  </svg>
);

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const DocumentIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
    <path d="M8 2v4h8V2"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4"></path>
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636"></path>
  </svg>
);

const Transaction: FC = () => {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);

  return (
    <div className="w-full px-8 pt-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-semibold">Transaction history</h1>

        <div className="flex gap-8">
          {["Transaction history", "Create Statement", "Ready Statements"].map(
            (t, i) => (
              <Link key={t} to="#">
                <button
                  onClick={() => setActiveTab((i + 1) as 1 | 2 | 3)}
                  className={`pb-3 text-lg font-medium transition ${
                    activeTab === i + 1
                      ? "text-black border-b-2 border-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  {t}
                </button>
              </Link>
            )
          )}
        </div>
      </div>

      <hr className="mt-4 border-gray-200" />

      {/* ================= FILTER BAR ================= */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F9FBFB] p-4">
        {/* Top row */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm">
            <CalendarIcon />
            All time
          </button>

          <button className="rounded-lg border bg-white px-2 py-2">
            <ChevronLeftIcon />
          </button>

          <button className="rounded-lg border bg-white px-2 py-2">
            <ChevronRightIcon />
          </button>

          <div className="mx-2 h-6 w-px bg-gray-200" />

          {["All transactions", "Top-up", "Declines", "Holds"].map(item => (
            <button
              key={item}
              className={`rounded-lg px-4 py-2 text-sm ${
                item === "All transactions"
                  ? "bg-gray-100 font-medium"
                  : "border bg-white text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}

          <div className="ml-auto">
            <button className="rounded-lg border bg-white p-2">
              <SettingsIcon />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-4 flex items-center gap-3">
          <button className="rounded-full border bg-white px-4 py-2 text-sm">
            What to show
            <ChevronDownIcon />
          </button>

          <button className="rounded-full border bg-gray-50 px-4 py-2 text-sm text-gray-400">
            Cards
            <ChevronDownIcon />
          </button>

          <div className="flex flex-1 items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm text-gray-500">
            <SearchIcon />
            <input
              placeholder="Search by transactions"
              className="w-full outline-none"
            />
          </div>

          <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium">
            <DocumentIcon />
            Statement
            <ChevronDownIcon />
          </button>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F9FBFB] p-6">
        <div className="grid grid-cols-3 text-sm font-medium text-gray-500">
          <span>Date</span>
          <span>Transaction type</span>
          <span className="text-right">Amount</span>
        </div>

        {/* Empty state */}
        <div className="mt-8 flex flex-col items-center justify-center rounded-xl border bg-white py-20">
          <video
            src={nothingFound}
            autoPlay
            loop
            muted
            playsInline
            className="h-44"
          />
          <p className="mt-6 text-lg font-semibold">Nothing found</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Transaction;
