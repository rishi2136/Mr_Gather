import { useState } from "react";

function useUserManagement() {
  const [activeTab, setActiveTab] = useState("add");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      photo: "https://via.placeholder.com/100",
      brief: "Software Engineer with 5 years of experience in web development.",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "https://via.placeholder.com/100",
      brief: "Product Manager specializing in agile methodologies.",
    },
  ]);
  const [newUser, setNewUser] = useState({ name: "", photo: "", brief: "" });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.photo && newUser.brief) {
      if (newUser.id) {
        setUsers(users.map((u) => (u.id === newUser.id ? { ...newUser } : u)));
      } else {
        setUsers([...users, { id: users.length + 1, ...newUser }]);
      }
      setNewUser({ name: "", photo: "", brief: "" });
      setActiveTab("list");
    }
  };

  const handleEditUser = (id) => {
    const user = users.find((u) => u.id === id);
    setNewUser(user);
    setActiveTab("add");
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleSummary = (user) => {
    alert(`Summary for ${user.name}: ${user.brief}`);
  };

  const handleViewMore = (user) => {
    alert(`Viewing more details for ${user.name}`);
  };

  return {
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
  };
}

export default useUserManagement;
