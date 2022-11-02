import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import store from '../store';
import { ROUTES } from './constants';

function ProtectedRoute({ children }) {
  if (store.isAuth) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
