import { type FC } from "react";
import { Avatar, Switch, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../context/SiderbarContext";
import { Menu } from "lucide-react";
import Profile from "../common/Profile";

const AppHeader: FC = () => {

    const { toggleSidebar, toggleMobileSidebar } = useSidebar();

    const handleToggle = () => {
        window.innerWidth >= 1024
            ? toggleSidebar()
            : toggleMobileSidebar();
    };

    return (
        <header
            className="sticky top-0 z-40 w-full bg-white dark:bg-[#121a2b]"
        >
            <div className="flex items-center justify-between h-16 px-4 lg:px-6">
                {/* LEFT */}
                <div className="flex items-center gap-7">
                    <button
                        onClick={handleToggle}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                        <Menu />
                    </button>
                    <Link to="/dashboard">
                        <Image
                            src="./images/logo.svg"
                            fallbackSrc="/default-avatar.jpg"
                            alt="User avatar"
                            className="object-cover"
                            sizes="lg"
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

                    <Link
                        to="/grades"
                        className="flex items-center gap-1 text-sm"
                    >
                        <span className="text-gray-500">Account</span>
                        <span className="font-semibold">Standard</span>
                        <span className="text-blue-600">›</span>
                    </Link>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    {/* <Avatar
                        isBordered
                        size="md"
                        icon={
                            <Image
                                src="./images/user/owner.jpg"
                                fallbackSrc="/default-avatar.jpg"
                                alt="User avatar"
                                className="object-cover"
                            />
                        }
                    /> */}
                    <Profile />
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
