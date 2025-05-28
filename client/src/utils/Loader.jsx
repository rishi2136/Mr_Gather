import React from "react";
import "./Loader.css";

const Loader = ({ message = "something want wrong wait for a while" }) => {
  return (
    <div className="loading-base">
      <>
        <div className="loading-box">
          <h4>{message}</h4>
          <ul className="dot-group">
            <li className="dot one"></li>
            <li className="dot two"></li>
            <li className="dot three"></li>
            <li className="dot four"></li>
            <li className="dot five"></li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default Loader;
