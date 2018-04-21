import { combineReducers } from 'redux';
import todos from './todos';
import notes from './notes';
import user from './user';

export default combineReducers({
  todos,
  notes,
  user,
});