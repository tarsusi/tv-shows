import ShowList from "components/show-list/ShowList";

import { connect } from "react-redux";

import { fetchShows } from "state/actions/tvShowListActions";

const mapStateToProps = state => {
  return {
    showList: state.tvShowList.showList
  };
};

const mapDispatchToProps = dispatch => ({
  fetchShows: showName => dispatch(fetchShows(showName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowList);
