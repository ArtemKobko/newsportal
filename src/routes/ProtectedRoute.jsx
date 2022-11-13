import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
import { selectUserAuth } from '../models/user/selectors';

function ProtectedRoute({ children }) {
  const isAuth = useSelector(selectUserAuth);
  if (!isAuth) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
