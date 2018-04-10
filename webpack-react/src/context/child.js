import React, { Component } from 'react';
import User from './user-store';

export default class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child </h2>
        <User.Consumer>
              {
                user => <div>
                user: {user.name}
                </div>
              }
        </User.Consumer>
      </div>
    );
  }
}
