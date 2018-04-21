import produce from "immer";

// const todos = (
//   state = [],
//   action,
// ) => {
//   switch (action.type) {
//     // case 'ADD_TODO':
//     //   // return state.push(action.data);
//     //   return [ ...state, action.data ];
//     case 'ADD_TODO_SUCCESS':
//       // return state.push(action.data);
//       return [ ...state, action.data ];
//     case 'GET_TODOS':
//       return [...state];
//     default:
//       return state;
//   }
// };

const todos = (
  state = [],
  action,
) => produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_TODO_SUCCESS':
        draft.push(action.data);
  }
});
export default todos;