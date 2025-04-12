import { useState } from "react";
import "./dashboard.css";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Status } from "./Status";
import { DepartmentStatus } from "./DepartmentStatus";
import { Alerts } from "./Alerts";

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
          {/* Stats Row */}
          <Status />
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Department Status */}
            <DepartmentStatus />

            {/* Recent Alerts */}
            <Alerts />
          </div>
        </main>
      </div>
    </div>
  );
};
