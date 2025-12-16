import { Link, useLocation } from "react-router";
import { House, Wallet, CreditCard, RotateCcwKey } from "lucide-react";
import type { FC } from "react";
import { useSidebar } from "../../context/SiderbarContext";

const AppSiderbar: FC = () => {
  const { isExpanded } = useSidebar();
  const location = useLocation();
  
  const navItem = (
    to: string,
    label: string,
    Icon: any
  ) => {
    const isActive = location.pathname.startsWith(to);

    return (
      <Link
        to={to}
        className={`
          group flex  items-center
          ${isExpanded ? "justify-start flex-row" : "justify-start flex-col"}
          gap-3 rounded-xl px-3 py-2
          text-gray-700 transition-all duration-200
          hover:bg-gray-100
          ${isActive ? "bg-gray-200 font-medium" : ""}
        `}
      >
        <p className="flex items-center justify-center w-6 h-6">
          <Icon className="w-10 h-10" />
        </p>

          <p className="text-sm whitespace-nowrap">
            {label}
            {isActive}
          </p>
      </Link>
    );
  };

  return (
    <nav className="flex flex-col gap-6 px-2 py-6 border-0">
      {navItem("/dashboard", "Dashboard", House)}
      {navItem("/accounts", "Accounts", Wallet)}
      {navItem("/cards", "Cards", CreditCard)}
      {navItem("/history", "Transaction History", RotateCcwKey)}
    </nav>
  );
};

export default AppSiderbar;
