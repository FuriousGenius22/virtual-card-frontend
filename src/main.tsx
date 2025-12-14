import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { AppWrapper } from "./components/common/PageMeta";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </NextUIProvider>
  </React.StrictMode>
);
