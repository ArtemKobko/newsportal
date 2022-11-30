import axios from 'axios';
import {
  GET_POSTS, DELETE_POST, CHANGE_MODAL_STATE, ADD_POST,
} from './contants';

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const deletePost = (payload) => ({
  type: DELETE_POST,
  payload,
});

export const fetchPosts = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => dispatch(getPosts(response.data)))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.toJSON());
    });
};

export const getCurrentPost = (id) => (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => dispatch(getPosts(response.data)))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.toJSON());
    });
};

export const changeModalState = (payload) => ({
  type: CHANGE_MODAL_STATE,
  payload,
});
