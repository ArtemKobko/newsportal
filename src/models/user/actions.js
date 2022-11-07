import { CHANGE_USER_STATUS } from './constants';
import { selectUserAuth } from './selectors';

export const changeUserStatus = (payload) => ({
  type: CHANGE_USER_STATUS,
  payload,
});

export const checkUserAuth = () => (dispatch, getState) => {
  const state = getState();
  const userAuth = selectUserAuth(state);
  const getStorageAuth = localStorage.getItem('isAuth');

  if (getStorageAuth && !userAuth && JSON.parse(getStorageAuth) === true) {
    dispatch(changeUserStatus(true));
  }
};
