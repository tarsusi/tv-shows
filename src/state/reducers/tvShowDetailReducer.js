const initialState = {
  showDetail: {}
};

const toShowDetail = showDetail => ({
  genres: showDetail.genres.join(", "),
  id: showDetail.id,
  language: showDetail.language,
  name: showDetail.name,
  premiered: showDetail.premiered,
  poster: showDetail.image.original,
  rating: showDetail.rating.average,
  schedule: `${showDetail.schedule.days.join(", ")} at ${
    showDetail.schedule.time
  }`,
  status: showDetail.status,
  summary: showDetail.summary,
  type: showDetail.type,
  website: showDetail.url
});

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOW_DETAIL_FULFILLED":
      return {
        showDetail: toShowDetail(action.payload)
      };
    case "RESET_SHOW_DETAIL":
      return initialState;
    default:
      return state;
  }
};
