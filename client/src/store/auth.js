import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';

export const setUser = user => {
  return ({
    type: SET_USER,
    user,
  });
}

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
  return res.data;
}

export const removeUser = () => {
  return ({ type: REMOVE_USER });
}

export const logout = () => async (dispatch) => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch('/api/session', {
    method: 'delete',
    headers: {
      "XSRF-TOKEN": csrfToken,
    }
  });
  if (res.ok) {
    dispatch(removeUser());
  }
  return res;
}

export const signup = (email, username, password) => async (dispatch) => {

  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch('/api/users', {
    method: 'post',
    headers: {
      "Content-Type": 'application/json',
      "XSRF-TOKEN": csrfToken,
    },
    body: JSON.stringify({ username, email, password}),
  });
  res.data = await res.json();
  if (res.ok) {
    dispatch(setUser(res.data.user));
  }
  return res;
}


export default (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_USER: {
      return action.user;
    }
    case REMOVE_USER: {
      return {};
    }
    default:
      return state;
  }
}
