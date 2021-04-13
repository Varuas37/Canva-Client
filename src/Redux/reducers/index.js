import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import alert from "./alert";
import canvasauth from "./canvasauth";
import profile from "./profile";
import auth from "./auth";
import courses from "./courses";
import submissions from "./submissions";
import excel from "./excel";
import todo from "./todo";
import groupData from "./group";
import post from "./post";
import tasks from "./tasks";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  alert,
  canvasauth,
  courses,
  submissions,
  todo,
  auth,
  profile,
  excel,
  groupData,
  post,
  tasks,
});

export default persistReducer(persistConfig, rootReducer);
