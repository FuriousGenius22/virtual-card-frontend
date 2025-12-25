
import { Outlet } from "react-router-dom";
import Tabs from "../components/common/Tabs";

const Accounts = () => {
  return (
    <div>
      <Tabs
        tabs={[
          {
            label: "Overview",
            path: "/accounts/overview",
            title: "Accounts",
          },
          {
            label: "Top-up",
            path: "/accounts/topUp",
            title: "Top-up",
          },
          {
            label: "Withdrawals",
            path: "/accounts/withdrawals",
            title: "Funds withdrawal",
          },
          {
            label: "Between your accounts",
            path: "/accounts/accountsTransfer",
            title: "Between your accounts",
          },
          {
            label: "Send to user",
            path: "/accounts/transferToUser",
            title: "Send to user",
          },
        ]}
      />
      <Outlet />
    </div>
  );
};
export default Accounts;
