import React from "react";

type SupportButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const SupportButton: React.FC<SupportButtonProps> = ({ icon, label }) => {
  return (
    <button
      className="
        flex items-center gap-1.5 sm:gap-2
        px-3 sm:px-4
        py-1.5 sm:py-2
        rounded-full
        text-white text-xs sm:text-sm font-medium
        bg-white/10
        backdrop-blur-md
        border border-white/20
        hover:bg-white/20
        active:bg-white/15
        transition
      "
    >
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

export default SupportButton;
