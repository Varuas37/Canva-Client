import {
    GET_SUBMISSIONS,ERR_GET_SUBMISSIONS
  } from "../Action/types";
  
  const initialState = {
    submissions: [],
    submission_loading:true,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_SUBMISSIONS:
        return {
          ...state,
          
          submissions: payload,
          submission_loading:false,
        };
        case ERR_GET_SUBMISSIONS:
            return{
                submission_loading:true,
            }
      default:
        return state;
    }
  }
  