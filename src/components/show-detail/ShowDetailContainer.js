import ShowDetail from "components/show-detail/ShowDetail";

import { connect } from "react-redux";

import {
  fetchShowDetail,
  resetShowDetail
} from "state/actions/tvShowDetailActions";

const mapStateToProps = state => {
  return {
    showDetail: state.tvShowDetail.showDetail
  };
};

const mapDispatchToProps = dispatch => ({
  fetchShowDetail: showName => dispatch(fetchShowDetail(showName)),
  resetShowDetail: () => dispatch(resetShowDetail())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetail);
