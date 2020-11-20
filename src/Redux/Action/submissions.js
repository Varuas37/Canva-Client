import axios from "axios";
import {GET_SUBMISSIONS,ERR_GET_SUBMISSIONS} from "./types";
import {setAlert} from "./alert";


// gets the submissions. 
export const getSubmissions=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3001/api/canvas/submissions/${id}`);
        dispatch({
            type: GET_SUBMISSIONS, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Error Getting Submissions","red"))
        dispatch({
            type: ERR_GET_SUBMISSIONS,
        })
    }
}