import { Outlet } from "react-router";
import { SiderbarProvider, useSiderbar } from "../../context/SiderbarContext";
import AppHeader from "./AppHeader";
import AppSiderbar from "./AppSiderbar";

const LayoutContent: React.FC = () => {
  const { isExpanded, toggleSiderbar } = useSiderbar();

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <AppHeader />
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Hidden on mobile by default, overlay when opened */}
        <aside
          className={`
            shrink-0 border-r border-gray-200 bg-white
            transition-all duration-300 ease-in-out
            fixed md:relative
            h-full md:h-auto
            z-30 md:z-auto
            ${isExpanded ? "w-64" : "w-0 md:w-20"}
            ${isExpanded ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            ${!isExpanded ? "hidden md:block" : "block"}
          `}
        >
          <AppSiderbar />
        </aside>

        {/* Overlay for mobile sidebar */}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={toggleSiderbar}
          />
        )}

        <main className="flex-1 overflow-y-auto bg-white md:ml-0">
          <div className="px-4 sm:px-6 py-4 sm:py-6 mx-auto max-w-7xl w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SiderbarProvider>
      <LayoutContent />
    </SiderbarProvider>
  );
};

export default AppLayout;
