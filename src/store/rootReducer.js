import userReducer from './user/reducer';
import postReducer from './posts/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  person: userReducer,
  posts: postReducer
})