import { CHANGE_USER_STATUS, GET_POSTS } from './constants';

export const changeUserStatus = (payload) => ({
  type: CHANGE_USER_STATUS,
  payload,
});

export const getPostsFromServer = (payload) => ({
  type: GET_POSTS,
  payload,
});
