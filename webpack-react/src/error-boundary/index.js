// componentDidCatch
import React, { Component } from 'react';

class Child extends Component {
  
  componentDidMount() {
    throw 'child error';
    // setTimeout(()=> {
    //   throw 'ddddddd';
    // },1000);
  }

  render() {
    return (
      <div>child</div>
    );
  }
}

class ErrorBoundary extends Component {
  componentDidCatch(err, info) {
    // eslint-disable-next-line
    console.log(err);
    // eslint-disable-next-line
    console.log(info);
  }
  render() {
    return (
      <div>
        {
          // eslint-disable-next-line
          this.props.children
        }
      </div>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <div>
        App
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      </div>
    );
  }
}
