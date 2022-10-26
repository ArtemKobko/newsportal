import { createContext } from 'react';

const initialState = [{
  isAuth: false,
}, () => {
}];

export const AppContext = createContext(initialState);
