import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { List, Detail, Cart } from './routers';

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
				<Link to="/cart">
					<li>cart</li>
				</Link>
			</ul>
			<Switch>
				<Route path="/list" component={List} />
				<Route path="/detail" component={Detail} />
				<Route path="/cart" component={Cart} />
				<Redirect to="/list" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;