import { ROUTES } from './constants';

export const getDefaultPage = (isAuth) => {
  if (isAuth) {
    return ROUTES.POSTS;
  }
  return ROUTES.LOGIN;
};
