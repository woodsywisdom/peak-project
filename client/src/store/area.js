import Cookies from 'js-cookie';

const SET_AREA = 'routes/SET_AREA';

export const setArea = area => {
  return ({
    type: SET_AREA,
    area,
  })
}

export const getArea = (id) => async (dispatch) => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch(`/api/areas/${id}`, {
    method: "get",
    header: {
      "XSRF-TOKEN": csrfToken,
    },
  });
  res.data = await res.json();
  if (res.ok) {
    dispatch(setArea(res.data.area));
  }
}

export default (state = { Routes: []}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_AREA: {
      return action.area;
    }
    default: {
      return state;
    }
  }
}
