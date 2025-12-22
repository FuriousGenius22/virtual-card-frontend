import { Menu } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";
import { IoIosArrowForward } from "react-icons/io";
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
      <div className="flex gap-2">
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

          <span className="text-[15px] font-bold text-[#0D0D0D]">Standard</span>

          <IoIosArrowForward className="text-[#007BFF] text-[16px] ml-1" />
        </button>
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
