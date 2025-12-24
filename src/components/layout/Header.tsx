import React from "react";
import Logo from "../../assets/logo.svg";
import { MessageSquare, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black">
      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 md:px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="e.PN logo" className="h-7 sm:h-8 md:h-[40px] w-auto" />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm">
          {/* Online Chat — hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer px-2 py-1 rounded-full border border-transparent hover:border-white transition">
            <MessageSquare size={16} />
            <span>Online Chat</span>
          </div>

          {/* Divider — hidden on mobile */}
          <span className="hidden md:block h-4 w-px bg-white/20" />

          {/* Language — hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer px-2 py-1 rounded-full border border-transparent hover:border-white transition">
            <Globe size={16} />
            <span>EN</span>
          </div>

          {/* Login Button — always visible */}
          <Link to="/auth.epn">
            <button className="relative group px-3 sm:px-4 md:px-5 py-1.5 rounded-full border border-[#E7C9A5] text-white overflow-hidden text-xs sm:text-sm whitespace-nowrap">
              Login / Sign Up
              {/* Rotating golden outline */}
              <span className="absolute -inset-1 border-[4px] border-[#E7C9A5] rounded-full opacity-0 group-hover:opacity-100 transform-gpu group-hover:-rotate-10 transition-all duration-300 pointer-events-none" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
