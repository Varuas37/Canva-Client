import axios from "axios";
import {USER_TODO_ERROR,GET_USER_TODO,SERVER_DOMAIN} from "./types";
import {setAlert} from "./alert";



export const getUserTodo=  () => async dispatch =>{
    try {
        const res = await axios.get(`${SERVER_DOMAIN}/api/canvas/todo`);
        // console.log(res.data)
        dispatch({
            type: GET_USER_TODO, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Todo Error",`Error loading Todo`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: USER_TODO_ERROR,
        })
    }
}