/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

type SiderbarContextType = {
  isExpanded: boolean;
  isMobile: boolean;
  toggleSiderbar: () => void;
};

const SiderbarContext = createContext<SiderbarContextType | undefined>(undefined);

export const useSiderbar = () => {
  const ctx = useContext(SiderbarContext);
  if (!ctx) {
    throw new Error("useSiderbar must be used within SiderbarProvider");
  }
  return ctx;
};

export const SiderbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleSiderbar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SiderbarContext.Provider
      value={{
        isExpanded,
        isMobile,
        toggleSiderbar,
      }}
    >
      {children}
    </SiderbarContext.Provider>
  );
};
