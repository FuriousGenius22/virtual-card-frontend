
import { Outlet } from "react-router-dom";
import Tabs from "../components/common/Tabs";

const Settings = () => {
  return (
    <div>
      <Tabs
        tabs={[
          {
            label: "General",
            path: "/settings/general",
            title: "General",
          },
          {
            label: "Safety and Security",
            path: "/settings/security",
            title: "Security",
          },
          {
            label: "Verification",
            path: "/settings/verification",
            title: "Verification",
          },
          {
            label: "Notifications",
            path: "/settings/notifications",
            title: "Notifications",
          },
          
        ]}
      />
      <Outlet />
    </div>
  );
};
export default Settings;
