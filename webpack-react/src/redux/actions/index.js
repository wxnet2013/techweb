// action
// { type: 'name', data: 1 }

let id = 0;
export const addTodo = () => ({
  type: 'ADD_TODO',
  text: 'ddd',
  // data: { id: id++, text: `dddd${id}` },
});

export const getTodos = () => ({
  type: 'GET_TODOS',
  todos: [
    { id: id++, text: 'aaa' },
    { id: id++, text: 'aaa' },
    { id: id++, text: 'aaa' },
  ],
});

export const editUserName = (name) => ({
  type: 'EDIT_USER_NAME',
  name,
});

// redux-thunk
// const fetchPosts = postTitle => (dispatch, getState) => {
//   dispatch(requestPosts(postTitle));
//   return fetch(`/some/API/${postTitle}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(postTitle, json)));
//   };
// };
