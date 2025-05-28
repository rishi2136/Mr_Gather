import React from "react";
// import { useOutletContext } from "react-router-dom";
import { useGlobelContext } from "../context/GlobalContext";

function UserCard({
  user = "",
  handleEditUser = () => {},
  handleDeleteUser = () => {},
  handleSummary = () => {},
  handleViewMore = () => {},
}) {
  // const isAdmin = JSON.parse(localStorage.getItem("user"));
  // const { isAdmin } = useOutletContext();
  const { currUser } = useGlobelContext();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl mx-auto my-4 flex items-center p-6 gap-6 border border-gray-200">
      {/* Profile Image */}
      <img
        src={user.photo}
        alt={user.name}
        className="w-28 h-28 rounded-full object-cover border-4 border-emerald-200 shadow-md"
      />

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-4 line-clamp-2">
          {user.brief}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {currUser?.isAdmin && (
            <>
              <button
                onClick={() => handleEditUser(user.id)}
                className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-all duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-all duration-200"
              >
                Delete
              </button>
            </>
          )}

          <button
            onClick={() => handleSummary(user)}
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-all duration-200"
          >
            Summary
          </button>
          <button
            onClick={() => handleViewMore(user.id)}
            className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-all duration-200"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
