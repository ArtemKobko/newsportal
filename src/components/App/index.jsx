import React, { useMemo, useReducer } from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import Posts from '../Posts';
import Login from '../Login';
import ProtectedRoute from '../../routes/ProtectedRoute';
import authReducer from '../../models/auth/reducer';
import useAuth from '../../hooks/useAuth';
import { AppContext } from '../../contexts/appContext';
import { ROUTES } from '../../routes/constants';

function App() {
  // const auth = useAuth(false, 'userAuth');
  // const [state, dispatch] = useReducer(authReducer, { isAuth: auth });
  const auth = useAuth({ isAuth: false }, 'userAuth');
  const [state, dispatch] = useReducer(authReducer, auth);
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
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
