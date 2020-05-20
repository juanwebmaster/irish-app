import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import store from "./redux/service";
import Routes from "./constants/Routes";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";

function App() {
  history.push(Routes.signin)
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route
              path={Routes.signin}
              component={LoginPage}
              title="Log In"
            />
            <Route path={Routes.layout} component={Layout} title="" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
