import React from "react";

import "./style.scss";

const DropdownCard = ({ label, value, options, type }) => {
  return (
    <div className="card card__small">
      <div className="card-label-select">
        <span className="card-label">{label}</span>
        <select>
          {options.map((option, index) => (
            <option key={`${option}-${index}`}>{option}</option>
          ))}
        </select>
      </div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default DropdownCard;
