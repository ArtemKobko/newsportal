/* eslint-disable no-console */
import axios from 'axios';
import { GET_POSTS } from './contants';

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const fetchPosts = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => dispatch(getPosts(response.data)))
    .catch((error) => {
      console.log(error.toJSON());
    });
};
