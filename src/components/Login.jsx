import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function loginValue(event) {
    setLogin(event.target.value);
  }
  function passwordValue(event) {
    setPassword(event.target.value);
  }
  function checkUser() {
    console.log(login, password);
  }

  return (
    <div>
      <h2>Please sing in</h2>
      <input type="text" placeholder="login" defaultValue={login} onChange={loginValue} />
      <br />
      <input type="password" placeholder="password" defaultValue={password} onChange={passwordValue} />
      <div>
        <input type="checkbox" />
        Remember me
      </div>
      <div>
        <button type="submit" onClick={checkUser}>Sing In</button>
      </div>
    </div>
  );
}

export default Login;
