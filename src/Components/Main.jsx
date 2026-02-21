import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Expenses from "./Expenses";
import Settings from "./Settings";

const Main = () => {
  return (
    <div className="flex h-screen bg-[rgb(12,18,33)]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
