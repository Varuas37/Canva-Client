import {
    USER_LOADED,
    AUTH_ERR,
    CONNECTION_SUCCESS,
    CONNECTION_ERROR,
    END_CONNECTION,
  } from "../Action/types";
  
  const initialState = {
    domain: localStorage.getItem("domain"),
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
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
      
      case CONNECTION_SUCCESS:
        localStorage.setItem("token", payload.token);
        localStorage.setItem("domain",payload.domain);
        return {
          ...state,
          payload,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
  
      case AUTH_ERR:
      case CONNECTION_ERROR:
      case END_CONNECTION:
        localStorage.removeItem("token");
        localStorage.removeItem("domain");
        return {
          ...state,
          token: null,
          domain:null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  