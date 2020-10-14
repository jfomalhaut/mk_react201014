import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Page1, Page2 } from './routers';

const App = () => {
	return (
		<BrowserRouter>
			<header>
				<ul>
					<li>
						<Link to="/page1">Page1</Link>
					</li>
					<li>
						<Link to="/page2">Page2</Link>
					</li>
				</ul>
			</header>
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/page2">
					<Page2 />
				</Route>
				<Redirect to="/page1"/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
