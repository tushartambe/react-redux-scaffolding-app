import { Cmd, loop } from "redux-loop";
import { receiveMoviesData } from "../actions/movies";

export const getMovies = async () => {
  let response = await fetch('https://thoughtworksreactreduxmovies.firebaseio.com/movies.json');
  let json = await response.json();
  return json;
}

const moviesReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
      return loop({
        ...state,
      },
        Cmd.run(getMovies, {
          args: [],
          successActionCreator: receiveMoviesData,
          failActionCreator: console.log
        })
      )

    case "RECEIVE_MOVIES_DATA":
      return {
        ...state,
        movies: action.payload.data
      }

    default: return state;
  }
}
export default moviesReducer;