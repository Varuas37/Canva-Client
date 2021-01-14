import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  RESET_PASSWORD,
  
} from "../Action/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: [{canvasConnected:false}],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case AUTH_ERR:
    case LOGIN_FAILED:
    case RESET_PASSWORD:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user:""
      };
    default:
      return state;
  }
}
