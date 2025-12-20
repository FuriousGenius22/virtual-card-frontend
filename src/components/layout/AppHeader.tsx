import { Menu } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";
import ProfileAvatar from "../common/ProfileAvatar";
import ProfileDropdown from "../common/ProfileDropdown";
import { useState } from "react";

const AppHeader: React.FC = () => {
  const { toggleSiderbar } = useSiderbar();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-16 items-center gap-4 px-6 border-b bg-white justify-between">
      <div className="flex gap-4 items-center">
        <button
          onClick={toggleSiderbar}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6" />
        </button>

        <img src="/src/assets/logo.svg" alt="logo" className="h-8" />
      </div>
      <div className="flex gap-4 justify-evenly">
        <div className="rounded-[5px] bg-gray-100 duration-300 cursor-pointer p-2">
          Balance $0.00
        </div>
        <div className="rounded-[5px] bg-gray-100 duration-300 cursor-pointer p-2">
          Account level Standard
        </div>
      </div>
      <div className="relative flex items-center gap-4">
        <ProfileAvatar
          email="someone@gmail.com"
          isOpen={open}
          onToggle={() => setOpen((prev) => !prev)}
        />

        {open && (
          <ProfileDropdown
            email="someone@gmail.com"
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AppHeader;
