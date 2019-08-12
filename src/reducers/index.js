import { combineReducers } from 'redux-loop'
import { connectRouter } from 'connected-react-router'
import moviesReducer from './movies'
import sampleReducer from './sample.js'

const rootReducer = history => combineReducers({
	router: connectRouter(history),
	sample: sampleReducer,
	movies: moviesReducer
});

export default rootReducer
