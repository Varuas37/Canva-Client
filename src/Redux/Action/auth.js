import axios from "axios";
import {CONNECTION_SUCCESS, CONNECTION_ERROR,USER_LOADED,END_CONNECTION} from "./types";
import {setAlert} from "./alert";


// Checks if domain and token match
export const connectToCanvas=  (domain,token) => async dispatch =>{
    try {
        const res = await axios.get("http://localhost:3001/api/canvas/auth");
        dispatch({
            type: CONNECTION_SUCCESS, 
            payload:res.data
        })
        // dispatch(setAlert("Authentication Successful","green"))
    } catch (err) {
        console.log(err)
        dispatch(setAlert("Authentication Failed","red"))
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