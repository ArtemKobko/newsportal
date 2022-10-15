import React, { useState } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from '../App.module.scss';

function Login() {
  const navigate = useNavigate();
  const [isError, setError] = useState(false);

  const onSignIn = (data) => {
    const {
      REACT_APP_LOGIN,
      REACT_APP_PASSWORD,
    } = process.env;
    const {
      login,
      password,
    } = data;
    if (
      REACT_APP_LOGIN
      && REACT_APP_PASSWORD
      && login === REACT_APP_LOGIN && password === REACT_APP_PASSWORD) {
      setError(false);
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
      {isError && <h3>Login or password is invalid</h3>}
      <form onSubmit={submitForm}>
        <input
          className={cx(styles.input, {
            [styles.inputError]: isError,
          })}
          type="text"
          placeholder="login"
        />
        <input
          className={cx(styles.input, {
            [styles.inputError]: isError,
          })}
          type="password"
          placeholder="password"
        />
        <div>
          <input type="checkbox" />
          <span>Remember me</span>
          <a href="/" className={styles.forgot}>Forget password?</a>
        </div>
        <div>
          <button className={styles.btn_singin} type="submit">Sing In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
