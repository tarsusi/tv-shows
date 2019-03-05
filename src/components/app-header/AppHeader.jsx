import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SHOW_LIST_PATH } from "common/constants/rootNames";

const HEADER_TITLE = "Batman TV Shows";
const GO_BACK_BUTTON_LABEL = "Go Show List";

class AppHeader extends Component {
  render() {
    const isUserInDetailPage = this.props.location.pathname !== SHOW_LIST_PATH;

    return (
      <header className="app-header">
        {isUserInDetailPage && (
          <button className="back-button" onClick={this.props.history.goBack}>
            {GO_BACK_BUTTON_LABEL}
          </button>
        )}
        {HEADER_TITLE}
      </header>
    );
  }
}

export default withRouter(AppHeader);
