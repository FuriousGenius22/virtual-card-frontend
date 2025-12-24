import React from "react";
import Button from "./Button";
import { Apple, Smartphone } from "lucide-react";

const AppGalleryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      fontSize="6"
      fill="white"
      fontFamily="Inter, sans-serif"
      fontWeight="600"
    >
      H
    </text>
  </svg>
);

const Buttons: React.FC = () => {
  return (
    <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
      <Button
        icon={<Apple className="w-4 h-4 sm:w-5 sm:h-5" />}
        label="App Store"
      />

      <Button
        icon={<Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />}
        label="Android"
      />

      <Button
        icon={<AppGalleryIcon />}
        label="AppGallery"
      />
    </div>
  );
};

export default Buttons;
