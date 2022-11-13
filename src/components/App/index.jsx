import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Posts from '../Posts';
import ProtectedRoute from '../../routes/ProtectedRoute';
import { ROUTES } from '../../routes/constants';
import DefaultRoute from '../../routes/DefaultRoute';
import { selectUserAuth } from '../../models/user/selectors';

function App() {
  const isAuth = useSelector(selectUserAuth);
  const userProtected = !isAuth && (
    <Route path={ROUTES.LOGIN} element={<Login />} />
  );
  return (
    <Router>
      <Routes>
        {userProtected}
        <Route
          path={ROUTES.POSTS}
          element={(
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element={<DefaultRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
