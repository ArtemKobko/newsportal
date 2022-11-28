import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import App from './components/App';
import { checkUserAuth } from './models/user/actions';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(checkUserAuth());

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
