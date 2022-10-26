import { useState, useEffect } from 'react';

function useAuth(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };
  // const [isAuth, setAuth] = useState(false);
  const [isAuth, setAuth] = useState({ isAuth: false });

  useEffect(() => setAuth(getValue()), []);
  return isAuth;
}

export default useAuth;
