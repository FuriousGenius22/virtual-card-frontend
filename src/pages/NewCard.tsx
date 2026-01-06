// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ChevronLeft,
//   ChevronDown,
//   Search,
//   CreditCard,
//   ArrowUpDown,
//   ArrowUp,
//   ArrowDown,
// } from "lucide-react";
// import BuyCard from "../components/common/BuyCard";

// const SortIcon = ({ column, sortKey, sortDir }: { column: SortKey, sortKey: SortKey, sortDir: SortDir }) => {
//   if (sortKey !== column) return <ArrowUpDown size={14} />;
//   return sortDir === "asc" ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
// };


// type Network = "visa" | "mastercard";
// type SortKey = "card" | "network" | null;
// type SortDir = "asc" | "desc";

// interface CardRow {
//   cardNumber: string;
//   network: Network;
//   cost: string;
//   topUp: string;
//   badges?: {
//     label: string;
//     variant?: "default" | "danger" | "success";
//     icon?: "3ds" | "apple" | "gpay";
//   }[];
//   disabled?: boolean;
// }

// export default function NewCard() {
//   const [sortKey, setSortKey] = useState<SortKey>(null);
//   const [sortDir, setSortDir] = useState<SortDir>("asc");

//   const cards: CardRow[] = [
//     { cardNumber: "5561 67** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "4466 20** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "Apple Pay", icon: "apple" }] },
//     { cardNumber: "5257 97** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "High-quality BIN", variant: "success" }], disabled: true },
//     { cardNumber: "5371 00** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "3DS", icon: "3ds" }, { label: "Apple Pay", icon: "apple" }, { label: "Google Pay", icon: "gpay" }] },
//     { cardNumber: "4288 20** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "4432 52** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "5362 09** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "5321 13** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "4865 55** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "4288 52** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "5437 99** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//     { cardNumber: "5437 34** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
//   ];

//   const sortedCards = useMemo(() => {
//     if (!sortKey) return cards;

//     const copy = [...cards];
//     copy.sort((a, b) => {
//       if (sortKey === "card") {
//         const na = a.cardNumber.replace(/\D/g, "");
//         const nb = b.cardNumber.replace(/\D/g, "");
//         return sortDir === "asc" ? na.localeCompare(nb) : nb.localeCompare(na);
//       }

//       const order = sortDir === "asc"
//         ? ["visa", "mastercard"]
//         : ["mastercard", "visa"];

//       return order.indexOf(a.network) - order.indexOf(b.network);
//     });

//     return copy;
//   }, [cards, sortKey, sortDir]);

//   const toggleSort = (key: SortKey) => {
//     if (sortKey !== key) {
//       setSortKey(key);
//       setSortDir("asc");
//     } else {
//       setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
//     }
//   };

//   return (
//     <div className="space-y-4 sm:space-y-6">
//       {/* BACK */}
//       <div className="flex items-center gap-2 sm:gap-3 text-sm">
//         <Link to="/cards" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
//           <ChevronLeft size={18} />
//         </Link>
//         <span className="font-medium">Cards</span>
//       </div>

//       <h1 className="text-xl sm:text-2xl font-semibold">Card issue</h1>

//       {/* TOP SEARCH CARD */}
//       <div className="border rounded-xl p-4 sm:p-5 md:p-6 bg-gray-50 space-y-4 sm:space-y-5">
//         <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
//           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//             <CreditCard size={16} className="sm:w-[18px] sm:h-[18px]" />
//           </div>
//           <span>Find out which card is best for paying at the store you need</span>
//         </div>

//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
//           <select className="flex-1 border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm bg-white">
//             <option>Write or select where you plan to pay</option>
//           </select>

//           <button className="hidden sm:flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap px-3 py-2.5 sm:py-3">
//             For all time
//             <ChevronDown size={16} />
//           </button>

//           <button className="flex items-center justify-center gap-2 bg-blue-300 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-400 transition">
//             <Search size={18} />
//             Check
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//           <div className="border rounded-lg py-2.5 sm:py-3 text-center text-xs sm:text-sm bg-white">
//             Cost of the card: <b>$4</b>
//           </div>
//           <div className="border rounded-lg py-2.5 sm:py-3 text-center text-xs sm:text-sm bg-white">
//             Renewal: <b>$4</b>
//           </div>
//           <Link
//             to="#"
//             className="border rounded-lg py-2.5 sm:py-3 text-center text-xs sm:text-sm text-blue-600 hover:bg-blue-50 transition"
//           >
//             All issue conditions →
//           </Link>
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="border rounded-xl overflow-hidden overflow-x-auto">
//         <div className="min-w-[600px] sm:min-w-0">
//           <div className="hidden sm:grid grid-cols-[220px_200px_1fr_120px] px-4 md:px-6 py-3 bg-gray-50 text-sm font-medium text-gray-600">
//             <button onClick={() => toggleSort("card")} className="flex items-center gap-2 text-left"> Card number <SortIcon column="card" sortKey={sortKey} sortDir={sortDir} />
//             </button>
//             <button onClick={() => toggleSort("network")} className="flex items-center gap-2 text-left"> Payment system <SortIcon column="network" sortKey={sortKey} sortDir={sortDir} />
//             </button>
//             <div>Note</div>
//             <div className="text-right">Action</div>
//           </div>
          
//           {/* Mobile header */}
//           <div className="sm:hidden px-4 py-3 bg-gray-50 text-sm font-medium text-gray-600 border-b">
//             Available Cards
//           </div>

//           {sortedCards.map((row, i) => (
//             <BuyCard key={i} {...row} />
//           ))}
//         </div>
//       </div>
//     </div>
// }



import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronDown,
  Search,
  CreditCard,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import BuyCard from "../components/common/BuyCard";
import { showToast } from '../toast';

// Sorting & Types
const SortIcon = ({ column, sortKey, sortDir }: { column: SortKey, sortKey: SortKey, sortDir: SortDir }) => {
  if (sortKey !== column) return <ArrowUpDown size={14} />;
  return sortDir === "asc" ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
};

type Network = "visa" | "mastercard";
type SortKey = "card" | "network" | null;
type SortDir = "asc" | "desc";

interface CardRow {
  cardNumber: string;
  network: Network;
  cost: string;
  topUp: string;
  badges?: {
    label: string;
    variant?: "default" | "danger" | "success";
    icon?: "3ds" | "apple" | "gpay";
  }[];
  disabled?: boolean;
}

export default function NewCard() {
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const cards: CardRow[] = [
    { cardNumber: "5561 67** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "4466 20** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "Apple Pay", icon: "apple" }] },
    { cardNumber: "5257 97** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "High-quality BIN", variant: "success" }], disabled: true },
    { cardNumber: "5371 00** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "3DS", icon: "3ds" }, { label: "Apple Pay", icon: "apple" }, { label: "Google Pay", icon: "gpay" }] },
    { cardNumber: "4288 20** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "4432 52** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "5362 09** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "5321 13** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
  ];

  // --- CORE LOGIC ADDED --- 
  // TODO: Implement card purchase logic with backend
  const handleBuy = (card: CardRow) => {
    // Example: await fetch('/api/cards', { method: 'POST', body: JSON.stringify(card) })
    showToast('A new card issued! (mock)', 'success');
    setTimeout(() => navigate('/cards'), 1200);
  };
  // --- END CORE LOGIC ---

  const filtered = useMemo(() => {
    let arr = [...cards];
    if (search) {
      arr = arr.filter(
        (c) =>
          c.cardNumber.includes(search) ||
          c.network.includes(search) ||
          c.cost.includes(search) ||
          c.topUp.includes(search) ||
          (c.badges || []).some((b) => b.label.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (sortKey) {
      arr = arr.sort((a, b) => {
        let aVal, bVal;
        if (sortKey === "card") {
          aVal = a.cardNumber || "";
          bVal = b.cardNumber || "";
        } else if (sortKey === "network") {
          aVal = a.network || "";
          bVal = b.network || "";
        } else {
          return 0;
        }
        if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
        if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return arr;
  }, [cards, sortKey, sortDir, search]);

  return (
    <div className="max-w-5~xl mx-auto py-8">
      {/* Top Nav */}
      <div className="flex items-center gap-3 mb-6">
        <a href="#" className="p-1 rounded-full hover:bg-gray-200 transition">
          <ChevronLeft size={20} />
        </a>
        <span className="font-medium">Buy a new card</span>
      </div>

      {/* Search & Sort */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="relative w-full sm:w-auto flex-1">
          <input
            type="text"
            className="border rounded-lg px-4 py-2 pr-10 w-full"
            placeholder="Search cards"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="absolute right-3 top-2.5 text-gray-400">
            <Search size={16} />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSortKey("card");
              setSortDir(s => (sortKey === "card" && s === "asc" ? "desc" : "asc"));
            }}
            className="flex items-center gap-1 px-2 py-1 rounded border bg-white"
          >
            <CreditCard size={14} />
            Card
            <SortIcon column="card" sortKey={sortKey} sortDir={sortDir} />
          </button>
          <button
            onClick={() => {
              setSortKey("network");
              setSortDir(s => (sortKey === "network" && s === "asc" ? "desc" : "asc"));
            }}
            className="flex items-center gap-1 px-2 py-1 rounded border bg-white"
          >
            <ChevronDown size={14} />
            Network
            <SortIcon column="network" sortKey={sortKey} sortDir={sortDir} />
          </button>
        </div>
      </div>

      {/* CARD TABLE */}
      <div className="overflow-x-auto border rounded-lg bg-white">
        <div className="min-w-[600px]">
          {/* Header Row */}
          <div className="hidden sm:grid grid-cols-[220px_200px_1fr_120px] px-4 md:px-6 py-3 bg-gray-50 border-b text-xs font-semibold text-gray-600">
            <div>Card</div>
            <div>Network</div>
            <div>Details</div>
            <div></div>
          </div>
          {/* Rows */}
          {filtered.map((card) => (
            <BuyCard
              {...card}
              key={card.cardNumber}
              onBuy={() => handleBuy(card)} // Pass buy handler!
            />
          ))}
        </div>
      </div>

      {/* Mobile fallback (can be improved if you have a mobile layout) */}
      <div className="sm:hidden mt-4 flex flex-col gap-3">
        {filtered.map((card) => (
          <BuyCard
            {...card}
            key={card.cardNumber + "-mobile"}
            onBuy={() => handleBuy(card)}
          />
        ))}
      </div>
    </div>
  );
}