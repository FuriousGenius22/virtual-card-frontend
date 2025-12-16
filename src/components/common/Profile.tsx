import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { BellPlus, LogOut, Send, Settings } from "lucide-react";

const Profile: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <Dropdown
        label=""
        dismissOnClick={false}
        className="shadow-lg w-80 rounded-xl"
        renderTrigger={() => (
          <button className="flex items-center justify-center w-10 h-10 overflow-hidden transition-all rounded-full hover:ring-2 hover:ring-primary/40">
            <img
              src="./images/user/owner.jpg"
              alt="User"
              className="object-cover w-full h-full"
            />
          </button>
        )}
      >
        {/* Profile Header */}
        <div className="px-4 py-3 border-b">
          <img
              src="./images/user/owner.jpg"
              alt="User"
              className="object-cover w-full h-full"
          />
          <p className="text-lg font-semibold text-gray-800">john@example.com</p>
          <p className="text-lg text-blue-500">Account Level-Standard</p>
        </div>

        {/* Menu Items */}
        <DropdownItem
          as={Link}
          to="/connect/telegram"
          className="flex items-center gap-3 p-2 px-4 py-2 text-lg transition rounded-md hover:bg-gray-100"
        >
          <Send />
          Telegram Connects
        </DropdownItem>

        <DropdownItem
          as={Link}
          to="/notifications"
          className="flex items-center gap-3 p-2 px-4 py-2 text-lg transition rounded-md hover:bg-gray-100"
        >
          <BellPlus />
          Notification Settings
        </DropdownItem>

        <DropdownItem
          as={Link}
          to="/settings"
          className="flex items-center gap-3 p-2 px-4 py-2 text-lg transition rounded-md hover:bg-gray-100"
        >
          <Settings/>
          Settings
        </DropdownItem>

        {/* Divider */}
        <div className="my-2 border-t" />

        {/* Logout */}
        <div className="px-4 pb-3">
          <Button
            as={Link}
            to="/auth/login"
            size="sm"
            className="w-full gap-3 transition bg-transparent border border-primary text-primary hover:bg-primary hover:text-white"
          >
            <LogOut />
            Logout
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
