import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "components/app-header/AppHeader";

import ShowList from "components/show-list/ShowListContainer";
import ShowDetail from "components/show-detail/ShowDetailContainer";

import { SHOW_DETAIL_PATH, SHOW_LIST_PATH } from "common/constants/rootNames";

import "typeface-roboto";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppHeader />
          <div className="app-routes-container">
            <Route exact path={SHOW_LIST_PATH} component={ShowList} />
            <Route exact path={SHOW_DETAIL_PATH} component={ShowDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
