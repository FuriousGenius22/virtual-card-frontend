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
      <div className="flex items-center justify-between px-6 h-[64px]">
        {/* LEFT TITLE */}
        <h1 className="text-3xl font-semibold text-gray-900">
          {tabs[safeIndex].title}
        </h1>

        {/* RIGHT TABS */}
        <div className="flex gap-8 relative h-full">
          {tabs.map((tab, i) => {
            const isActive = i === safeIndex;

            return (
              <div key={tab.label} className="relative h-full">
                <Link
                  to={tab.path}
                  className={`
                    flex items-center h-full text-sm
                    transition-colors duration-500
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
