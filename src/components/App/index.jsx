import React from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Posts from '../Posts';
import Login from '../Login';
import ProtectedRoute from '../../routes/ProtectedRoute';
import { ROUTES } from '../../routes/constants';
import useUserAuth from '../../hooks/useUserAuth';
import getDefaultPage from '../../routes/getDefaultPage';
import { selectUserAuth } from '../../Selectors/selectUserAuth';

function App() {
  useUserAuth();
  const isAuth = useSelector(selectUserAuth);
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.POSTS}
          element={(
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
            )}
        />
        <Route path="*" element={<Navigate to={getDefaultPage(isAuth)} />} />
      </Routes>
    </Router>
  );
}

export default App;
