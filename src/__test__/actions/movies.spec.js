import { loadMovies, receiveMoviesData } from '../../actions/movies';

describe('Actions', () => {
  it('loadMovies should return correct action object', () => {
    const action = loadMovies()
    expect(action.type).toEqual("LOAD_MOVIES")
  });

  it('loadMovies should return correct action object', () => {
    let data = { a: "a" };
    const action = receiveMoviesData(data)
    expect(action.type).toEqual("RECEIVE_MOVIES_DATA")
    expect(action.payload.data).toEqual(data)
  });
});