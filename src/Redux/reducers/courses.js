import {
   GET_COURSES,COURSES_ERROR,GET_FAVOURITE_COURSES,GET_FAVOURITE_COURSES_ERR,GET_COURSE,COURSE_ERROR,TODO_ERROR,GET_TODO, ANNOUNCEMENT_ERROR, GET_ANNOUNCEMENT,GET_ASSIGNMENT,GET_ASSIGNMENT_ERR,GET_ASSIGNMENTS
  } from "../Action/types";
  
  const initialState = {
    courses:[],
    course: null,
    announcement:[],
    announcement_loading:true,
    favouriteCourse:[],
    favCourseLoading:false,
    courseName:[],
    assignments:[],
    assignment:null,
    assignment_loading:true,
    courses_loading: true,
    courseLoading:true,
    todo:[],
    todo_loading:true,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_COURSES:
            return {
                ...state,
                courses: payload.data,
                courses_loading:false,
              };
        case GET_COURSE:
            return{
                ...state,
                course: payload.data,
                courseLoading:false,
            }
        case GET_TODO:
            return{
                ...state,
                todo: payload.data,
                todo_loading:false
            }
        case GET_ANNOUNCEMENT:
            return{
                ...state,
                announcement:payload.data,
                announcement_loading:false
            }
        case GET_ASSIGNMENTS:
            return{
                ...state,
                assignments:payload.data,
                assignment_loading:false,
            }
        case GET_ASSIGNMENT:
            return {
                ...state,
                assignment:payload.data,
                assignment_loading:false,
            }
        
        case TODO_ERROR:
            return{
                ...state,
                todo_loading:true
            }
        case COURSES_ERROR:
        case ANNOUNCEMENT_ERROR:
        case COURSE_ERROR:
        case GET_FAVOURITE_COURSES_ERR:
        case GET_ASSIGNMENT_ERR:
            return{
                ...state,
                courses_loading:true, 
                favCourseLoading:true,
                courseLoading:true,
                announcement_loading:true,
            }
        case GET_FAVOURITE_COURSES:
            return{
                ...state,
                favouriteCourse:payload.data,
                favCourseLoading:false,
            }
        default:
            return state;
    }
}