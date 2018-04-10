// React.Fragment
import React, { Component } from 'react';

export default class Fragment extends Component {
  render() {
    // return (
    //   <div>
    //     <dt>dd</dt>
    //     <dd>ddd</dd>
    //   </div>
    // );
    // return [
    //   'dddd',
    //   'ddddd',
    //   <div key="dd">dddd</div>,
    //   <div key="ff">dddd</div>
    // ];
    return (
      <React.Fragment>
         <div>dddd</div>
         <div>dddd</div>
      </React.Fragment>
    );
  }
}