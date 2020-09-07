import Cookies from 'js-cookie';

const SET_ROUTE = 'routes/SET_ROUTE';
const CLEAR_ROUTE = 'routes/CLEAR_ROUTE';

export const setRoute = route => {
  return ({
    type: SET_ROUTE,
    route,
  })
}

export const getRoute = (id) => async (dispatch) => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch(`/api/routes/${id}`, {
    method: "get",
    header: {
      "XSRF-TOKEN": csrfToken,
    },
  });
  res.data = await res.json();
  if (res.ok) {
    dispatch(setRoute(res.data.route));
  }
}

const clearRoute = () => {
  return ({
    type: CLEAR_ROUTE,
  });
}

export const removeRoute = (id) => async (dispatch) => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch(`/api/routes/${id}`,{
    method: "delete",
    headers: {
      "XSRF-TOKEN": csrfToken,
    },
  });
  if (res.ok) {
    dispatch(clearRoute());
    window.location = '/';
  }
}

export default (state = { location: "", Area: { name: "" }, User: { username: "" }, }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_ROUTE: {
      return action.route;
    }
    case CLEAR_ROUTE: {
      return { location: "", Area: { name: "" }, User: { username: "" }, };
    }
    default: {
      return state;
    }
  }
}
