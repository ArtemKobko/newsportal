import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../models/posts/actions';
import { selectPostItems } from '../../models/posts/selectors';
import styles from './CurrentPost.module.scss';

function CurrentPost() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostItems);
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const post = posts.filter((e) => e.id === Number(postId));
  if (post.length > 0) {
    return (
      <div>
        {
           post.map(({
             id,
             title,
             body,
           }) => (
             <div key={id} className={styles.postConteiner}>
               <h2>{title}</h2>
               <p>{body}</p>
             </div>
           ))
           }
      </div>
    );
  }
  return (
    <div className={styles.errorMessage}> Sorry we can not find that post</div>
  );
}

export default CurrentPost;
