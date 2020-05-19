import React from "react";
import "./index.style.scss";
const SetupItem = ({ itemName, itemIcon }) => {
  return (
      <div className="setup-item">
        <div className="item-icon"><img src={itemIcon} alt="description"></img></div>
        <div className="item-name">{itemName}</div>
      </div>
  )
};

export default SetupItem;
