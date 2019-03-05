const initialState = {
  showList: []
};

const toShowList = showList =>
  showList.map(({ score, show }) => ({
    id: show.id,
    name: show.name,
    poster: show.image.medium,
    rate: show.rating.average,
    score
  }));

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOW_LIST_FULFILLED":
      return {
        showList: toShowList(action.payload)
      };
    default:
      return state;
  }
};
