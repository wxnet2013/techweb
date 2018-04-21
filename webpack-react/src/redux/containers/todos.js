import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import todos from '../components/todos';
import { addTodo, getTodos } from '../actions';


// 挂载
const todosSelecter = (state) => state.todos;
const mapStateToProps = createSelector([todosSelecter], (todos) => {
  return {
    todos,
  }
});

// const mapStateToProps = (state) => ({
//   // selecter reselect
//   todos: state.todos,
// });

const mapDispatchToProps = (dispatch) => ({
  click: () => dispatch(addTodo('hhhh')),
  load: (id) => dispatch(getTodos(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(todos);
