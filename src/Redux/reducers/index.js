import {combineReducers} from "redux";
import alert from "./alert"
import canvasauth from "./canvasauth"
import profile from "./profile"
import auth from "./auth"
import courses from "./courses"
import submissions from "./submissions"
import todo from "./todo"
export default combineReducers({
    alert, canvasauth,courses,submissions,todo,auth,profile
});