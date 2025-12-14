import React from 'react'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
