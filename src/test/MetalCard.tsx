import React from "react";

type MetalCardProps = {
  children?: React.ReactNode;
};

const MetalCard: React.FC<MetalCardProps> = ({ children }) => {
  return (
    <div className="relative group">
      {/* Outer glow / sparkle */}
      <div
        className="
          absolute -inset-[2px]
          rounded-[20px]
          bg-gradient-to-r
          from-amber-300
          via-white
          to-amber-300
          opacity-70
          blur-[6px]
          animate-pulse
        "
      />

      {/* Thickness layer (bottom edge) */}
      <div
        className="
          absolute inset-0
          translate-y-[6px]
          rounded-[18px]
          bg-gradient-to-b
          from-[#bfa070]
          to-[#8f6b3e]
        "
      />

      {/* Card face */}
      <div
        className="
          relative
          z-10
          w-[320px]
          h-[200px]
          rounded-[18px]
          bg-gradient-to-br
          from-[#f6e6c8]
          via-[#e2c9a0]
          to-[#c9a86a]
          shadow-[0_20px_40px_rgba(0,0,0,0.35)]
          overflow-hidden
          transform-gpu
          transition-transform
          group-hover:-translate-y-[4px]
        "
      >
        {/* Metallic noise overlay */}
        <div className="
          absolute inset-0
          bg-[linear-gradient(120deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05),rgba(0,0,0,0.1))]
          mix-blend-overlay
        " />

        {/* Edge highlight */}
        <div className="
          absolute inset-0
          rounded-[18px]
          ring-1 ring-white/40
        " />

        {/* Content */}
        <div className="relative z-10 p-6 text-black font-semibold">
          {children ?? "METAL CARD"}
        </div>
      </div>
    </div>
  );
};

export default MetalCard;
