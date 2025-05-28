import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { toast } from "sonner"; // Assuming you use sonner for notifications
import Loader from "../utils/Loader";

// Assume you have a mock database or an API to fetch users
// For this example, we'll use a simple mock array like the `users` from your db.js
import users from "../db"; // Adjust path if your db.js is located elsewhere
import UserLocationMap from "../components/UserLocationMap";

// Your Mapbox Access Token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN; // Ensure this is correctly set

const UserDetailView = () => {
  const { userId } = useParams(); // Get the user ID from the URL parameters
  const navigate = useNavigate(); // For navigating back

  const [user, setUser] = useState(null); // State to store the user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state for user not found

  useEffect(() => {
    // Simulate fetching user data based on userId
    const fetchedUser = users.find((u) => u.id === parseInt(userId));

    if (fetchedUser) {
      setUser(fetchedUser);
      setLoading(false);
    } else {
      setError("User not found!");
      setLoading(false);
      toast.error("User not found!");
      navigate("/");
    }
  }, [userId, navigate]); // Re-run if userId changes

  if (loading) {
    return <Loader message={"Loading Content"} />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate("/")} // Assuming '/users' is your user list page
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Go to User List
          </button>
        </div>
      </div>
    );
  }

  // If user data is available, render the details
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#F3F4F6]  flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-blue-200 animate-fadeIn">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-400">
            User Profile
          </h2>
          <button
            onClick={() => navigate(-1)} // Go back to the previous page
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md transition"
          >
            &larr; Back
          </button>
        </div>

        {/* User Photo (Placeholder) */}
        <div className="flex justify-center mb-8">
          <img
            src={
              user.photo ||
              `https://via.placeholder.com/150/ADD8E6/FFFFFF?text=${user.name.charAt(
                0
              )}`
            }
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-md"
          />
        </div>

        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-lg">
          <div className="detail-item">
            <strong className="text-blue-400">Name:</strong> {user.name}
          </div>
          <div className="detail-item">
            <strong className="text-blue-400">Email:</strong> {user.email}
          </div>
          <div className="detail-item">
            <strong className="text-blue-400">Phone:</strong> {user.phone}
          </div>
          <div className="detail-item">
            <strong className="text-blue-400">Hobbies:</strong> {user.hobbies}
          </div>
          <div className="detail-item md:col-span-2">
            <strong className="text-blue-400">About Me:</strong>{" "}
            {user.brief || "No brief provided."}
          </div>
          <div className="detail-item md:col-span-2">
            <strong className="text-blue-400">Address:</strong>{" "}
            {user.address || "Address not available."}
          </div>
        </div>

        {/* Map Section */}

        <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">
          User Location
        </h3>
        {user.coords ? (
          <UserLocationMap coords={user.coords} address={user.address} />
        ) : (
          <p className="text-center text-gray-500">
            Location coordinates not available for this user.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserDetailView;
