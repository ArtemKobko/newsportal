import React, { useMemo, useReducer } from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import Posts from '../Posts';
import Login from '../Login';
import ProtectedRoute from '../../routes/ProtectedRoute';
import authReducer from '../../models/auth/reducer';
import { AppContext, initialState } from '../../contexts/appContext';
import { ROUTES } from '../../routes/constants';

function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const providerValue = useMemo(() => [state, dispatch], [state, dispatch]);

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
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
