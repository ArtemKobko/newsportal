import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { changeUserStatus } from '../../../models/user/actions';

function Header() {
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch(changeUserStatus(false));
  };

  return (
    <div className={styles.headerContainer}>
      <button type="button" className={styles.createBtn}>Create Post</button>
      <h1 className={styles.mainHeader}>Latest Tech News</h1>
      <div className={styles.logOut}>
        <span className={styles.text}>Online</span>
        <button type="button" className={styles.logOutBtn} onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
}

export default Header;
