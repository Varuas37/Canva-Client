import React,{useEffect} from "react";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Home from "./Page/Home/Home";
import CanvasLogin from "./Page/CanvasAuth/Login/CanvasLogin";

// Redux
import {Provider} from "react-redux";
import store from "./store";
import history from "./utils/history";

import setAuthToken from "./utils/setAuthToken";
import Alert from "./Components/Alert/Alert";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Dashboard from "./Page/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Courses from "./Page/Courses/Courses";
import Course from "./Page/Courses/Course";
import Profile from "./Page/Profile/Profile";
import Groups from "./Page/Groups/Groups";
import Settings from "./Page/Settings/Settings";
import CommingSoon from "./Components/CommingSoon/CommingSoon";
import Pricing from "./Page/Pricing/Pricing";
import Login from "./Page/Authentication/Login";
import Register from "./Page/Authentication/Register";
import {loadUser} from "./Redux/Action/auth"
import {loadCanvasUser} from "./Redux/Action/canvasauth"
import setCanvasAuth from "./utils/setCanvasToken";
import Tools from "./Page/Tools/Tools";
import ExcelCheck from "./Page/ExcelCheck/ExcelCheck";
if (localStorage.token) {
  setAuthToken(localStorage.token);

}

const App=()=> {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  useEffect(()=>{
    console.log("I am under Canvas Login Before Load User was dispatched")
    store.dispatch(loadCanvasUser());
    
  },[])  
  return (
    <Provider store={store}>
    <Router history={history}>
    <Route exact path ="/" component={Home}/>
    <Alert/>
    <Navbar></Navbar>
      <Switch>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/canvasAuth" component={CanvasLogin}/>
        <Route exact path ="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/courses" component={Courses}/>
        <Route exact path="/courses/:id" component={Course}/>
        <Route exact path="/profile/" component={Profile}/>
        <Route exact path="/groups/" component={Groups}/>
        <Route exact path="/settings/" component={Settings}/>
        <Route exact path="/pricing/" component={Pricing}/>
        <Route exact path="/tools" component={Tools}/>
        <Route exact path="/excelCheck" component={ExcelCheck}/>
      </Switch>
    </Router>
    </Provider>
   
  );
}

export default App;
