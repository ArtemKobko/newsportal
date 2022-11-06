import { combineReducers } from 'redux';
import postsReducer from '../models/posts/postsReducer';
import userReducer from '../models/userAuth/userReducer';

const rootReducer = combineReducers({
  userAuth: userReducer,
  posts: postsReducer,
});

export default rootReducer;
