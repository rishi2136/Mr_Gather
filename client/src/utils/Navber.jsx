import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGlobelContext } from "../context/GlobalContext";

const Navber = () => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user")) || {};

  const { currUser, setCurrUser } = useGlobelContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("You logout successfully");
    setCurrUser(null);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-amber-50 title-header sticky top-0 w-full ">
      <h1 className="text-2xl font-bold text-gray-800 rounded-2xl bg-amber-200 p-2">
        Mr_Gather
      </h1>
      <span>
        {currUser?.email ? (
          <button
            className="rounded bg-blue-100 text-blue-700 py-2 px-4 ms-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="rounded bg-green-100 text-green-700 py-2 px-4 ms-2"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </span>
    </div>
  );
};

export default Navber;
