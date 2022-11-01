import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import authReducer from './models/auth/authReducer';
import initialState from './store/store';

const store = createStore(authReducer, initialState);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
