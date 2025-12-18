
import {type FC, useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";


import ProfileAvatar from "../common/ProfileAvatar";
import ProfileDropdown from "../common/ProfileDropdown";


const AppHeader: FC = () => {

  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#121a2b]">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-7">
          <button
           
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <Menu />
          </button>

          <Link to="/dashboard">
            <Image
              src="./images/logo.svg"
              alt="Logo"
              className="object-cover"
            />
          </Link>
        </div>

        {/* CENTER */}
        <div className="items-center hidden gap-6 md:flex">
          <Link
            to="/accounts/topUp"
            className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-1.5 text-sm dark:bg-white/10"
          >
            <span className="text-gray-500">Balance</span>
            <span className="text-lg font-semibold">$0</span>
            <span className="text-gray-500">.00</span>
            <span className="text-blue-600">›</span>
          </Link>

          <Link to="/grades" className="flex items-center gap-1 text-sm">
            <span className="text-gray-500">Account</span>
            <span className="font-semibold">Standard</span>
            <span className="text-blue-600">›</span>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center gap-4">
          <ProfileAvatar
            email="Davidyu@gmail.com"
            isOpen={open}
            onToggle={() => setOpen((v) => !v)}
          />

          {open && (
            <ProfileDropdown
              email="Davidyu@gmail.com"
              onClose={() => setOpen(false)}
            />
          )}
        </div>

      </div>
    </header>
  );
};

export default AppHeader;
