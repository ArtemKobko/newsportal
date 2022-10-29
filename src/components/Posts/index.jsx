import React from 'react';
import arr from './posts';
import './posts.scss';

function Posts() {
  return (
    <div>
      <h1 className="mainHeader">Latest Tech News</h1>
      <div className="posts">
        {arr.map((e) => (
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
