import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { selectModalState, selectPostItems } from '../../../models/posts/selectors';
import { changeModalState, addPost } from '../../../models/posts/actions';
import styles from './Modal.module.scss';

function Modal() {
  const isActive = useSelector(selectModalState);
  const posts = useSelector(selectPostItems);
  const dispatch = useDispatch();

  const createPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    if (values.postTitle !== '' && values.postBody !== '') {
      const post = {
        id: posts[posts.length - 1].id + 1,
        title: values.postTitle,
        body: values.postBody,
      };
      e.target.reset();
      dispatch(addPost(post));
      dispatch(changeModalState(false));
    }
  };

  const closeModal = () => {
    dispatch(changeModalState(false));
  };

  return ReactDOM.createPortal(
    <div
      className={cx(styles.modal, {
        [styles.none]: !isActive,
      })}
    >
      <div className={styles.modalContent}>
        <h2 className={styles.header}>Create Post</h2>
        <form id="postForm" onSubmit={createPost}>
          <input type="text" className={styles.postTitle} placeholder="Post Title" name="postTitle" />
          <textarea type="text" className={styles.postBody} placeholder="Post" rows="4" cols="50" name="postBody" />
          <div className={styles.buttons}>
            <button type="submit" className={styles.createBtn}>Create</button>
            <button type="button" className={styles.closeBtn} onClick={closeModal}> Close </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

export default Modal;
