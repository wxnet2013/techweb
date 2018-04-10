import React, { Component } from 'react';
import User from './user-store';
import Child from './child';

// const User = React.createContext();
const Theme = React.createContext();

export default class Content extends Component {
  state = {
    theme: 'basic'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        theme: 'black',
      })
    }, 2000);
  }
  render() {
    return (
      <div>
        <Theme.Provider value={{
          name: this.state.theme,
        }}>
        <User.Provider value={{
          name: 'wxnet'
        }}>
        <Child />
          <div>
            
            <User.Consumer>
              {
                user => <div>
                {user.name}
                <Theme.Consumer>
              {
                theme => <div>{user.name} ddd {theme.name}</div>
              }
                 </Theme.Consumer>
                </div>
              }
            </User.Consumer>
          </div>
          <div>
            <User.Consumer>
              {
                user => <div>{user.name}</div>
              }
            </User.Consumer>
          </div>
          <div>
            <User.Consumer>
              {
                user => <div>{user.name}</div>
              }
            </User.Consumer>
          </div>
        </User.Provider>
        </Theme.Provider>
      </div>
    );
  }
}