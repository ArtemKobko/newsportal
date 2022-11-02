import { ROUTES } from './constants';

function getDefaultPage(isAuth) {
  if (isAuth) {
    return ROUTES.POSTS;
  }
  return ROUTES.LOGIN;
}

export default getDefaultPage;
