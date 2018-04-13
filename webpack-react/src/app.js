import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Loadable from 'react-loadable';



import AuthRoute from './auth';
// import Login from './login';


// import Books from './books';

const UiState = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}
const Books = Loadable({
  loader: () => import('./books'),
  loading: UiState,
});

const Login = Loadable({
  loader: () => import('./login'),
  loading: UiState,
});

// eslint-disable-next-line
// const Home = (props) => {
//   // eslint-disable-next-line
//   console.log(props);
//   return (<div>Home</div>)
// };

// eslint-disable-next-line
const Child = (props) => {
  // eslint-disable-next-line
  console.log(props);
  // eslint-disable-next-line
  return (<div>child: {props.a}</div>)
};

class Home extends Component {
  state = {
    a: 1,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 2,
      });
    }, 2000)
  }

  render() {
    // eslint-disable-next-line
    // console.log(this.props);
    const props = this.props;
    return (
      <div>
        home
        <Child {...props} a={this.state.a}/>
      </div>
    );
  }
}

const About = () => (
  <div>About</div>
);


// const App = (props) => {
//   // eslint-disable-next-line
//   console.log(props);

//   return (
//     <div>
//       <div className="header">
//         <div>
//           <ul>
//             <li><Link to="/home" replace>Home</Link></li>
//             <li><Link to="/about" replace>About</Link></li>
//             <li><Link to="/login" replace>Login</Link></li>
//             <li><Link to="/books" replace>Books</Link></li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/books" component={Books} />
//           <Route path="/home" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/login" component={Login} />
//         </Switch>
//       </div>
//       <div className="footer">
//         footer
//       </div>
//     </div>
//   );
// };

const isLogin = () => Promise.resolve({
  isLogin: true,
});

class App extends Component {
  componentDidMount() {
    isLogin().then((json) => {
      if (!json.isLogin) {
        // eslint-disable-next-line
        this.props.history.push('/login');
      }
      localStorage.setItem('isLogin', 'true');
    });
  }
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <ul>
              <li><Link to="/home" replace>Home</Link></li>
              <li><Link to="/about" replace>About</Link></li>
              <li><Link to="/login" replace>Login</Link></li>
              <li><Link to="/books" replace>Books</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute path="/books" component={Books} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

// export default App;
export default withRouter(App);
