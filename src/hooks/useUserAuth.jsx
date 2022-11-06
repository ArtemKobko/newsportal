import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserStatus } from '../models/userAuth/actions';
import { selectUserAuth } from '../models/userAuth/selectUserAuth';

function useUserAuth() {
  const dispatch = useDispatch();
  const stateAuth = useSelector(selectUserAuth);

  useEffect(() => {
    if (!stateAuth && JSON.parse(localStorage.getItem('isAuth'))) {
      dispatch(changeUserStatus(true));
      console.log('work');
    }
  }, []);
}

export default useUserAuth;
