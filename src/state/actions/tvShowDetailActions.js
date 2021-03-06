export const fetchShowDetail = showId => ({
  type: "FETCH_SHOW_DETAIL",
  payload: fetch(`https://api.tvmaze.com/shows/${showId}`).then(response =>
    response.json()
  )
});

export const resetShowDetail = () => ({
  type: "RESET_SHOW_DETAIL"
});
