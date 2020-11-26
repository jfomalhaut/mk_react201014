import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { List, Detail } from './routers';

const App = () => {
	return (
		<BrowserRouter>
			<ul>
				<Link to="/list">
					<li>list</li>
				</Link>
				<Link to="/detail">
					<li>detail</li>
				</Link>
			</ul>
			<Switch>
				<Route path="/list" component={List} />
				<Route path="/detail" component={Detail} />
				<Redirect to="/list" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;