import { SidebarProvider, useSidebar } from "../../context/SiderbarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppSiderbar from "./AppSiderbar";

const LayoutContent: React.FC = () => {
    const { isExpanded, isMobileOpen } = useSidebar();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            <header className="sticky top-0 z-40 w-full bg-white border-b">
                <AppHeader />
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside
                    className={`
            relative min-h-screen shrink-0 border-r bg-white
            transition-all duration-300 ease-in-out
            ${isExpanded ? "w-60" : "w-24"}
          `}
                >
                    <AppSiderbar />
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto">
                    <div
                        className={`
              mx-auto w-full max-w-7xl
              px-4 py-6 md:px-6 lg:px-8
              transition-all duration-300
            `}
                    >
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

const AppLayout: React.FC = () => {
    return (
        <SidebarProvider>
            <LayoutContent />
        </SidebarProvider>
    );
};

export default AppLayout;
