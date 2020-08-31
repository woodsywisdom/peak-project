import Cookies from 'js-cookie';

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
    dispatch(setUser(res.data));
  }
  return res;
}

const setUser = user => {
  return ({
    type: SET_USER,
    user,
  })
}
