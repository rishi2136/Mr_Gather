import React from "react";
import { useEffect, useState } from "react";

import { GlobalEleProvider, useGlobelContext } from "./context/GlobalContext";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "./utils/Sidebar";
import Navber from "./utils/Navber";

const App = () => {
  // const [isAdmin, setIsAdmin] = useState(false);

  // // const { isAdmin } =
  // //   JSON.parse(localStorage.getItem("user") || "{}").isAdmin || false;
  // useEffect(() => {
  //   try {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     setIsAdmin(user?.isAdmin);
  //   } catch (err) {
  //     console.error("Error parsing user from localStorage:", err);
  //   }
  // }, []);

  const { currUser } = useGlobelContext();

  return (
    <>
      <GlobalEleProvider>
        <Navber />

        <div className="relative h-screen w-full flex md:flex-row flex-col">
          {currUser?.isAdmin && <Sidebar />}
          <div
            className={`flex-grow ${
              currUser?.isAdmin ? " ms-0 md:ms-64" : "ms-0"
            } `}
          >
            <Outlet context={{ isAdmin: currUser?.isAdmin }} />
          </div>
        </div>

        <Toaster richColors />
      </GlobalEleProvider>
    </>
  );
};

export default App;
