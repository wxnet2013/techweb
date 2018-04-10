import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';

import RefApi from './ref-api';
import Portal from './portal';
import Lifecycle from './lifecycle';
import Context from './context';
import ErrorBoundary from './error-boundary';
import Fragment from './fragment'

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/ref-api" component={RefApi}/>
      <Route path="/portal" component={Portal}/>
      <Route path="/lifecycle" component={Lifecycle}/>
      <Route path="/context" component={Context}/>
      <Route path="/error-boundary" component={ErrorBoundary}/>
      <Route path="/fragment" component={Fragment}/>
    </Switch>
  </Router>
);

export default routes;
