import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { Page1, Page2, Phonebook} from './routers';

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
                <li>
                    <Link to="/Phonebook">Phonebook</Link>
                </li>
                <li>
                    <Link to="/List">List</Link>
                </li>
            </ul>
        </header>
            <Switch>
                <Route path="/page1/:lolname" component={Page1} />
                <Route path="/phonebook" component={Phonebook} />
                <Route path="/phonebook" component={Phonebook} />

                <Route path="/page2" render={(props) => (
                    <Page2 history={props.history} math={props.match} />
                )} />                
                <Redirect to="/page1"/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;