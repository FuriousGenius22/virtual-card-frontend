import React from "react";

type CardProps = {
  tier: string;
  spend: string;
  fee: string;
  gradient: string;
  textColor?: string;
};

const Card: React.FC<CardProps> = ({
  tier,
  spend,
  fee,
  gradient,
  textColor = "#111",
}) => {
  return (
    <div
      className="
        relative
        aspect-[11/16]
        w-[220px]
        rounded-[24px]
        overflow-hidden
        transform-gpu
      "
      style={{ color: textColor }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[24px]"
        style={{
          background: gradient,
          filter: "blur(8px)",
          opacity: 0.9,
        }}
      />

      {/* Card body */}
      <div
        className="
          relative
          z-10
          h-full
          w-full
          rounded-[22px]
          p-6
          flex
          flex-col
          justify-between
          shadow-[0_25px_50px_rgba(0,0,0,0.25)]
        "
        style={{
          background: gradient,
        }}
      >
        {/* NFC */}
        <svg
          className="absolute top-4 right-4 opacity-40"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12c0-3.9 3.1-7 7-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8 12c0-2.2 1.8-4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>

        {/* Text */}
        <div>
          <p className="text-[13px] tracking-wide opacity-70">Spend</p>
          <p className="text-[20px] font-semibold tracking-tight">
            {spend}
          </p>

          <p className="mt-5 text-[13px] tracking-wide opacity-70">
            Fee
          </p>
          <p className="text-[28px] font-bold tracking-tight">
            {fee}
          </p>
        </div>

        {/* EMV Chip */}
        <svg
          className="w-12 h-9 opacity-70"
          viewBox="0 0 48 36"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="46"
            height="34"
            rx="6"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <path
            d="M16 1v34M32 1v34M1 12h46M1 24h46"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
        </svg>

        {/* Vertical tier */}
        <div className="absolute bottom-4 left-4 rotate-[-90deg] origin-left text-sm opacity-50 font-medium tracking-wide">
          {tier}
        </div>
      </div>
    </div>
  );
};

export default Card;
