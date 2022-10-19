/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer, createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import reducer, { initialState } from './components/Reducer';

export const Context = createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Context.Provider value={[state, dispatch]}>
        <Router>
          <Routes>
            <Route exct path="/" element={<Login />} />
            <Route path="/posts" element={<ProtectedRoute />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
