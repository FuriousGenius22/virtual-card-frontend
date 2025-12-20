import { useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

interface TabItem {
  label: string;
  path: string;
  title: string; // left-side text when active
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

  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = tabRefs.current[safeIndex];
    const underline = underlineRef.current;

    if (el && underline) {
      underline.style.width = `${el.offsetWidth}px`;
      underline.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [safeIndex, tabs]);

  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between px-6 h-[64px]">
        {/* LEFT TITLE */}
        <h1 className="text-3xl font-semibold text-gray-900">
          {tabs[safeIndex].title}
        </h1>

        {/* RIGHT TABS */}
        <div className="relative flex gap-8">
          {/* Animated underline */}
          <span
            ref={underlineRef}
            className="absolute -bottom-[1px] h-[2px] bg-blue-600 transition-all duration-300 ease-out"
          />

          {tabs.map((tab, i) => {
            const isActive = i === safeIndex;

            return (
              <Link
                key={tab.label}
                to={tab.path}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                className={`
                  relative pb-5 text-sm transition-colors duration-200
                  ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-400 hover:text-gray-600"
                  }
                `}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
