import React from "react";

type SignupAgreementsProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const SignupAgreements: React.FC<SignupAgreementsProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className="space-y-3 text-sm">
      {/* Terms & Privacy */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-gray-700">
          By signing up, you agree to our{" "}
          <a
            href="/terms"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>
        </span>
      </label>

      {/* Country Confirmation */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-gray-700">
          By registering, you confirm that you are not a resident of the{" "}
          <a
            href="/restricted-countries"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Following countries
          </a>
        </span>
      </label>
    </div>
  );
};

export default SignupAgreements;
