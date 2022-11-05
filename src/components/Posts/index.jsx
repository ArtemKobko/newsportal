import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getPostsFromServer } from '../../models/auth/actions';
import './posts.scss';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsFromServer.posts);
  useEffect(() => {
    async function log() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(getPostsFromServer(res.data));
    }
    log();
  }, []);
  return (
    <div>
      <h1 className="mainHeader">Latest Tech News</h1>
      <div className="posts">
        {posts.map((e) => (
          <div key={e.id} className="post">
            <h2>{e.title}</h2>
            <p>{e.body}</p>
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
