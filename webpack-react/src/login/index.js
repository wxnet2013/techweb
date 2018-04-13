import React from 'react';

const Login = (props) => {
  // eslint-disable-next-line
  console.log(props)

  return (
    <div>
    <button onClick={
      () => {
        localStorage.setItem('isLogin', 'true');
        // eslint-disable-next-line
        props.history.push(props.location.state.from);
      }
    }>
      登陆
    </button>
  </div>
  );
};
export default Login;
