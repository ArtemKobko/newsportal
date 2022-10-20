import { CHANGE_USER_STATUS } from './constants';

function authReducer(state, action) {
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
