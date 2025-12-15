import React from "react";

type SupportButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const SupportButton: React.FC<SupportButtonProps> = ({ icon, label }) => {
  return (
    <button
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        text-white text-sm font-medium
        bg-white/10
        backdrop-blur-md
        border border-white/20
        hover:bg-white/20
        transition
      "
    >
      <span className="w-4 h-4 flex items-center justify-center">
        {icon}
      </span>
      {label}
    </button>
  );
};

export default SupportButton;
