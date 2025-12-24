import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`w-full px-4 sm:px-6 md:px-8 lg:px-10 ${className || ""}`}>
      {children}
    </div>
  );
}
