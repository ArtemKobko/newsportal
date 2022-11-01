import { ROUTES } from './constants';

function getDefaultPage() {
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));
  if (isAuth) {
    return ROUTES.POSTS;
  }
  return ROUTES.LOGIN;
}

export default getDefaultPage;
