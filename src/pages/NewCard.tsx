import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

  const cards: CardRow[] = [
    { cardNumber: "5561 67** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "4466 20** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "Apple Pay", icon: "apple" }] },
    { cardNumber: "5257 97** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "High-quality BIN", variant: "success" }], disabled: true },
    { cardNumber: "5371 00** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%", badges: [{ label: "3DS", icon: "3ds" }, { label: "Apple Pay", icon: "apple" }, { label: "Google Pay", icon: "gpay" }] },
    { cardNumber: "4288 20** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "4432 52** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "5362 09** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "5321 13** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "4865 55** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "4288 52** *", network: "visa", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "5437 99** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
    { cardNumber: "5437 34** *", network: "mastercard", cost: "Cost of the card: $4", topUp: "Top-up: 6.7%" },
  ];

  const sortedCards = useMemo(() => {
    if (!sortKey) return cards;

    const copy = [...cards];
    copy.sort((a, b) => {
      if (sortKey === "card") {
        const na = a.cardNumber.replace(/\D/g, "");
        const nb = b.cardNumber.replace(/\D/g, "");
        return sortDir === "asc" ? na.localeCompare(nb) : nb.localeCompare(na);
      }

      const order = sortDir === "asc"
        ? ["visa", "mastercard"]
        : ["mastercard", "visa"];

      return order.indexOf(a.network) - order.indexOf(b.network);
    });

    return copy;
  }, [cards, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
    }
  };

  return (
    <div className="space-y-6">
      {/* BACK */}
      <div className="flex items-center gap-3 text-sm">
        <Link to="/cards" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <ChevronLeft size={18} />
        </Link>
        <span className="font-medium">Cards</span>
      </div>

      <h1 className="text-2xl font-semibold">Card issue</h1>

      {/* TOP SEARCH CARD */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-5">
        <div className="flex items-center gap-3 text-sm font-medium">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <CreditCard size={18} />
          </div>
          Find out which card is best for paying at the store you need
        </div>

        <div className="flex items-center gap-4">
          <select className="flex-1 border rounded-lg px-4 py-3 text-sm bg-white">
            <option>Write or select where you plan to pay</option>
          </select>

          <button className="flex items-center gap-1 text-sm text-gray-500">
            For all time
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 bg-blue-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400">
            <Search size={18} />
            Check
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg py-3 text-center text-sm bg-white">
            Cost of the card: <b>$4</b>
          </div>
          <div className="border rounded-lg py-3 text-center text-sm bg-white">
            Renewal: <b>$4</b>
          </div>
          <Link
            to="#"
            className="border rounded-lg py-3 text-center text-sm text-blue-600 hover:bg-blue-50"
          >
            All issue conditions →
          </Link>
        </div>
      </div>

      {/* TABLE */}
      <div className="border rounded-xl overflow-hidden">
        <div className="grid grid-cols-[220px_200px_1fr_120px] px-6 py-3 bg-gray-50 text-sm font-medium text-gray-600">
          <button onClick={() => toggleSort("card")} className="flex items-center gap-2"> Card number <SortIcon column="card" sortKey={sortKey} sortDir={sortDir} />
          </button>
          <button onClick={() => toggleSort("network")} className="flex items-center gap-2"> Payment system <SortIcon column="network" sortKey={sortKey} sortDir={sortDir} />
          </button>
          <div>Note</div>
          <div className="text-right">Action</div>
        </div>

        {sortedCards.map((row, i) => (
          <BuyCard key={i} {...row} />
        ))}
      </div>
    </div>
  );
}
