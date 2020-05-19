import React from "react";
import "./index.style.scss";
const MenuItem = ({ menuName, menuIcon }) => {
  return (
      <div className="menu-item">
        <div className="menu-icon"><img src={menuIcon} alt="description"></img></div>
        <div className="menu-name">{menuName}</div>
      </div>
  )
};

export default MenuItem;
