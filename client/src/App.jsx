import React from "react";
import { useEffect, useState } from "react";

import { GlobalEleProvider, useGlobelContext } from "./context/GlobalContext";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "./utils/Sidebar";
import Navber from "./utils/Navber";
import Loader from "./utils/Loader";

const App = () => {
  const { currUser } = useGlobelContext();
  console.log(currUser);

  return (
    <>
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
    </>
  );
};

export default App;
