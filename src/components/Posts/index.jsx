import React from 'react';
import PostsConteiner from './PostsContainer';
import Header from './Header';
import Modal from './Modal';

function Posts() {
  return (
    <div>
      <Header />
      <Modal />
      <PostsConteiner />
    </div>
  );
}

export default Posts;
