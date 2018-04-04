import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </Router>
);

export default routes;
