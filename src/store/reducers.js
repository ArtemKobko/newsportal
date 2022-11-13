import { combineReducers } from 'redux';
import userReducer from '../models/user/reducer';
import postsReducer from '../models/posts/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default rootReducer;
