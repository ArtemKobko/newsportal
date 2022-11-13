import {
  GET_POSTS, DELETE_POST, CHANGE_MODAL_STATE, ADD_POST,
} from './contants';

export const initialState = { items: [], isModalActive: false };

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter((post) => post.id !== action.payload),
      };
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        isModalActive: action.payload,
      };
    default:
      return state;
  }
}

export default postsReducer;
