import { CHANGE_USER_STATUS } from './constants';

export const changeUserStatus = (payload) => ({
  type: CHANGE_USER_STATUS,
  payload,
});
