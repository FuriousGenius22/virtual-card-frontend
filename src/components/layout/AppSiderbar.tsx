import { Link } from "react-router-dom";
import { Home, Wallet, CreditCard, Clock } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";

const items = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Accounts", icon: Wallet, to: "/accounts/overview" },
  { label: "Cards", icon: CreditCard, to: "/cards" },
  { label: "Transaction history", icon: Clock, to: "/history" },
];

const AppSiderbar: React.FC = () => {
  const { isExpanded } = useSiderbar();

  return (
    <nav className="flex h-full flex-col gap-3 px-2 py-5">
      {items.map(({ label, icon: Icon, to }) => {
        const displayLabel =
          !isExpanded && label.length > 10
            ? `${label.slice(0, 10)}...`
            : label;

        return (
          <Link
            key={label}
            to={to}
            className={`
              group rounded-xl px-3 py-3 hover:bg-gray-100 transition
              flex items-center no-underline text-inherit
              ${isExpanded
                ? "flex-row gap-4 justify-start"
                : "flex-col gap-1 justify-center"}
            `}
          >
            <Icon className="h-5 w-5 transition-transform group-active:scale-90" />

            <span className="text-xs font-medium text-center whitespace-nowrap">
              {displayLabel}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default AppSiderbar;
