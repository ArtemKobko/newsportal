import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userAuth: userReducer,
  posts: postsReducer,
});

export default rootReducer;
