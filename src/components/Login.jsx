/* eslint-disable import/no-cycle */
import React, { useState, useContext } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from '../Login.module.scss';
import { Context } from '../App';

function Login() {
  const [, dispatch] = useContext(Context);
  const navigate = useNavigate();
  const [isError, setError] = useState(false);

  const onSignIn = (data) => {
    const {
      REACT_APP_USER,
      REACT_APP_PASS,
    } = process.env;
    const {
      login,
      password,
    } = data;
    if (
      REACT_APP_USER
      && REACT_APP_PASS
      && login === REACT_APP_USER && password === REACT_APP_PASS) {
      setError(false);
      dispatch({ type: 'changeUserStatus' });
      navigate('/posts');
    } else {
      setError(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData) || {};
    onSignIn(data);
  };

  return (
    <div className={styles.login_form}>
      <h2>Please sing in</h2>
      {isError && (
      <h3 className={cx({
        [styles.forgot]: isError,
      })}
      >
        Login or password is invalid
      </h3>
      )}
      <form id="auth" onSubmit={submitForm}>
        <input
          className={cx(styles.input, {
            [styles.inputError]: isError,
          })}
          name="login"
          type="text"
          placeholder="login"
        />
        <input
          className={cx(styles.input, {
            [styles.inputError]: isError,
          })}
          name="password"
          type="password"
          placeholder="password"
        />
        <div>
          <input type="checkbox" />
          <span>Remember me</span>
          {isError && (
          <a
            href="/"
            className={cx({
              [styles.forgot]: isError,
            })}
          >
            Forget password?

          </a>
          )}
        </div>
        <div>
          <button className={styles.btn_singin} type="submit">Sing In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
