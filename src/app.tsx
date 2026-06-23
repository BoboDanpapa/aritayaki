import { Route, Routes } from "react-router-dom";
import { PageShell } from "./components/PageShell";
import { CollectionPage } from "./pages/CollectionPage";
import { ConditionPage } from "./pages/ConditionPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { ForChefsPage } from "./pages/ForChefsPage";
import { HeritagePage } from "./pages/HeritagePage";
import { SelectionPage } from "./pages/SelectionPage";
import { VesselPage } from "./pages/VesselPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route path="/" element={<HeritagePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/vessels/:slug" element={<VesselPage />} />
        <Route path="/heritage" element={<HeritagePage />} />
        <Route path="/condition" element={<ConditionPage />} />
        <Route path="/for-chefs" element={<ForChefsPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/inquiry-confirmation" element={<ConfirmationPage />} />
      </Route>
    </Routes>
  );
}
