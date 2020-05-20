import React from "react";

import DropdownCard from "../../components/DropdownCard";

import "./index.style.scss";

const totalUsers = 3456;
const activeUsers = 56;
const entries = 356;
const prizepool = 1224;

const activeUserOptions = ["Today", "This week", "This monht", "This Year"];
const entriesOptions = ["Week 1", "Week 2", "Week 3"];

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="row info-user">
        <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-between">
          <div className="card card__small">
            <div className="card-label">Total Users</div>
            <div className="card-value">{totalUsers}</div>
          </div>
          <DropdownCard
            label="Entries"
            value={entries}
            options={entriesOptions}
          />
        </div>
        <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-between">
          <DropdownCard
            label="Active Users"
            value={activeUsers}
            options={activeUserOptions}
          />
          <DropdownCard
            label="Prizepool"
            value={prizepool}
            options={entriesOptions}
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card card__normal">
            <div className="card-label">Users Age Range</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card card__normal">
            <div className="card-label">% of correct answers per contest</div>
          </div>
        </div>
      </div>

      <div className="row info-entries">
        <div className="col-md-9">
          <div className="card"></div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-between">
          <div className="card card__small"></div>
          <div className="card card__small"></div>
        </div>
      </div>
      <div className="row info-upcoming">
        <div className="col-sm-12">
          <div className="card">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
