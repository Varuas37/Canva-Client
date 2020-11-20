// import {
//     USER_LOADED,
//     AUTH_ERR,
//     CONNECTION_SUCCESS,
//     CONNECTION_ERROR,
//     END_CONNECTION,
//   } from "../Action/types";
  
//   const initialState = {
//     domain: localStorage.getItem("domain"),
//     token: localStorage.getItem("token"),
//     isAuthenticated: false,
//     loading: true,
//     user: null,
//   };

// const initialState =[];
// export default function (state= initialState,action){
//     const {type,payload} = action;
//     switch (type){
//         case SET_ALERT:
//             return [...state,payload];
//         case  REMOVE_ALERT:
//             return state.filter(alert =>alert.id != payload);
//         default:
//             return state

//     }
// }