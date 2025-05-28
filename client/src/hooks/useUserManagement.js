import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobelContext } from "../context/GlobalContext";

function useUserManagement() {
  const [activeTab, setActiveTab] = useState("add");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Wonderland",
      email: "alice@example.com",
      phone: "111-222-3333",
      hobbies: "Exploring, Tea Parties",
      brief: "A curious explorer who enjoys mad tea parties.",
      address: "123 Looking Glass Lane, Wonderland",
      coords: [-74.006, 40.7128], // Example: New York City
      photo: "https://randomuser.me/api/portraits/women/1.jpg", // Example photo
    },
    {
      id: 2,
      name: "Bob The Builder",
      email: "bob@example.com",
      phone: "444-555-6666",
      hobbies: "Building, Fixing",
      brief: "Can we fix it? Yes, we can!",
      address: "456 Construction Site, Builderton",
      coords: [-0.1278, 51.5074], // Example: London
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Charlie Chaplin",
      email: "charlie@example.com",
      phone: "777-888-9999",
      hobbies: "Filmmaking, Comedy",
      brief: "The iconic tramp, bringing laughter to the world.",
      address: "789 Silent Film Studio, Hollywood",
      coords: [-118.2437, 34.0522], // Example: Los Angeles
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      phone: "000-111-2222",
      hobbies: "Justice, Combat",
      brief: "An Amazonian princess dedicated to peace.",
      address: "Gorakhpur, Uttar Pradesh ",
      coords: [83.364944, 26.765844], // Example: Bangkok (arbitrary for Paradise Island)
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ]);
  const navigate = useNavigate();
  const { setOpenModel } = useGlobelContext();

  console.log("custom_hook", users);

  const handleAddUser = (userInfo) => {
    console.log("userInfo", userInfo);

    const isExist = users.find((u) => u.email === userInfo.email) || null;

    console.log(isExist);

    if (isExist !== -1) {
      return setUsers((prev) =>
        prev.map((u) => (u.id === userInfo.id ? userInfo : u))
      );
    }

    setUsers((prev) => [{ id: prev.length + 1, ...userInfo }, ...prev]);
  };

  console.log("custom_hook2", users);

  const handleEditUser = (id) => {
    const user = users.find((u) => u.id === id);
    navigate("/add-user", { state: user });

    // setNewUser(user);
    // setActiveTab("add");
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSummary = (user) => {
    setOpenModel({ open: true, user });
  };

  const handleViewMore = (userId) => {
    navigate(`/user/${userId}`);
  };

  return {
    activeTab,
    setActiveTab,
    users,

    setUsers,

    handleAddUser,
    handleEditUser,
    handleDeleteUser,
    handleSummary,
    handleViewMore,
  };
}

export default useUserManagement;
