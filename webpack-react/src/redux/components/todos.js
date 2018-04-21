import React from 'react';

// eslint-disable-next-line
const todos = ({ todos, click, load }) => {

  const list = todos.map((todo) => {
    return (<li key={todo.id}>{todo.text}</li>)
  });

  return (
    <div>
      <ul>
      {
        list
      }
      </ul>
      <button onClick={click}>添加</button>
      <button onClick={() => load(1)}>load</button>
    </div>
  );
};

export default todos;
