import React from "react";
import UserLocationMap from "../components/UserLocationMap";

const Model = ({ openModel, setOpenModel }) => {
  if (!openModel?.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-95 ">
      <div className="bg-white h-[480px] rounded-lg shadow-lg w-full max-w-xl p-6 relative">
        <button
          className="float-end clear-left text-gray-600 hover:text-black text-xl font-bold p-4 bg-amber-100 z-[999] cursor-pointer"
          onClick={() => setOpenModel({ open: false, user: null })}
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-2 text-center text-green-600 w-fit m-auto">
          {openModel?.user?.name}
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          {openModel?.user?.brief}
        </p>

        <div className="h-64">
          <UserLocationMap
            coords={openModel?.user?.coords}
            address={openModel?.user?.address}
          />
        </div>
      </div>
    </div>
  );
};

export default Model;
