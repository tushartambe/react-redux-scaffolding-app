import { Cmd, loop } from 'redux-loop'
import moviesReducer, { getMovies } from '../../reducers/movies'
import { loadMovies, receiveMoviesData } from '../../actions/movies';
describe('Reducers', () => {
  it('should return empty state for not action match', () => {
    const action = {
      type: '',
      payload: {}
    }

    const state = undefined
    const newState = moviesReducer(state, action)
    const expectedState = { movies: [] }

    expect(newState).toEqual(expectedState)
  });

  it('should return correct state object for valid actio match', () => {

    let data = [{ a: "a" }];
    const action = receiveMoviesData(data);
    const state = []
    const newState = moviesReducer(state, action)
    const expectedState = { movies: [{ a: "a" }] }

    expect(newState).toEqual(expectedState)
  });

  it('should return correct state object for valid actio match', () => {
    const state = {}
    const newState = moviesReducer(state, loadMovies())
    const expectedState = loop(
      state,
      Cmd.run(getMovies, {
        args: [],
        successActionCreator: receiveMoviesData,
        failActionCreator: console.log
      })
    )

    expect(newState).toEqual(expectedState)
  })
});