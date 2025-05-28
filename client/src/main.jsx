import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import FormWithMapbox from "./pages/FormWithMapbox.jsx";
import UserList from "./pages/UserList.jsx";
import ErrorPage from "./utils/ErrorPage.jsx";
import UserDetailView from "./pages/UserDetailView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-user",
        element: <FormWithMapbox />,
      },
      {
        path: "/user/:userId", // New route for user details, :userId is a dynamic parameter
        element: <UserDetailView />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
