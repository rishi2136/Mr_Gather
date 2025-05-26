import React from "react";
function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
      </div>
      <nav className="mt-2">
        <button
          className={`w-full text-left px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 ${
            activeTab === "add" ? "bg-gray-50 border-l-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("add")}
        >
          Add User
        </button>
        <button
          className={`w-full text-left px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 ${
            activeTab === "list" ? "bg-gray-50 border-l-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("list")}
        >
          User List
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
