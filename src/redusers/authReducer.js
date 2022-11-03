import { CHANGE_USER_STATUS } from '../models/auth/constants';

export const initialState = { isAuth: false };

function authReducer(state = initialState, action) {
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

export default authReducer;
