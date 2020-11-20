import axios from "axios";
import {GET_COURSES, COURSES_ERROR, GET_FAVOURITE_COURSES, GET_FAVOURITE_COURSES_ERR,GET_COURSE,COURSE_ERROR,GET_TODO,TODO_ERROR,GET_ANNOUNCEMENT,ANNOUNCEMENT_ERROR,USER_TODO_ERROR,GET_USER_TODO} from "./types";
import {setAlert} from "./alert";


// Checks if domain and token match
export const getCourses=  () => async dispatch =>{
    try {
        const res = await axios.get("http://localhost:3001/api/canvas/courses/");
        dispatch({
            type: GET_COURSES, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Courses Error","red"))
        dispatch({
            type: COURSES_ERROR,
        })
    }
}

export const getCourse=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3001/api/canvas/courses/${id}`);
        dispatch({
            type: GET_COURSE, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Courses Error","red"))
        dispatch({
            type: COURSE_ERROR,
        })
    }
}

export const getTodo=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3001/api/canvas/courses/todo/${id}`);
        dispatch({
            type: GET_TODO, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Todo Error","red"))
        dispatch({
            type: TODO_ERROR,
        })
    }
}
export const getUserTodo=  () => async dispatch =>{
    try {
       
        const res = await axios.get(`http://localhost:3001/api/canvas/todo`);
        // console.log(res.data)
        dispatch({
            type: GET_USER_TODO, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Todo Error","red"))
        dispatch({
            type: USER_TODO_ERROR,
        })
    }
}
export const getAnnouncement=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3001/api/canvas/courses/announcement/${id}`);
        dispatch({
            type: GET_ANNOUNCEMENT, 
            payload:res.data
        })
        console.log(res.data)
    } catch (err) {
        dispatch(setAlert("Announcemnet Error","red"))
        dispatch({
            type: ANNOUNCEMENT_ERROR,
        })
    }
}


export const getFavCourses = () =>async dispatch =>{
    try{
        const res = await axios.get("http://localhost:3001/api/canvas/favourites");
        dispatch({
            type: GET_FAVOURITE_COURSES, 
            payload:res.data,
        })
       
    }
    catch(err){
        dispatch(setAlert("Favourite Courses Error","red"))
        dispatch({
            type: GET_FAVOURITE_COURSES_ERR,
        })
    }
}

