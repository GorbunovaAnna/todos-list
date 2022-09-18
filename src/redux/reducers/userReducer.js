import { USER } from "../actions/types";

const initialState = {
  user: {},
  isAuthenticated: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case USER.USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
