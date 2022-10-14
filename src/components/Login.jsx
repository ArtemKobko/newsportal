import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../App.modules.scss';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState('');
  // const [visible, setVisible] = useState(false);

  function loginValue(event) {
    setLogin(event.target.value);
  }
  function passwordValue(event) {
    setPassword(event.target.value);
  }
  function enter() {
    navigate('/posts');
  }
  function checkUser() {
    if (login === process.env.REACT_APP_USER && password === process.env.REACT_APP_PASS) {
      enter();
    } else {
      setValid('Login or password is invalid');
      console.log(styles);
      // setVisible(true);
    }
  }
  return (
    <div className="login_form">
      <h2>Please sing in</h2>
      <h3>{valid}</h3> 
      <input className={styles.input_log} type="text" placeholder="login" defaultValue={login} onChange={loginValue} />
      <br />
      <input type="password" placeholder="password" defaultValue={password} onChange={passwordValue} />
      <div>
        <input type="checkbox" />
        <span>Remember me</span>
        <a href="/" className="forgot">Forget password?</a>
      </div>
      <div>
        <button className="btn_singin" type="submit" onClick={checkUser}>Sing In</button>
      </div>
    </div>
  );
}

export default Login;
