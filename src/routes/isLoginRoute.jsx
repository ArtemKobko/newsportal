import { ROUTES } from './constants';

function isLog() {
  if (JSON.parse(localStorage.getItem('isAuth'))) {
    return ROUTES.POSTS;
  }
  return ROUTES.LOGIN;
}

export default isLog;
