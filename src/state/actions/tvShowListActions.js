export const fetchShows = showName => ({
  type: "FETCH_SHOW_LIST",
  payload: fetch(`https://api.tvmaze.com/search/shows?q=${showName}`).then(
    response => response.json()
  )
});
