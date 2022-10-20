import { createContext } from 'react';

export const initialState = [{
  isAuth: false,
}, () => {
}];

export const AppContext = createContext(initialState);
