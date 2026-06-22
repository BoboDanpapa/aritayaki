import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./app";
import { AppProvider } from "./state/AppContext";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <AppProvider><AppRoutes /></AppProvider>
    </HashRouter>
  </StrictMode>
);
