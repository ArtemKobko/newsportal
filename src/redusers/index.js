import { combineReducers } from 'redux';
import userAuth from './userAuth';
import postsFromServer from './postsFromServer';

const rootReducer = combineReducers({
  userAuth,
  postsFromServer,
});

export default rootReducer;
