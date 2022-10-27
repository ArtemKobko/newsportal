import { useReducer } from 'react';
import authReducer, { initialState } from '../models/auth/reducer';

function useStore() {
  const isAuth = JSON.parse(localStorage.getItem(key)) || initialState.isAuth;
  const [state, dispatch] = useReducer(authReducer, { ...initialState, isAuth });

  return [state, dispatch];
}

export default useStore;
