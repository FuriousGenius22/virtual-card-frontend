import type { FC } from "react";
import {
  ShieldCheck,
  Apple,
  Wallet,
} from "lucide-react";

interface Badge {
  label: string;
  variant?: "default" | "danger" | "success";
  icon?: "3ds" | "apple" | "gpay";
}

interface BuyCardProps {
  cardNumber: string;
  network: "visa" | "mastercard";
  cost: string;
  topUp: string;
  badges?: Badge[];
  disabled?: boolean;
}

const BuyCard: FC<BuyCardProps> = ({
  cardNumber,
  network,
  cost,
  topUp,
  badges = [],
  disabled,
}) => {
  return (
    <div className="grid grid-cols-[220px_200px_1fr_120px] items-center px-6 py-4 border-b border-gray-200 text-sm">
      {/* CARD NUMBER */}
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 border rounded-md font-medium bg-gray-50">
          {cardNumber}
        </div>
      </div>

      {/* PAYMENT SYSTEM */}
      <div className="flex items-center gap-2 font-medium">
        {network === "mastercard" ? (
          <>
            <span className="flex">
              <span className="w-4 h-4 bg-red-500 rounded-full -mr-1" />
              <span className="w-4 h-4 bg-orange-400 rounded-full" />
            </span>
            MasterCard
          </>
        ) : (
          <>
            <span className="text-blue-600 font-bold">VISA</span>
            Visa
          </>
        )}
      </div>

      {/* NOTES */}
      <div className="flex flex-wrap gap-2">
        <Tag>{cost}</Tag>
        <Tag>{topUp}</Tag>

        {badges.map((b, i) => (
          <Tag key={i} variant={b.variant}>
            {b.icon === "3ds" && <ShieldCheck size={14} />}
            {b.icon === "apple" && <Apple size={14} />}
            {b.icon === "gpay" && <Wallet size={14} />}
            {b.label}
          </Tag>
        ))}

        <Tag variant="danger">Additional bank tariffs</Tag>
      </div>

      {/* ACTION */}
      <div className="flex justify-end">
        <button
          disabled={disabled}
          className={`px-6 py-2 rounded-md font-medium transition
            ${
              disabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyCard;

/* ---------- TAG ---------- */

function Tag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "danger" | "success";
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border text-xs
        ${
          variant === "danger"
            ? "border-red-400 text-red-600 bg-red-50"
            : variant === "success"
            ? "border-green-500 text-green-600 bg-green-50"
            : "border-gray-300 bg-gray-50"
        }`}
    >
      {children}
    </span>
  );
}
