import { call, put, takeEvery, all } from 'redux-saga/effects';
import { addToDoApi } from '../api';

// watcher
function* watchAddToDo() {
  yield takeEvery('ADD_TODO', addTodo);
}

// worker
let id = 0;
function* addTodo() {
  try {
    const data = yield call(addToDoApi, id++);
    yield put({
      type: 'ADD_TODO_SUCCESS',
      data,
    });
  } catch(e){
    console.log(e);
    yield put({
      type: 'ADD_TODO_ERROR',
    });
  }
}

export function* rootSaga() {
  console.log('hello, saga');
  yield all([
    watchAddToDo(),
  ]);
}
