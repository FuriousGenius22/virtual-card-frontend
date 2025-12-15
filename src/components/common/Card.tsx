import React from "react";
import EmvChip from "../../assets/emv.jpg";

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
        w-[clamp(160px,18vw,220px)]
        rounded-[0.8em]
        overflow-hidden
        transform-gpu
        
      "
      style={{ color: textColor }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: gradient,
          filter: "blur(0.6em)",
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
          rounded-[inherit]
          p-[1.2em]
          flex
          flex-col
          justify-between
          shadow-[0_1.5em_3em_rgba(0,0,0,0.25)]
        "
        style={{ background: gradient }}
      >
        {/* NFC */}
        <svg
          className="absolute top-[0.8em] right-[0.8em] opacity-40"
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: "1.2em", height: "1.2em" }}
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
          <p className="text-[0.65em] tracking-wide opacity-70">
            Spend
          </p>
          <p className="text-[1em] font-semibold leading-tight">
            {spend}
          </p>

          <p className="mt-[1em] text-[0.65em] tracking-wide opacity-70">
            Fee
          </p>
          <p className="text-[1.4em] font-bold leading-tight">
            {fee}
          </p>
        </div>

        {/* EMV chip */}
        <div className="flex justify-center">
          <img
            src={EmvChip}
            alt="EMV chip"
            className="
              w-[2.2em]
              h-auto
              opacity-80
              -rotate-90
              rounded-[0.2em]
        
            "
          />
        </div>

        {/* Vertical tier */}
        <div className="
          absolute
          bottom-[0em]
          left-[1em]
          -rotate-90
          origin-left
          text-[1.5em]
          opacity-50
          tracking-wide
        ">
          {tier}
        </div>
      </div>
    </div>
  );
};

export default Card;
