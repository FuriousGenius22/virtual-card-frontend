import { Menu } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";
import ProfileAvatar from "../common/ProfileAvatar";
import ProfileDropdown from "../common/ProfileDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  const { toggleSiderbar } = useSiderbar();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-16 gap-4 px-6 bg-white border-b-0">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSiderbar}
          className="p-2 transition rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>

        <Link to="/dashboard"><img src="/src/assets/logo.svg" alt="logo" className="h-8" /></Link>
      </div>
      <div className="flex gap-4 justify-evenly">
        <Link to="/accounts/topUp"><div className="rounded-[5px] bg-white hover:bg-gray-100 duration-300 cursor-pointer p-2">
          Balance $0.00
        </div></Link>
        <Link to="/grades"><div className="rounded-[5px] bg-white hover:bg-gray-100 duration-300 cursor-pointer p-2">
          Account level Standard
        </div></Link>
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
