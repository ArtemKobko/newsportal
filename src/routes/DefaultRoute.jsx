import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuth } from '../models/user/selectors';
import { ROUTES } from './constants';

function DefaultRoute() {
  const isAuth = useSelector(selectUserAuth);

  return isAuth ? (
    <Navigate to={ROUTES.POSTS} replace />
  ) : (
    <Navigate to={ROUTES.LOGIN} replace />
  );
}

export default DefaultRoute;
