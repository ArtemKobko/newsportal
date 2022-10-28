import { useReducer } from 'react';
import authReducer, { initialState } from '../models/auth/reducer';

function useStore() {
  const isAuth = JSON.parse(localStorage.getItem('isAuth')) || initialState.isAuth;
  const [state, dispatch] = useReducer(authReducer, { ...initialState, isAuth });
  return [state, dispatch];
}
export default useStore;
