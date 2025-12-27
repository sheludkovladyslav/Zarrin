import React from "react";
import navLogo from "../Header/nav__logo.svg";

export const Logo = ({ style = "" }) => {
  return (
    <div className={`nav__logo logo ${style}`}>
      <div className="logo__container">
        <img src={navLogo} alt="" className="logo__picture" />
      </div>
      <a href="" className="logo__text logo__text--footer">
        Zarrin
      </a>
    </div>
  );
};
