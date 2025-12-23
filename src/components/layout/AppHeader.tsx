import { Menu } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";
import { IoIosArrowForward } from "react-icons/io";
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
      <div className="flex gap-2">
        <Link to="/accounts/topUp">
          <button
            className="
        flex items-center gap-2
        bg-[#F6F9FC]
        px-5 py-2.5
        rounded-xl
        transition-all duration-200
        hover:bg-[#E6F0FF]
        select-none
      "
          >
            <span className="text-[15px] font-normal text-[#6B7280]">
              Balance
            </span>

            <span className="text-[15px] font-bold text-[#0D0D0D]">$0</span>

            <span className="text-[15px] font-normal text-[#9CA3AF]">.00</span>

            <IoIosArrowForward className="text-[#007BFF] text-[16px] ml-1" />
          </button>
        </Link>
        <Link to="/grades">
          <button
            className="
        flex items-center gap-2
        bg-[#F6F9FC]
        px-5 py-2.5
        rounded-xl
        transition-all duration-200
        hover:bg-[#E6F0FF]
        select-none
      "
          >
            <span className="text-[15px] font-normal text-[#6B7280]">
              Account level
            </span>

            <span className="text-[15px] font-bold text-[#0D0D0D]">
              Standard
            </span>

            <IoIosArrowForward className="text-[#007BFF] text-[16px] ml-1" />
          </button>
        </Link>
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
