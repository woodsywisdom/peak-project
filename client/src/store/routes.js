import Cookies from 'js-cookie';

const SET_ROUTE = 'routes/SET_ROUTE';

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

export default (state = { Area: { name: "" } }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_ROUTE: {
      return action.route;
    }
    default: {
      return state;
    }
  }
}
