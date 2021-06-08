/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// core components
import Admin from "./Admin/layouts/Admin.js";
// import RTL from "./Admin/layouts/RTL.js";

import "./Admin/assets/css/material-dashboard-react.css?v=1.9.0";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "redux/reducers/reducers.js";
import HomePage from "Client/pages/HomePage/index.jsx";
import FindProduct from "Client/pages/FindProduct/index.jsx";

// assets/css/material-dashboard-react.css?v=1.9.0

const hist = createBrowserHistory();
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/home" component={HomePage} />
        <Route path="/find" component={FindProduct} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
