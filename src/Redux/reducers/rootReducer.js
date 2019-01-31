import { combineReducers } from 'redux';
import candidates from './candidates';
import modals from './modals';

export default combineReducers({
  candidates,
  modals,
});
