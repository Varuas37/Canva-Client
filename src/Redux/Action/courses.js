import axios from "axios";
import {GET_COURSES, COURSES_ERROR, GET_FAVOURITE_COURSES, GET_FAVOURITE_COURSES_ERR,GET_COURSE,COURSE_ERROR,GET_TODO,TODO_ERROR,GET_ANNOUNCEMENT,ANNOUNCEMENT_ERROR,GET_ASSIGNMENTS,GET_ASSIGNMENT,GET_ASSIGNMENT_ERR} from "./types";
import {setAlert} from "./alert";


// Checks if domain and token match
export const getCourses=  () => async dispatch =>{
    try {
        const res = await axios.get("http://localhost:3300/api/canvas/courses/");
        dispatch({
            type: GET_COURSES, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Courses Error",`Error loading Courses`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: COURSES_ERROR,
        })
    }
}

export const getCourse=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3300/api/canvas/courses/${id}`);
        dispatch({
            type: GET_COURSE, 
            payload:res.data
        })
    } catch (err) {
        dispatch(setAlert("Courses Error",`Error loading Courses`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: COURSE_ERROR,
        })
    }
}

export const getTodo=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3300/api/canvas/courses/todo/${id}`);
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

export const getAnnouncement=  (id) => async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:3300/api/canvas/courses/announcement/${id}`);
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
        const res = await axios.get("http://localhost:3300/api/canvas/favourites");
        dispatch({
            type: GET_FAVOURITE_COURSES, 
            payload:res.data,
        })
       
    }
    catch(err){
        dispatch(setAlert("Favourite Courses Error",`Error loading Favourite Courses`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: GET_FAVOURITE_COURSES_ERR,
        })
    }
}

export const getAssignments = (id)=>async dispatch =>{
    try{
        const res = await axios.get(`http://localhost:3300/api/canvas/courses/${id}/assignments`)
        console.log("I am inside getAssignments 🤶🏻"+res)
         dispatch({
            type: GET_ASSIGNMENTS, 
            payload:res.data,
        })
    }
    catch(err){
         dispatch(setAlert("Assignment Error",`Error loading Assignments`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: GET_ASSIGNMENT_ERR,
        })
    }
}



export const getAssignment = (courseID,assignmentID)=>async dispatch =>{
    try{
        const res = await axios.get(`http://localhost:3300/api/canvas/courses/${courseID}/assignments/${assignmentID}`)
         dispatch({
            type: GET_ASSIGNMENT, 
            payload:res.data,
        })
    }
    catch(err){
         dispatch(setAlert("Assignment Error",`Error loading Assignment`,"error","fas fa-exclamation-circle"));
        dispatch({
            type: GET_ASSIGNMENT_ERR,
        })
    }
}