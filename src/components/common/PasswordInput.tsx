import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = {
  placeholder: string;          // ✅ customizable placeholder
  value?: string;               // optional controlled value
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  name?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  value,
  onChange,
  minLength = 8,
  name = "password",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={visible ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        minLength={minLength}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-4 py-2 pr-12 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2
                   text-gray-400 hover:text-gray-600"
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;
