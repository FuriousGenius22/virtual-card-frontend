import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { AppWrapper } from "./components/common/PageMeta";
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextThemesProvider attribute="class" defaultTheme="light">
      <NextUIProvider>
        <AppWrapper>
          <App />
        </AppWrapper>
      </NextUIProvider>
    </NextThemesProvider>
  </React.StrictMode>
);
