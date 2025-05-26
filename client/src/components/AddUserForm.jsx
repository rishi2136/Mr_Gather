import React from "react";

function AddUserForm({ newUser, setNewUser, handleAddUser }) {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New User
      </h2>
      <div className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 transition-shadow duration-200 hover:shadow-sm"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newUser.photo}
          onChange={(e) => setNewUser({ ...newUser, photo: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 transition-shadow duration-200 hover:shadow-sm"
        />
        <textarea
          placeholder="Brief Description"
          value={newUser.brief}
          onChange={(e) => setNewUser({ ...newUser, brief: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 resize-none h-28 transition-shadow duration-200 hover:shadow-sm"
        ></textarea>
        <button
          onClick={handleAddUser}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 font-medium"
        >
          {newUser.id ? "Update User" : "Add User"}
        </button>
      </div>
    </div>
  );
}

export default AddUserForm;
