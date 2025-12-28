import { useState, useRef, useLayoutEffect } from "react";

export default function Scheduled() {
  const tabs = ["Create statement", "Created schedules"];
  const [active, setActive] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = tabRefs.current[active];
    const underline = underlineRef.current;

    if (el && underline) {
      underline.style.width = `${el.offsetWidth}px`;
      underline.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [active]);

  return (
    <div className="w-full min-h-screen bg-white px-10 pt-8 select-none">
      {/* ---------------- TITLE ---------------- */}
      <h1 className="text-[28px] font-semibold text-[#0D0D0D] mb-8">
        Statement type
      </h1>

      {/* ---------------- TABS ---------------- */}
      <div className="relative border-b border-[#E6E8EC] mb-10">
        <div className="flex gap-10 text-[15px] font-medium text-[#808191] pb-4">
          {tabs.map((item, i) => (
            <button
              key={item}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => setActive(i)}
              className={`transition-colors ${
                active === i ? "text-[#111827]" : "hover:text-[#111827]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* underline */}
        <div
          ref={underlineRef}
          className="absolute bottom-[-1px] left-0 h-[2px] bg-[#2563eb] rounded transition-all duration-300"
        />
      </div>

      {/* ---------------- FORM BLOCKS ---------------- */}

      {/* FREQUENCY */}
      <div className="mb-8">
        <p className="text-[14px] text-[#6B7280] mb-2">Frequency</p>

        <button
          className="
            w-[680px] h-[52px]
            rounded-lg
            border border-[#E6E8EC]
            bg-[#F8FAFC]
            flex items-center justify-between
            px-4 text-[15px] text-[#4B5563]
          "
        >
          Daily / for the previous day
          <span className="text-[#374151] text-[18px]">▾</span>
        </button>
      </div>

      {/* ACCOUNTS */}
      <div className="mb-8">
        <p className="text-[14px] text-[#6B7280] mb-2">Accounts for statement</p>

        <button
          className="
            w-[680px] h-[52px]
            rounded-lg
            border border-[#E6E8EC]
            bg-[#F8FAFC]
            flex items-center justify-between
            px-4 text-[15px] text-[#4B5563]
          "
        >
          Full Extract
          <span className="text-[#374151] text-[18px]">▾</span>
        </button>
      </div>

      {/* SEND TO EMAIL */}
      <div className="mb-8">
        <p className="text-[14px] text-[#6B7280] mb-2">Send to</p>

        <input
          defaultValue="sylwestereee25@gmail.com"
          className="
            w-[680px] h-[52px]
            rounded-lg
            border border-[#E6E8EC]
            bg-white
            px-4 text-[15px] text-[#111827]
            outline-none
          "
        />
      </div>

      {/* FORMAT */}
      <div className="mb-12">
        <p className="text-[14px] text-[#6B7280] mb-2">Statement format</p>

        <button
          className="
            w-[680px] h-[52px]
            rounded-lg
            border border-[#E6E8EC]
            bg-[#F8FAFC]
            flex items-center justify-between
            px-4 text-[15px] text-[#4B5563]
          "
        >
          Statement format: XLSX
          <span className="text-[#374151] text-[18px]">▾</span>
        </button>
      </div>

      {/* CREATE BUTTON */}
      <button
        className="
          text-[15px]
          px-6 py-2
          rounded-md
          bg-[#2563eb]
          text-white
          hover:bg-[#1e4fc8]
          transition
        "
      >
        Create statement
      </button>
    </div>
  );
}
