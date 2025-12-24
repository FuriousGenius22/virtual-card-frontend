export default function FilterTabs() {
  const tabs = ["All transactions", "Top-up", "Declines", "Holds"];

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {tabs.map((t, i) => (
        <button
          key={t}
          className={`h-9 px-3 sm:px-4 rounded-lg text-xs sm:text-sm border whitespace-nowrap flex-shrink-0
            ${i === 0 ? "bg-gray-100 font-medium" : "border-gray-200 text-gray-500"}
          `}
        >
          {t}
        </button>
      ))}
    </div>
  );
}