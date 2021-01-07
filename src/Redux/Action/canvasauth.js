import axios from "axios";
import {CONNECTION_SUCCESS, CONNECTION_ERROR,CANVAS_USER_LOADED,END_CONNECTION, CANVAS_AUTH_ERR} from "./types";
import {setAlert} from "./alert";
import setCanvasAuth from "../../utils/setCanvasToken";

//Check if canvas user is loaded. 

export const loadCanvasUser = ()=> async dispatch=>{
    if (localStorage.canvasToken && localStorage.domain){
        setCanvasAuth(localStorage.canvasToken,localStorage.domain)
    }

    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            
            },
          };
        const res = await axios.get('http://localhost:3300/api/canvas/auth',config);
        dispatch({
            type:CANVAS_USER_LOADED,
            payload:res.data,
        })
    }
    catch(err){
        dispatch({
            type: CANVAS_AUTH_ERR
        })
    }

}



// Checks if domain and token match
export const connectToCanvas=  (domain,token) => async dispatch =>{
    const config = {
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
      };
    const body = JSON.stringify({ domain,token});
    try {
        console.log(body)
        const res = await axios.post("http://localhost:3300/api/canvas/auth",body,config);
        dispatch({
            type: CONNECTION_SUCCESS, 
            payload:res.data
        })
        console.log(res.data)
        dispatch(setAlert("Authentication Successful","green"))

    } catch (err) {
        console.log("❌❌❌❌"+err)
        dispatch(setAlert("Canvas Authentication Error",`Couldn't Connect to canvas`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: CONNECTION_ERROR,
        })
    }
}

export const disconnectCanvas = ()=> async dispatch =>{
    try{
        dispatch({
            type: END_CONNECTION, 
        })
    }
    catch (err){
        console.log(err)
    }
}