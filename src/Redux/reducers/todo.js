import {
    GET_USER_TODO,USER_TODO_ERROR
  } from "../Action/types";
  
  const initialState = {
    todo: [],
    user_todo_loading:true,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_USER_TODO:
        return {
          ...state,
          
          todo: payload,
          user_todo_loading:false,
        };
        case USER_TODO_ERROR:
            return{
              user_todo_loading:true,
            }
      default:
        return state;
    }
  }
  