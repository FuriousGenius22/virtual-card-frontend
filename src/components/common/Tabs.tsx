import { useLayoutEffect, useRef, useState } from "react";

interface TabsProps {
  tabs: string[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
}

export default function Tabs({
  tabs,
  defaultIndex = 0,
  onChange,
}: TabsProps) {
  const [active, setActive] = useState(defaultIndex);

  const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = tabRefs.current[active];
    const underline = underlineRef.current;

    if (el && underline) {
      underline.style.width = `${el.offsetWidth}px`;
      underline.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [active, tabs]);

  const handleClick = (index: number) => {
    setActive(index);
    onChange?.(index);
  };

  return (
    <div className="relative flex gap-8">
      {/* Animated underline */}
      <span
        ref={underlineRef}
        className="absolute -bottom-[13px] h-[2px] bg-blue-600 transition-all duration-300 ease-out"
      />

      {tabs.map((label, i) => (
        <span
          key={label}
          ref={(el) => {
            tabRefs.current[i] = el;
          }}
          onClick={() => handleClick(i)}
          className={`
            cursor-pointer pb-3 transition-all duration-200 select-none
            ${
              active === i
                ? "text-gray-900 text-base font-medium"
                : "text-gray-400 text-sm hover:text-gray-600"
            }
          `}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
