export const initialState = { isAuth: false };

function reducer(state, action) {
  switch (action.type) {
    case 'changeUserStatus':
      return { ...state, isAuth: true };
    default:
      throw new Error();
  }
}

export default reducer;
