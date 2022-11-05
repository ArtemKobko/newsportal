import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserStatus } from '../models/auth/actions';

function useUserAuth() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.userAuth.isAuth);

  useEffect(() => {
    if (!stateAuth) {
      const isAuth = JSON.parse(localStorage.getItem('isAuth'));
      dispatch(changeUserStatus(isAuth));
    }
  }, [stateAuth]);
}

export default useUserAuth;
