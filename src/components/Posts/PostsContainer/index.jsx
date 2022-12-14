import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../../../models/posts/actions';
import { selectPostItems } from '../../../models/posts/selectors';
import styles from './Posts.module.scss';

function PostsContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(selectPostItems);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const viewPost = (id) => {
    navigate(`/posts/${id}`);
  };

  const removePost = (id) => {
    dispatch(deletePost(id));
  };
  return (
    <div>
      <div className={styles.posts}>
        {posts.map(({
          id,
          title,
          body,
        }) => (
          <div key={id} className={styles.post}>
            <h2>{title}</h2>
            <p>{body}</p>
            <div className={styles.buttons}>
              <button type="button" className={styles.btnView} onClick={() => viewPost(id)}>View</button>
              <button type="button" className={styles.btnDelete} onClick={() => removePost(id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsContainer;
