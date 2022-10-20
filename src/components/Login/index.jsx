import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { ROUTES } from '../../routes/constants';
import { AppContext } from '../../contexts/appContext';
import { changeUserStatus } from '../../models/auth/actions';

function Login() {
  const [, dispatch] = useContext(AppContext);
  const navigate = useNavigate();
  const [isError, setError] = useState(false);

  const onSignIn = (data) => {
    const {
      REACT_APP_LOGIN,
      REACT_APP_PASS,
    } = process.env;
    const {
      login,
      password,
    } = data;
    if (
      REACT_APP_LOGIN
      && REACT_APP_PASS
      && login === REACT_APP_LOGIN && password === REACT_APP_PASS) {
      setError(false);
      dispatch(changeUserStatus(true));
      navigate(ROUTES.POSTS);
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
    <div className={styles.loginForm}>
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
            <Link
              to="/"
              className={cx({
                [styles.forgot]: isError,
              })}
            >
              Forget password?
            </Link>
          )}
        </div>
        <div>
          <button className={styles.btnSignin} type="submit">Sing In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
