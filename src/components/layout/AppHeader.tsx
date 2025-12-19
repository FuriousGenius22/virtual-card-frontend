import { Menu } from "lucide-react";
import { useSiderbar } from "../../context/SiderbarContext";

const AppHeader: React.FC = () => {
  const { toggleSiderbar } = useSiderbar();

  return (
    <div className="flex h-16 items-center gap-4 px-6 border-b bg-white">
      <button
        onClick={toggleSiderbar}
        className="p-2 rounded-md hover:bg-gray-100 transition"
      >
        <Menu className="w-6 h-6" />
      </button>

      <img src="/src/assets/logo.svg" alt="logo" className="h-8" />
    </div>
  );
};

export default AppHeader;
