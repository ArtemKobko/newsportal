import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../contexts/appContext';
import { ROUTES } from './constants';

function ProtectedRoute({ children }) {
  const [state] = useContext(AppContext);

  if (!state.isAuth) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
