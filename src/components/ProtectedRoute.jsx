/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import Login from './Login';
import Posts from './Posts';
import { Context } from '../App';

function ProtectedRoute() {
  const [state] = useContext(Context);
  if (state.isAuth) {
    return <Posts />;
  }
  return <Login />;
}

export default ProtectedRoute;
