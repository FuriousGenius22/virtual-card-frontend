import { Menu } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";
import { IoIosArrowForward } from "react-icons/io";
import ProfileAvatar from "../common/ProfileAvatar";
import ProfileDropdown from "../common/ProfileDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AppHeader: React.FC = () => {
  const { toggleSiderbar } = useSiderbar();
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  // The user should always be defined here because this component is rendered inside a ProtectedRoute
  const email = user?.email || "";

  return (
    <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4 px-3 sm:px-4 md:px-6 bg-white">
      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleSiderbar}
          className="p-1.5 sm:p-2 transition rounded-md hover:bg-gray-100 active:bg-gray-200"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <Link to="/dashboard" className="flex-shrink-0">
          <img src="/src/assets/logo.svg" alt="logo" className="h-6 sm:h-8 w-auto" />
        </Link>
      </div>

      {/* CENTER - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:flex gap-2">
        <Link to="/accounts/topUp">
          <button className="flex items-center gap-1.5 sm:gap-2 bg-[#F6F9FC] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-[#E6F0FF] transition">
            <span className="text-xs sm:text-sm md:text-[15px] text-[#6B7280] whitespace-nowrap">Balance</span>
            <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#0D0D0D]">$0</span>
            <span className="text-xs sm:text-sm md:text-[15px] text-[#9CA3AF]">.00</span>
            <IoIosArrowForward className="text-[#007BFF] ml-0.5 sm:ml-1 w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </Link>

        <Link to="/grades">
          <button className="flex items-center gap-1.5 sm:gap-2 bg-[#F6F9FC] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-[#E6F0FF] transition">
            <span className="text-xs sm:text-sm md:text-[15px] text-[#6B7280] whitespace-nowrap">Account level</span>
            <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#0D0D0D] whitespace-nowrap">
              Standard
            </span>
            <IoIosArrowForward className="text-[#007BFF] ml-0.5 sm:ml-1 w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </Link>
      </div>

      {/* RIGHT */}
      <div className="relative flex items-center gap-2 sm:gap-4">
        <ProfileAvatar
          email={email}
          onToggle={() => setOpen((prev) => !prev)}
        />

        {open && (
          <ProfileDropdown
            email={email}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AppHeader;
