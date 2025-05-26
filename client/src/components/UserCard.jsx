import React from "react";

function UserCard({
  user,
  handleEditUser,
  handleDeleteUser,
  handleSummary,
  handleViewMore,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src={user.photo}
        alt={user.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-200 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {user.name}
      </h3>
      <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">
        {user.brief}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => handleEditUser(user.id)}
          className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-colors duration-200 text-sm font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteUser(user.id)}
          className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-200 text-sm font-medium"
        >
          Delete
        </button>
        <button
          onClick={() => handleSummary(user)}
          className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 text-sm font-medium"
        >
          Summary
        </button>
        <button
          onClick={() => handleViewMore(user)}
          className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-200 text-sm font-medium"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default UserCard;
