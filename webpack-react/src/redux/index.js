import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import reducers from './reducers';
import App from './app';
// import { addTodo, editUserName } from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


// redux 原理
// console.log(store.getState());

// store.subscribe((state) => {
//   console.log(state);
// });

// const action = {
//   type: 'ADD_TODO',
//   data: { id: 1, text: 'hhhhhh' }
// };
// action creater
// store.dispatch(addTodo());
// store.dispatch(addTodo());
// store.dispatch(addTodo());
// store.dispatch(addTodo());
// store.dispatch(editUserName('wxnet'));
// store.dispatch(editUserName('wxnet1'));
// store.dispatch(editUserName('wxnet2'));

// console.log(store.getState());
// redux 原理 end




ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app'),
);