import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Page1, Page2, Phonebook } from './routers';

const App = () => {
	return (
		<BrowserRouter>
			<header>
				<ul>
					<li>
						<Link to="/page1/칼리스타">Page1</Link>
					</li>
					<li>
						<Link to="/page2">Page2</Link>
					</li>
					<li>
						<Link to="/phonebook">Phonebook</Link>
					</li>
				</ul>
			</header>
			<Switch>
				{/* page1 == props가 나옴 */}
				<Route path="/page1/:lolname" component={Page1} />
				<Route paht="phonebook" component={Phonebook} />

				{/* page 2 == 아무것도 안나옴 */}
				<Route path="/page2" render={(props) => (
					<Page2 history={props.history} match={props.match} />
				)} />
				<Redirect to="/page1"/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
