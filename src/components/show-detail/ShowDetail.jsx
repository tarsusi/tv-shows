import React, { Component } from "react";

class ShowDetail extends Component {
  componentDidMount() {
    const { showId } = this.props.match.params;
    this.props.fetchShowDetail(showId);
  }

  componentWillUnmount() {
    this.props.resetShowDetail();
  }

  isShowDetailEmpty = showDetail =>
    Object.keys(showDetail).length === 0 && showDetail.constructor === Object;

  render() {
    const { showDetail } = this.props;
    return (
      !this.isShowDetailEmpty(showDetail) && (
        <div className="show-detail-container">
          <div className="show-big-poster">
            <img src={showDetail.poster} alt={showDetail.id} />
          </div>
          <div className="show-detailed-informations">
            <div className="title">SHOW DETAILS</div>
            <div className="show-information">
              <div className="show-information-title">Name</div>
              <div className="show-information-value">{showDetail.name}</div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Language</div>
              <div className="show-information-value">
                {showDetail.language}
              </div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Premiered</div>
              <div className="show-information-value">
                {showDetail.premiered}
              </div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Rating</div>
              <div className="show-information-value">{showDetail.rating}</div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Schedule</div>
              <div className="show-information-value">
                {showDetail.schedule}
              </div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Status</div>
              <div className="show-information-value">{showDetail.status}</div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Type</div>
              <div className="show-information-value">{showDetail.type}</div>
            </div>
            <div className="show-information">
              <div className="show-information-title">Summary</div>
              <div
                className="show-information-value inner-html"
                dangerouslySetInnerHTML={{
                  __html: showDetail.summary
                }}
              />
            </div>
            <div className="show-information">
              <div className="show-information-title">Website</div>
              <div className="show-information-value">
                <a href={showDetail.website} target="_blank">
                  {showDetail.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ShowDetail;
