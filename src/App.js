import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "components/app-header/AppHeader";

import ShowList from "components/show-list/ShowListContainer";
import ShowDetail from "components/show-detail/ShowDetailContainer";

import "typeface-roboto";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppHeader />
          <div className="app-routes-container">
            <Route exact path="/" component={ShowList} />
            <Route exact path="/:showId" component={ShowDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
