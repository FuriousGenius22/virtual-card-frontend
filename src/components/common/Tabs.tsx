import { Link, useLocation } from "react-router-dom";

interface TabItem {
  label: string;
  path: string;
  title: string;
}

interface TabsProps {
  tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
  const location = useLocation();

  const activeIndex = tabs.findIndex(tab =>
    location.pathname.startsWith(tab.path)
  );

  const safeIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <div className="border-b border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 min-h-[64px] sm:h-[64px] py-3 sm:py-0">
        {/* LEFT TITLE */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-0">
          {tabs[safeIndex].title}
        </h1>

        {/* RIGHT TABS - Horizontal scroll on mobile */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 relative h-full overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map((tab, i) => {
            const isActive = i === safeIndex;

            return (
              <div key={tab.label} className="relative h-full flex-shrink-0">
                <Link
                  to={tab.path}
                  className={`
                    flex items-center h-full text-xs sm:text-sm whitespace-nowrap
                    transition-colors duration-500 px-1
                    ${
                      isActive
                        ? "text-gray-900 font-medium"
                        : "text-gray-400 hover:text-gray-600"
                    }
                  `}
                >
                  {tab.label}
                </Link>

                {/* UNDERLINE */}
                <span
                  className={`
                    pointer-events-none
                    absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600

                    transition-opacity
                    duration-500
                    ease-[cubic-bezier(0.4,0,0.2,1)]

                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
