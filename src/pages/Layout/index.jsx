import React, { Fragment } from "react";
import { Route, Router, Switch, useLocation } from "react-router-dom";

import history from "../../history";
import Routes from "../../constants/Routes";

import Home from "../Home";
import Setup from "../Setup";
import Messaging from "../Messaging";
import Meetings from "../Meetings";
import Statistics from "../Statistics";
import MenuItem from "../../components/MenuItem";
import CreateMessageForm from "../../components/CreateMessageForm";

import AvatarImg from "../../assets/avatar.png";
import Logo from "../../assets/logo.png";
import HomeSelIcon from "../../assets/home_icon_sel.png";
import HomeIcon from "../../assets/home_icon.png";
import MeetingsIcon from "../../assets/meetings_icon.png";
import MeetingsSelIcon from "../../assets/meetings_icon.png";
import MessagingIcon from "../../assets/messaging_icon.png";
import MessagingSelIcon from "../../assets/messaging_icon_sel.png";
import StatisticsIcon from "../../assets/statistics_icon.png";
import StatisticsSelIcon from "../../assets/statistics_icon_sel.png";
import SetupIcon from "../../assets/setup_icon.png";
import SetupSelIcon from "../../assets/setup_icon_sel.png";

import "./index.style.scss";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <div className="header">
        <div className="top-bar">
          <div className="title">Admin Console</div>
          <div className="avatar">
            <p>Hello, Richard&nbsp;&nbsp;</p>
            <img src={AvatarImg} alt="description"></img>
          </div>
        </div>
        <div className="menu-bar">
          <div className="menu-bar-logo">
            <img src={Logo} alt="description"></img>
          </div>
          <div className="menu">
            <MenuItem
              menuName="Home"
              menuIcon={pathname === Routes.home ? HomeSelIcon : HomeIcon}
              path={Routes.home}
            />
            <MenuItem
              menuName="Meetings"
              menuIcon={
                pathname === Routes.meetings ? MeetingsSelIcon : MeetingsIcon
              }
              path={Routes.meetings}
            />
            <MenuItem
              menuName="Messaging"
              menuIcon={
                pathname === Routes.messaging ? MessagingSelIcon : MessagingIcon
              }
              path={Routes.messaging}
            />
            <MenuItem
              menuName="Statistics"
              menuIcon={
                pathname === Routes.statistics
                  ? StatisticsSelIcon
                  : StatisticsIcon
              }
              path={Routes.statistics}
            />
            <MenuItem
              menuName="Setup"
              menuIcon={
                pathname === Routes.setup
                  ? SetupSelIcon
                  : SetupIcon
              }
              path={Routes.setup}
            />
          </div>
        </div>
      </div>
      <div className="content">
        <Router history={history}>
          <Switch>
            <Route
              exact
              path={Routes.home}
              component={Home}
              title="Home"
            ></Route>
            <Route
              exact
              path={Routes.meetings}
              component={Meetings}
              title="Meetings"
            ></Route>
            <Route
              exact
              path={Routes.messaging}
              component={Messaging}
              title="Messaging"
            ></Route>
            <Route
              exact
              path={Routes.statistics}
              component={Statistics}
              title="Statistics"
            ></Route>
            <Route
              exact
              path={Routes.setup}
              component={Setup}
              title="Setup"
            ></Route>
            <Route
              exact
              path={Routes.newmessage}
              component={CreateMessageForm}
              title="NewMessage"
            ></Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default Layout;
