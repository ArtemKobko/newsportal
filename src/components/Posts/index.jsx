import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../models/auth/actions';
import { selectPosts } from '../../Selectors/selectPosts';
import './posts.scss';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h1 className="mainHeader">Latest Tech News</h1>
      <div className="posts">
        {posts.map(({ id, title, body }) => (
          <div key={id} className="post">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="buttons">
              <button type="button" className="btnView">View</button>
              <button type="button" className="btnDelete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
