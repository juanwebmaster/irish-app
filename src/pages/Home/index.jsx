import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./index.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Datatable from "../../components/Datatable";

const Home = (props) => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="home-container">
      <div className="panel pending-applications">
        <div className="panel-header">
          <div className="header-title">Pending Applications</div>
          <div className="header-search">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" name="search" placeholder="Find Application" />
          </div>
        </div>
        <div className="panel-body">
          <Nav tabs>
            <NavItem className="custom-item">
              <NavLink
                className={`custom-tab ${classnames({
                  active: activeTab === "1",
                })}`}
                onClick={() => {
                  toggle("1");
                }}
              >
                <FontAwesomeIcon className="right-away" icon={faUser} />
                New Application
              </NavLink>
            </NavItem>
            <NavItem className="custom-item">
              <NavLink
                className={`custom-tab ${classnames({
                  active: activeTab === "2",
                })}`}
                onClick={() => {
                  toggle("2");
                }}
              >
                All Status
              </NavLink>
            </NavItem>
            <NavItem className="custom-item">
              <NavLink
                className={`custom-tab ${classnames({
                  active: activeTab === "3",
                })}`}
                onClick={() => {
                  toggle("3");
                }}
              >
                <span className="green"></span>
                Green
              </NavLink>
            </NavItem>
            <NavItem className="custom-item">
              <NavLink
                className={`custom-tab ${classnames({
                  active: activeTab === "4",
                })}`}
                onClick={() => {
                  toggle("4");
                }}
              >
                <span className="amber"></span>
                Amber
              </NavLink>
            </NavItem>
            <NavItem className="custom-item">
              <NavLink
                className={`custom-tab ${classnames({
                  active: activeTab === "5",
                })}`}
                onClick={() => {
                  toggle("5");
                }}
              >
                <span className="red"></span>
                Red
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Datatable />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <h4>Tab 3 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <h4>Tab 4 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5">
              <Row>
                <Col sm="12">
                  <h4>Tab 5 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Home;
