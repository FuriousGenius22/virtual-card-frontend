
import { Outlet } from "react-router-dom";
import Tabs from "../components/common/Tabs";

const Transaction= () => {
  return (
    <div>
      <Tabs
        tabs={[
          {
            label: "Transaction History",
            path: "/history/view",
            title: "Transaction History",
          },
          {
            label: "Create Statement",
            path: "/history/scheduled",
            title: "Create Statement",
          },
          {
            label: "Ready Statement",
            path: "/history/report",
            title: "Ready Statement",
          },
       
        ]}
      />
      <Outlet />
    </div>
  );
};
export default Transaction;
