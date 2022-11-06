import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
import { selectUserAuth } from '../models/userAuth/selectUserAuth';
// import useUserAuth from '../hooks/useUserAuth';

function ProtectedRoute({ children }) {
  // useUserAuth();
  const isAuth = useSelector(selectUserAuth);
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  console.log(isAuth);
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
