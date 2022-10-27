import React from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import Posts from '../Posts';
import Login from '../Login';
import ProtectedRoute from '../../routes/ProtectedRoute';
import { AppContext } from '../../contexts/appContext';
import { ROUTES } from '../../routes/constants';
import useStore from '../../hooks/useStore';
import isLog from '../../routes/isLoginRoute';

function App() {
  const providerValue = useStore('userAuth');
  return (
    <AppContext.Provider value={providerValue}>
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
          <Route path="*" element={<Navigate to={isLog()} />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
