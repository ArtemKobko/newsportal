import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../models/posts/actions';
import { selectPostItems } from '../../../models/posts/selectors';
import styles from './Posts.module.scss';

function PostsContainer() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostItems);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
              <button type="button" className={styles.btnView}>View</button>
              <button type="button" className={styles.btnDelete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsContainer;
