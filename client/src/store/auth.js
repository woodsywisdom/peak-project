import Cookies from 'js-cookie';
import auth from './auth';

const SET_USER = 'auth/SET_USER';

export const login = (username, password) => async dispatch => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch('/api/session', {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": csrfToken,
    },
    body: JSON.stringify({ username, password }),
  });
  res.data = await res.json();
  if (res.ok) {
    dispatch(setUser(res.data.user));
  }
  return res;
}

const setUser = user => {
  return ({
    type: SET_USER,
    user,
  })
}


export default (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
