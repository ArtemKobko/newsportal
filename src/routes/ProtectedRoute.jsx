import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './constants';

function ProtectedRoute({ children }) {
  const isAuth = useSelector((store) => store.isAuth);
  const storage = JSON.parse(localStorage.getItem('isAuth'));
  if (!isAuth && !storage) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
