import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utilities/constants";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1>{CONSTANTS.NOT_FOUND.TITLE}</h1>
      <p>{CONSTANTS.NOT_FOUND.MESSAGE}</p>
      <Link to="/" className="homeLink">
        {CONSTANTS.NOT_FOUND.HOME_LINK}
      </Link>
    </div>
  );
};

export default NotFound;
