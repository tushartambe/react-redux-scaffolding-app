const LOAD_MOVIES = "LOAD_MOVIES";
const RECEIVE_MOVIES_DATA = "RECEIVE_MOVIES_DATA"
export const loadMovies = () => {
  return {
    type: LOAD_MOVIES,
    payload: {}
  }
}

export function receiveMoviesData(data) {
  return {
    type: RECEIVE_MOVIES_DATA,
    payload: { data }
  }
}
