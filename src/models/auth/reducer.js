import { CHANGE_USER_STATUS } from './constants';

export const initialState = { isAuth: false };

function authReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_STATUS:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      throw new Error();
  }
}

export default authReducer;
