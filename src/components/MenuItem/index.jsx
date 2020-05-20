import React from "react";

import history from "../../history";
import "./index.style.scss";
const MenuItem = ({ menuName, menuIcon, path }) => {
  return (
    <div className="menu-item" onClick={() => history.push(path)}>
      <div className="menu-icon">
        <img src={menuIcon} alt="description"></img>
      </div>
      <div className="menu-name">{menuName}</div>
    </div>
  );
};

export default MenuItem;
