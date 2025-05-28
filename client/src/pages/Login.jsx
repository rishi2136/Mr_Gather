import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure react-router-dom is installed
import { useGlobelContext } from "../context/GlobalContext";

// No need to import './Login.css' anymore

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    isAdmin: false,
  });
  const { setMessage } = useGlobelContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Saving the user to our platform");

    localStorage.setItem("user", JSON.stringify(userInfo));

    setUserInfo({
      name: "",
      email: "",
      isAdmin: false,
    });

    window.location.href = "/";
    setMessage(null);
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    // Centering the form on the page
    <div className="h-full bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">
          Enter Your Information
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Full Name Input */}
          <div className="text-left">
            <label
              htmlFor="name-input"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Full Name:
            </label>
            <input
              id="name-input"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
              type="text"
              name="name"
              placeholder="Your full name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="text-left">
            <label
              htmlFor="email-input"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email:
            </label>
            <input
              id="email-input"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
              type="email"
              name="email"
              placeholder="Your email address"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* isAdmin Checkbox */}
          <div className="flex items-center justify-start text-left">
            <input
              id="admin-checkbox"
              type="checkbox"
              name="isAdmin"
              checked={userInfo.isAdmin}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
            />
            <label
              htmlFor="admin-checkbox"
              className="ml-3 text-gray-700 text-base font-medium cursor-pointer"
            >
              Login as Admin
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
