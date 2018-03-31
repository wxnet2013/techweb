import React from 'react';
import ReactDOM from 'react-dom';
import './components/header';
import HelloMessage from './components/hello';

// class HelloMessage extends Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

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
  <HelloMessage name="Taylor" />,
  document.getElementById('app'),
);
