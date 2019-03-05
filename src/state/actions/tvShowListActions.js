export const fetchShows = showName => ({
  type: "FETCH_SHOW_LIST",
  payload: fetch(`http://api.tvmaze.com/search/shows?q=${showName}`).then(
    response => response.json()
  )
});
