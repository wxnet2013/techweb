import React, { Component } from 'react';
import PropType from 'prop-types';

class Child extends Component {

  static propTypes = {
    a: PropType.number,
  };

  state = {};

  // mount
  // componentWillMount() {
  //   // eslint-disable-next-line
  //   console.log('1 componentWillMount');
  // }

  componentDidMount() {
    // ajax
    // eslint-disable-next-line
    console.log('2 componentDidMount');
  }

  // update
  // componentWillReceiveProps() {
  //   // eslint-disable-next-line
  //   console.log('3 componentWillReceiveProps');
  // }

  static getDerivedStateFromProps() {
    // eslint-disable-next-line
    console.log('3 getDerivedStateFromProps');
    return null;
  }

  // componentWillUpdate() {
  //   // eslint-disable-next-line
  //   console.log('4 componentWillUpdate');
  // }
  componentDidUpdate() {
    // eslint-disable-next-line
    console.log('5 componentDidUpdate');
  }
  
  // unmout
  componentWillUnmount() {
    // clear
    // eslint-disable-next-line
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        {this.props.a}
      </div>
    );
  }
}

const getData = () => {
  return new Promise((r) => {
    setTimeout(() => {
      r({
        code: 200,
        data: {
          a: 2
        },
      });
    }, 10000);
  });
};

export default class Lifecycle extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      a: 1
    };
    this.ajax = getData();
  }

  componentDidMount() {
    // this.timer = setTimeout(() => {
    //   // eslint-disable-next-line
    //   alert('mounted');
    //   this.setState({
    //     a: 2
    //   });
    // }, 1000);
    this.ajax.then((json) => {
      this.setState({
        a: json.data.a
      });
    });
  }

  componentWillUnmount() {
    // clearTimeout(this.timer);
    // this.ajax.cancel();
  }

  render() {
    return (
      <div>
        <Child a={this.state.a} />
      </div>
    );
  }
}
