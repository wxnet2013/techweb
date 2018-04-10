import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Model extends Component {
  model = document.getElementById('model');
  
  render() {
    // return (
    //   <div> model </div>
    // );
    return ReactDom.createPortal(
      <div>aaa</div>,
      this.model
    );
  }
}
