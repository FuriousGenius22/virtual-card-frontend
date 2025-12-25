// import type { FC } from "react";
// import {
//   ShieldCheck,
//   Apple,
//   Wallet,
// } from "lucide-react";

// interface Badge {
//   label: string;
//   variant?: "default" | "danger" | "success";
//   icon?: "3ds" | "apple" | "gpay";
// }

// interface BuyCardProps {
//   cardNumber: string;
//   network: "visa" | "mastercard";
//   cost: string;
//   topUp: string;
//   badges?: Badge[];
//   disabled?: boolean;
// }

// const BuyCard: FC<BuyCardProps> = ({
//   cardNumber,
//   network,
//   cost,
//   topUp,
//   badges = [],
//   disabled,
// }) => {
//   return (
//     <>
//       {/* Desktop View */}
//       <div className="hidden sm:grid grid-cols-[220px_200px_1fr_120px] items-center px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 text-sm">
//         {/* CARD NUMBER */}
//         <div className="flex items-center gap-3">
//           <div className="px-3 py-1 border rounded-md font-medium bg-gray-50 text-xs md:text-sm">
//             {cardNumber}
//           </div>
//         </div>

//         {/* PAYMENT SYSTEM */}
//         <div className="flex items-center gap-2 font-medium">
//           {network === "mastercard" ? (
//             <>
//               <span className="flex">
//                 <span className="w-4 h-4 bg-red-500 rounded-full -mr-1" />
//                 <span className="w-4 h-4 bg-orange-400 rounded-full" />
//               </span>
//               MasterCard
//             </>
//           ) : (
//             <>
//               <span className="text-blue-600 font-bold">VISA</span>
//               Visa
//             </>
//           )}
//         </div>

//         {/* NOTES */}
//         <div className="flex flex-wrap gap-2">
//           <Tag>{cost}</Tag>
//           <Tag>{topUp}</Tag>

//           {badges.map((b, i) => (
//             <Tag key={i} variant={b.variant}>
//               {b.icon === "3ds" && <ShieldCheck size={14} />}
//               {b.icon === "apple" && <Apple size={14} />}
//               {b.icon === "gpay" && <Wallet size={14} />}
//               {b.label}
//             </Tag>
//           ))}

//           <Tag variant="danger">Additional bank tariffs</Tag>
//         </div>

//         {/* ACTION */}
//         <div className="flex justify-end">
//           <button
//             disabled={disabled}
//             className={`px-4 md:px-6 py-2 rounded-md font-medium transition text-xs md:text-sm
//               ${
//                 disabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//           >
//             Buy
//           </button>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="sm:hidden border-b border-gray-200 p-4 space-y-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="px-2.5 py-1 border rounded-md font-medium bg-gray-50 text-xs">
//               {cardNumber}
//             </div>
//             {network === "mastercard" ? (
//               <span className="flex">
//                 <span className="w-3 h-3 bg-red-500 rounded-full -mr-1" />
//                 <span className="w-3 h-3 bg-orange-400 rounded-full" />
//               </span>
//             ) : (
//               <span className="text-blue-600 font-bold text-xs">VISA</span>
//             )}
//           </div>
//           <button
//             disabled={disabled}
//             className={`px-4 py-1.5 rounded-md font-medium transition text-xs
//               ${
//                 disabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//           >
//             Buy
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-2">
//           <Tag>{cost}</Tag>
//           <Tag>{topUp}</Tag>
//           {badges.map((b, i) => (
//             <Tag key={i} variant={b.variant}>
//               {b.icon === "3ds" && <ShieldCheck size={12} />}
//               {b.icon === "apple" && <Apple size={12} />}
//               {b.icon === "gpay" && <Wallet size={12} />}
//               {b.label}
//             </Tag>
//           ))}
//           <Tag variant="danger">Additional bank tariffs</Tag>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BuyCard;

// /* ---------- TAG ---------- */

// function Tag({
//   children,
//   variant = "default",
// }: {
//   children: React.ReactNode;
//   variant?: "default" | "danger" | "success";
// }) {
//   return (
//     <span
//       className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border text-xs
//         ${
//           variant === "danger"
//             ? "border-red-400 text-red-600 bg-red-50"
//             : variant === "success"
//             ? "border-green-500 text-green-600 bg-green-50"
//             : "border-gray-300 bg-gray-50"
//         }`}
//     >
//       {children}
//     </span>
//   );
// }

import type { FC } from "react";
import { ShieldCheck, Apple, Wallet } from "lucide-react";

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
  onBuy?: () => void; // NEW: handler for buy event
}

// This is a placeholder Tag component. Replace with your actual import if necessary.
const Tag: FC<{ children: React.ReactNode; variant?: string }> = ({
  children,
}) => (
  <span className="px-2 py-1 rounded bg-gray-100 text-xs mr-2">{children}</span>
);

const BuyCard: FC<BuyCardProps> = ({
  cardNumber,
  network,
  cost,
  topUp,
  badges = [],
  disabled,
  onBuy, // NEW
}) => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:grid grid-cols-[220px_200px_1fr_120px] items-center px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 text-sm">
        {/* CARD NUMBER */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 border rounded-md font-medium bg-gray-50 text-xs md:text-sm">
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
            onClick={onBuy} // NEW
            className={`px-4 md:px-6 py-2 rounded-md font-medium transition text-xs md:text-sm
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

      {/* Mobile View */}
      <div className="sm:hidden border-b border-gray-200 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 border rounded-md font-medium bg-gray-50 text-xs">
              {cardNumber}
            </div>
            {network === "mastercard" ? (
              <span className="flex">
                <span className="w-3 h-3 bg-red-500 rounded-full -mr-1" />
                <span className="w-3 h-3 bg-orange-400 rounded-full" />
              </span>
            ) : (
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            )}
          </div>
          <button
            disabled={disabled}
            onClick={onBuy} // NEW
            className={`px-3 py-1 rounded-md font-medium text-xs
              ${
                disabled
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            Buy
          </button>
        </div>
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
      </div>
    </>
  );
};

export default BuyCard;
