import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    home
    <Link to="/about">关于</Link>
  </div>
);

const About = () => (
  <div>about</div>
);

const Login = () => (
  <div>Login</div>
);

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
