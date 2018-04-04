import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Home = () => (
  <div>home</div>
);

const Login = () => (
  <div>Login</div>
);

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
};

export default routes;
