import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';

// BrowserRouter as Router,
// location / {
//   try_files $uri $uri/ /index.html;
// }

import {
  HashRouter as Router,
  // BrowserRouter as Router,
  // Switch,
  // Route,
} from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './components/header';
// import HelloMessage from './components/hello';
// import Routes from './routes'
import './index.scss';

import App from './app';

// import Home from './pages/home';
// import Login from './pages/login';
// import About from './pages/about';

// import RefApi from './ref-api';
// import Portal from './portal';
// import Lifecycle from './lifecycle';
// import Context from './context';
// import ErrorBoundary from './error-boundary';
// import Fragment from './fragment'


// 环境隔离
// eslint-disable-next-line
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line
  console.log('pro');
} else {
  // eslint-disable-next-line
  console.log('dev');
}

// import('./a').then((m) => {
//   console.log(m.default); // eslint-disable-line
//   m.default();
// });

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
     <Router>
       <App />
    {/* <Switch>
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
    </Switch> */}
  </Router>
  </LocaleProvider>,
  document.getElementById('app'),
);
