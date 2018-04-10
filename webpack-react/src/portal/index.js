import React, { Component } from 'react';
import Model from './model';

// ReactDOM.createPortal(child, container)

export default class Portal extends Component {
  click = () => {
    // eslint-disable-next-line
    console.log(1111);
  }
  render() {
    return (
      <div onClick={this.click}>
        <h2>Protals demo</h2>
        <Model />
      </div>
    );
  }
}
