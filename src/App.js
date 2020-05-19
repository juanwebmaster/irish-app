import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import store from "./redux/service";
import Routes from "./constants/Routes";
import History from "./constants/History";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={History}>
          <Switch>
            <Route
              exact
              path={Routes.signin}
              component={LoginPage}
              title="Log In"
            ></Route>
            <Route
              path={Routes.layout}
              component={Layout}
              title=""
            ></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
