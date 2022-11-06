/* eslint-disable no-console */
import axios from 'axios';
import { CHANGE_USER_STATUS, GET_POSTS } from './constants';

export const changeUserStatus = (payload) => ({
  type: CHANGE_USER_STATUS,
  payload,
});

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const fetchPosts = () => async function www(dispatch) {
  await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => dispatch(getPosts(response.data)))
    .catch((error) => {
      console.log(error.toJSON());
    });
};
