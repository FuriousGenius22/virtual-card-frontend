import React from "react";

type ButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2 sm:gap-3
        bg-white
        text-black
        px-4 sm:px-5
        py-2 sm:py-2.5
        rounded-full
        shadow-[0_4px_12px_rgba(0,0,0,0.15)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)]
        active:shadow-[0_2px_8px_rgba(0,0,0,0.15)]
        transition-shadow
        font-inter
        font-semibold
        text-xs sm:text-sm
      "
    >
      <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 shrink-0">
        {icon}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

export default Button;
