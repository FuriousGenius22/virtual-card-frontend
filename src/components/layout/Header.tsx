import React from "react";
import Logo from "../../assets/logo.svg";
import { MessageSquare, Globe } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="e.PN logo"
            className="h-[40px] w-auto"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 text-white text-sm">
          
          {/* Online Chat */}
          <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-full border border-transparent hover:border-white transition">
            <MessageSquare size={16} />
            <span>Online Chat</span>
          </div>

          {/* Divider */}
          <span className="h-4 w-px bg-white/20" />

          {/* Language */}
          <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-full border border-transparent hover:border-white transition">
            <Globe size={16} />
            <span>EN</span>
          </div>

          {/* Login Button */}
          <button className="relative group px-5 py-1.5 rounded-full  border border-[#E7C9A5] text-white overflow-hidden">
            Login / Sign Up
            {/* Rotating outline */}
            <span className="absolute -inset-1 border-[4px] border-[#E7C9A5] rounded-full opacity-0 group-hover:opacity-100 transform-gpu group-hover:-rotate-10 transition-all duration-300 pointer-events-none"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
