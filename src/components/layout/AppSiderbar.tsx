import { Link } from "react-router-dom";
import { Home, Wallet, CreditCard, Clock } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";

const items = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Accounts", icon: Wallet, to: "/accounts/overview" },
  { label: "Cards", icon: CreditCard, to: "/cards" },
  { label: "Transaction history", icon: Clock, to: "/history/view" },
];

const AppSiderbar: React.FC = () => {
  const { isExpanded } = useSiderbar();

  return (
    <nav className="flex flex-col h-full gap-2 sm:gap-3 px-2 sm:px-3 py-4 sm:py-5">
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
              group rounded-lg sm:rounded-xl px-2 sm:px-3 py-2.5 sm:py-3 hover:bg-gray-100 active:bg-gray-200 transition
              flex items-center no-underline text-inherit text-gray-700
              ${isExpanded
                ? "flex-row gap-3 sm:gap-4 justify-start"
                : "flex-col gap-1 justify-center"}
            `}
          >
            <Icon className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-active:scale-90 flex-shrink-0" />

            <span className={`text-xs font-medium text-center whitespace-nowrap ${isExpanded ? "block" : "hidden md:block"}`}>
              {displayLabel}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default AppSiderbar;
