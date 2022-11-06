import { GET_POSTS } from '../models/auth/constants';

export const initialState = { posts: [] };

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default postsReducer;
