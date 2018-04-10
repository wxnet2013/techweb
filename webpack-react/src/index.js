import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './components/header';
// import HelloMessage from './components/hello';
import Routes from './routes'
import './index.scss';


// 环境隔离
// eslint-disable-next-line
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line
  console.log('pro');
} else {
  // eslint-disable-next-line
  console.log('dev');
}

import('./a').then((m) => {
  console.log(m.default); // eslint-disable-line
  m.default();
});

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Routes />
  </LocaleProvider>,
  document.getElementById('app'),
);
