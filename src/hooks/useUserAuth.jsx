import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserStatus } from '../models/auth/actions';
import { selectUserAuth } from '../Selectors/selectUserAuth';

function useUserAuth() {
  const dispatch = useDispatch();
  const stateAuth = useSelector(selectUserAuth);

  useEffect(() => {
    if (!stateAuth) {
      const isAuth = JSON.parse(localStorage.getItem('isAuth'));
      dispatch(changeUserStatus(isAuth));
    }
  }, [stateAuth]);
}

export default useUserAuth;
