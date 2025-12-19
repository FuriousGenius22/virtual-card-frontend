export default function FilterTabs() {
  const tabs = ["All transactions", "Top-up", "Declines", "Holds"];

  return (
    <div className="flex items-center gap-2">
      {tabs.map((t, i) => (
        <button
          key={t}
          className={`h-9 px-4 rounded-lg text-sm border
            ${i === 0 ? "bg-gray-100 font-medium" : "border-gray-200 text-gray-500"}
          `}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
