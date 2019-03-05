import React, { Component } from "react";

const TV_SHOW_NAME = "batman";

class ShowList extends Component {
  componentDidMount() {
    this.props.fetchShows(TV_SHOW_NAME);
  }

  render() {
    const { showList } = this.props;

    return (
      <div className="show-list-container">
        {showList.map(show => (
          <div className="show-item" key={show.id}>
            <div className="show-poster">
              <img src={show.poster} alt={show.name} />
            </div>
            <div className="show-preview-data">
              <div className="show-name">{show.name}</div>
              <div className="show-score">
                Score: {Number(show.score).toFixed(2)}
              </div>
              <div className="show-rate">
                Rate: {Number(show.rate).toFixed(2)}
              </div>
            </div>
            <button
              className="show-detail-button"
              onClick={() => {
                this.props.history.push(`/${show.id}`);
              }}
            >
              Go Details
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowList;
