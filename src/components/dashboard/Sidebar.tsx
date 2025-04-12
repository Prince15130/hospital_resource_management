import {
  BarChart2,
  Bed,
  Home,
  Menu,
  Settings,
  Users,
  X,
  Clipboard,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div
      className={`bg-white shadow-lg fixed h-full z-10 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {isSidebarOpen && (
          <h1 className="text-xl font-bold text-blue-600">Bayer HealthCare</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="mt-6">
        <NavLink
          to="/dashboard"
          className={`menu-item ${
            activeTab === "dashboard" ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          <Home size={20} />
          {isSidebarOpen && <span className="ml-4">Dashboard</span>}
        </NavLink>
        <NavLink
          to="/dashboard/beds"
          className={`menu-item ${
            activeTab === "beds" ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("beds")}
        >
          <Bed size={20} />
          {isSidebarOpen && <span className="ml-4">Bed Management</span>}
        </NavLink>
        <NavLink
          className={`menu-item ${
            activeTab === "patients" ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("patients")}
        >
          <Users size={20} />
          {isSidebarOpen && <span className="ml-4">Patients</span>}
        </NavLink>
        <NavLink
          className={`menu-item ${
            activeTab === "resources" ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("resources")}
        >
          <Clipboard size={20} />
          {isSidebarOpen && <span className="ml-4">Resources</span>}
        </NavLink>
        <NavLink
          className={`menu-item ${
            activeTab === "reports" ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("reports")}
        >
          <BarChart2 size={20} />
          {isSidebarOpen && <span className="ml-4">Reports</span>}
        </NavLink>
        <NavLink
          className={`menu-item ${
            activeTab === "settings" ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings size={20} />
          {isSidebarOpen && <span className="ml-4">Settings</span>}
        </NavLink>
      </nav>
    </div>
  );
};
