import { Search, Bell } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>

      <div className="flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <div className="relative mr-4">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
          AD
        </div>
      </div>
    </header>
  );
};
