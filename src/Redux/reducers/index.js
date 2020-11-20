import {combineReducers} from "redux";
import alert from "./alert"
import auth from "./auth"
import courses from "./courses"
import submissions from "./submissions"
export default combineReducers({
    alert, auth,courses,submissions
});