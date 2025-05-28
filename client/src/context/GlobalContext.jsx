import React, { createContext, useContext, useEffect, useState } from "react";
import { AddressAutofill, AddressMinimap } from "@mapbox/search-js-react";
import Loader from "../utils/Loader";
// import ShowAddressMap from "../components/ShowAddressMap";
import Model from "../utils/Model";

const GlobalEleContext = createContext({
  openModel: null,
  setOpenModel: () => {},
  users: null,
  setUsers: () => {},
  message: null,
  setMessage: () => {},
  currUser: null,
  setCurrUser: () => {},
});

export const GlobalEleProvider = ({ children }) => {
  const [openModel, setOpenModel] = useState({
    open: false,
    user: null,
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  const user = JSON.parse(localStorage.getItem("user")) || null;

  useEffect(() => {
    if (user) {
      setCurrUser(user);
    }
  }, []);
  // const addressInfo = { coords: [27.1767, 78.0081], placeName: "Agra, India" };
  // const addressInfo = {
  //   coords: { lng: 27.1767, lat: 78.0081 },
  //   placeName: "Agra, India",
  // };

  return (
    <>
      <GlobalEleContext.Provider
        value={{
          openModel,
          setOpenModel,
          users,
          setUsers,
          message,
          setMessage,
          currUser,
          setCurrUser,
        }}
      >
        {children}
        {<Model openModel={openModel} setOpenModel={setOpenModel} />}
        {message && <Loader message={message} />}
      </GlobalEleContext.Provider>
    </>
  );
};

export const useGlobelContext = () => {
  const context = useContext(GlobalEleContext);
  return context;
};
