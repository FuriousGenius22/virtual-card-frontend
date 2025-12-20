import Tabs from "../components/common/Tabs";

const Withdrawals = () => {
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
            path: "/withdrawals",
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
    </div>
  );
};

export default Withdrawals;
