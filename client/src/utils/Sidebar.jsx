import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useGlobelContext } from "../context/GlobalContext";

function Sidebar({ activeTab }) {
  const navigate = useNavigate();
  const { currUser } = useGlobelContext();

  function handleNavigate(tab) {
    if (tab === "add") {
      navigate("/add-user");
    } else if (tab === "list") {
      navigate("/");
    }
  }
  console.log(currUser);

  return (
    <div
      className={` bg-white shadow-lg ${
        currUser?.isAdmin !== false ? "block" : "none"
      } md:w-64  md:h-screen md:fixed h-auto w-full sticky flex md:block top-16`}
    >
      <nav className="mt-2 flex md:block w-full">
        <button
          className={`w-full text-left px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 focus:bg-blue-100 focus:text-blue-700 ${
            activeTab === "add" ? "bg-gray-50 border-l-4 border-blue-600" : ""
          }`}
          onClick={() => handleNavigate("add")}
        >
          Add User
        </button>
        <button
          className={`w-full text-left px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 focus:bg-blue-100 focus:text-blue-700 ${
            activeTab === "list" ? "bg-gray-50 border-l-4 border-blue-600" : ""
          }`}
          onClick={() => handleNavigate("list")}
        >
          User List
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
