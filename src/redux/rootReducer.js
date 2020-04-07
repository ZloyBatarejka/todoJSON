import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import appReducer from './appReducer';

export default combineReducers({
  todo: todoReducer,
  app: appReducer,
});
