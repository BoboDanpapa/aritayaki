import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app";
import { AppProvider } from "./state/AppContext";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider><AppRoutes /></AppProvider>
    </BrowserRouter>
  </StrictMode>
);
