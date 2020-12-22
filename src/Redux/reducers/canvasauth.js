import {
   
    CONNECTION_SUCCESS,
    CONNECTION_ERROR,
    END_CONNECTION,
    CANVAS_USER_LOADED,
    CANVAS_AUTH_ERR,
  } from "../Action/types";
  
  const initialState = {
    domain: localStorage.getItem("domain"),
    canvasToken: localStorage.getItem("canvasToken"),
    isAuthenticated: false,
    loading: true,
    user: null,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CANVAS_USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      
      case CONNECTION_SUCCESS:
        console.log("This is the payload in the reducer")
        console.log(payload)
        localStorage.setItem("canvasToken", payload.data.tokenData[0].token);
        localStorage.setItem("domain",payload.data.tokenData[0].domain);
        console.log(localStorage.getItem("canvasToken"))
        console.log(localStorage.getItem("domain"))
        return {
          ...state,
          user: payload,
          isAuthenticated: true,
          loading: false,
          
        };
  
      case CANVAS_AUTH_ERR:
      case CONNECTION_ERROR:
      case END_CONNECTION:
        localStorage.removeItem("canvasToken");
        localStorage.removeItem("domain");
        return {
          ...state,
          canvasToken: null,
          domain:null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  