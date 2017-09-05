import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Other from './components/Other/Other';

const FourOhFour = () => <h1>404</h1>;

export default (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Other" component={Other}></Route>
        <Route path="*" component={FourOhFour}></Route>
    </Switch>
);