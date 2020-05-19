import React from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./index.style.scss";

const Datatable = (props) => {
  return (
    <div className="datatable-container">
      <Table className="datatable">
        <thead>
          <tr>
            <th className="cell-select">
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </th>
            <th>Status</th>
            <th>Applicant</th>
            <th>Role</th>
            <th>Age</th>
            <th>Date</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <span className="blank">
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </th>
            <td className="status"><span className="green"></span></td>
            <td>Mickey Mouse</td>
            <td>Jockey</td>
            <td>24</td>
            <td>Sat Apr 14</td>
            <td>10</td>
            <td className="action">
              <FontAwesomeIcon className="view" icon={faEye} />
              <FontAwesomeIcon className="check" icon={faCheckCircle} />
              <FontAwesomeIcon className="cancel" icon={faTimesCircle} />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span className="blank">
                <FontAwesomeIcon icon={faCheck} />
              </span>            
            </th>
            <td className="status"><span className="red"></span></td>
            <td>Donald Duck</td>
            <td>Trainer</td>
            <td>39</td>
            <td>Sat Apr 14</td>
            <td>12</td>
            <td className="action">
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span className="blank">
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </th>
            <td className="status"><span className="green"></span></td>
            <td>Richard West</td>
            <td>Catering</td>
            <td>56</td>
            <td>Sat Apr 14</td>
            <td>15</td>
            <td className="action">
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </th>
            <td className="status"><span className="amber"></span></td>
            <td>Josh Turk</td>
            <td>Owner</td>
            <td>23</td>
            <td>Sat Apr 14</td>
            <td>11</td>
            <td className="action">
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="datatable-footer">
        <div className="button-group">
          <Button className="success-selected">
            <FontAwesomeIcon icon={faCheckCircle} />
            Approve Selected
          </Button>
          <Button className="success-all">
            <FontAwesomeIcon icon={faCheckCircle} />
            Approve All
          </Button>
        </div>
        <div className="button-group">
          <Button className="reject-selected">
            <FontAwesomeIcon icon={faTimesCircle} />
            Reject Selected
          </Button>
          <Button className="reject-all">
            <FontAwesomeIcon icon={faTimesCircle} />
            Reject All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
