import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ErrorPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  // Function to handle going back to the home page
  const handleGoHome = () => {
    navigate("/"); // Navigates to the root path (your home page)
  };

  return (
    // Main container for the entire page, centered vertically and horizontally
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 sm:p-6">
      {/* Content card for the 404 message */}
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl text-center max-w-lg w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        {/* Large 404 text */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-gray-800 mb-4 ">
          404
        </h1>
        {/* Page not found heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
          Page Not Found
        </h2>
        {/* Descriptive message */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Oops! It looks like the page you're looking for doesn't exist. It
          might have been moved or deleted.
        </p>
        {/* Go Home button */}
        <button
          onClick={handleGoHome}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
