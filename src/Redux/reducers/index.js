import {combineReducers} from "redux";
import alert from "./alert"
import canvasauth from "./canvasauth"
import profile from "./profile"
import auth from "./auth"
import courses from "./courses"
import submissions from "./submissions"
import excel from "./excel"
import todo from "./todo"
import groupData from "./group"
import post from "./post"
import LogRocket from 'logrocket';

export default combineReducers({
    alert, canvasauth,courses,submissions,todo,auth,profile,excel,groupData,post
});