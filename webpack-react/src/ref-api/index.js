import React, { Component } from 'react';

// React.createRef()

export default class RefApi extends Component {
  eleref = React.createRef();

  submit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(this.refs.a);
    // eslint-disable-next-line
    console.log(this.ele);
    // eslint-disable-next-line
    console.log(this.eleref.current);
  };

  render() {
    return (
      <div>
        <h2>Ref api demo</h2>
        <form onSubmit={this.submit}>
          <input name="a" ref="a" />
          <input name="b" ref={
            ele => (this.ele = ele)
          }/>
          <input name="c" ref={this.eleref} />
          <button>提交</button>
        </form>
      </div>
    );
  }
}
