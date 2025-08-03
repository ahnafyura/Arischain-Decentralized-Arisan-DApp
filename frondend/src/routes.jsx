import { Routes, Route } from "react-router-dom";
import App from "./App";
import Join from "./pages/Join";
import Create from "./pages/Create";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardMember from "./pages/DashboardMember";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/join" element={<Join />} />
      <Route path="/create" element={<Create />} />
      <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      <Route path="/dashboard-member" element={<DashboardMember />} />
    </Routes>
  );
}

export default AppRoutes;
