import Sidebar from "./Sidebar.jsx";
import AddUserForm from "./AddUserForm.jsx";
import UserCard from "./UserCard.jsx";
import useUserManagement from "../hooks/useUserManagement.js";
import React from "react";

function Dashboard() {
  const {
    activeTab,
    setActiveTab,
    users,
    newUser,
    setNewUser,
    handleAddUser,
    handleEditUser,
    handleDeleteUser,
    handleSummary,
    handleViewMore,
  } = useUserManagement();

  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 ml-64 p-8">
        {activeTab === "add" && (
          <AddUserForm
            newUser={newUser}
            setNewUser={setNewUser}
            handleAddUser={handleAddUser}
          />
        )}
        {activeTab === "list" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                handleEditUser={handleEditUser}
                handleDeleteUser={handleDeleteUser}
                handleSummary={handleSummary}
                handleViewMore={handleViewMore}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
