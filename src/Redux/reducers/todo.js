import {
    GET_TODO,ERR_GET_TODO
  } from "../Action/types";
  
  const initialState = {
    todo: [],
    submission_loading:true,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_TODO:
        return {
          ...state,
          
          todo: payload,
          submission_loading:false,
        };
        case ERR_GET_TODO:
            return{
                submission_loading:true,
            }
      default:
        return state;
    }
  }
  