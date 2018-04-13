import React from 'react';
// 
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line
const AuthRoute = (props) => {
  const isLogin = localStorage.getItem('isLogin') === 'true';
  return isLogin ? <Route {...props} /> : <Redirect to={
    {
      pathname: '/login',
      state: {
        // eslint-disable-next-line
        from: props.location,
      }
    }
  } />;
};
export default AuthRoute;
