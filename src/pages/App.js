import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Movies from '../components/Movies';

const App = () =>
	<div>
		<Header />
		<Route expect path="/" component={Movies}></Route>
	</div>

export default App