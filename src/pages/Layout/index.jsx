import React, { Fragment } from "react";
import "./index.style.scss";
import Routes from "../../constants/Routes";
import Home from "../Home";
import Setup from "../Setup";
import Messaging from "../Messaging";
import Meetings from "../Meetings";
import Statistics from "../Statistics";
import { Route, Router, Switch } from "react-router-dom";
import History from "../../constants/History";
import AvatarImg from "../../assets/avatar.png";
import Logo from "../../assets/logo.png";
import HomeIcon from "../../assets/home_icon.png";
import MeetingsIcon from "../../assets/meetings_icon.png";
import MessagingIcon from "../../assets/messaging_icon.png";
import StatisticsIcon from "../../assets/statistics_icon.png";
import SetupIcon from "../../assets/setup_icon.png";
import MenuItem from "../../components/MenuItem";
import CreateMessageForm from "../../components/CreateMessageForm";
const Layout = () => {
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
            <MenuItem menuName="Home" menuIcon={HomeIcon} />
            <MenuItem menuName="Meetings" menuIcon={MeetingsIcon} />
            <MenuItem menuName="Messaging" menuIcon={MessagingIcon} />
            <MenuItem menuName="Statistics" menuIcon={StatisticsIcon} />
            <MenuItem menuName="Setup" menuIcon={SetupIcon} />
          </div>
        </div>
      </div>
      <div className="content">
        <Router history={History}>
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
