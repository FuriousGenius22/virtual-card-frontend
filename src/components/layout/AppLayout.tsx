import { Outlet } from "react-router";
import { SiderbarProvider, useSiderbar } from "../../context/SiderbarContext";
import AppHeader from "./AppHeader";
import AppSiderbar from "./AppSiderbar";

const LayoutContent: React.FC = () => {
  const { isExpanded } = useSiderbar();

  return (
    <div className="flex h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 bg-white">
        <AppHeader />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`
            shrink-0 border-r bg-white
            transition-all duration-300 ease-in-out
            ${isExpanded ? "w-64" : "w-20"}
          `}
        >
          <AppSiderbar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
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
