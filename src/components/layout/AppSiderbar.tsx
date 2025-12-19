import {
  Home,
  Wallet,
  CreditCard,
  Clock,
  Users,
  DollarSign,
  HelpCircle,
  FileText,
} from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";

const items = [
  { label: "Dashboard", icon: Home },
  { label: "Accounts", icon: Wallet },
  { label: "Cards", icon: CreditCard },
  { label: "Transaction history", icon: Clock },
  { label: "Teams", icon: Users },
  { label: "Earn", icon: DollarSign },
  { label: "Support", icon: HelpCircle },
  { label: "API documentation", icon: FileText },
];

const AppSiderbar: React.FC = () => {
  const { isExpanded } = useSiderbar();

  return (
    <nav className="flex h-full flex-col gap-2 px-3 py-6">
      {items.map(({ label, icon: Icon }) => (
        <button
          key={label}
          className="group flex items-center gap-4 rounded-xl px-3 py-3 hover:bg-gray-100 transition"
        >
          <Icon className="h-5 w-5 group-active:scale-90 transition-transform" />

          {isExpanded && (
            <span className="text-sm font-medium whitespace-nowrap">
              {label}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
};

export default AppSiderbar;
