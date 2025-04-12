import { useState } from "react";
import "./dashboard.css";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Home } from "./Home";
import { useLocation } from "react-router";
import { BedManagement } from "../bed-management/BedManagement";

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const isDashboardPage = path === "dashboard" || path === undefined;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Header */}
        <Header />
        <main className="p-6">
          {isDashboardPage === true ? <Home /> : <BedManagement />}
        </main>
      </div>
    </div>
  );
};
