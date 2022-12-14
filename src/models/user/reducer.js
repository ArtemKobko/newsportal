import { CHANGE_USER_STATUS } from './constants';

export const initialState = { isAuth: false };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_STATUS:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
