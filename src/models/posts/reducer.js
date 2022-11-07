import { GET_POSTS } from './contants';

export const initialState = { items: [] };

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export default postsReducer;
