import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { Juso, Product } from './routers';
import Reducer from './routers/Reducer';
import Scroll from './routers/Scroll';

export default () => {
    return (
        <BrowserRouter>
            {/* <nav style={navStyle}>                
                    <Link to="/product/all">전체</Link>
                    <Link to="/product/fish">수산물</Link>
                    <Link to="/product/fruit">청과</Link>
                    <Link to="/product/vegetable">야채</Link>
            </nav> */}
            <Switch>
                <Route path="/product/:category" component={Product} />
                <Route path="/juso" component={Juso} />
                <Route path="/scroll" component={Scroll} />
                <Route path="/reducer" component={Reducer} />
                <Redirect to="/juso" />
            </Switch>
        </BrowserRouter>
    )
}

const navStyle = {
    width: '700px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '30px',
    fontWeight: '600'
}