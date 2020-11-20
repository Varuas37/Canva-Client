import React from "react";
import Features from "./Components/Features/Features";
import Hero from "./Components/Hero/Hero";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Auth/Login/Login";

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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
    <Route exact path ="/" component={Home}/>
    <Alert/>
    <Navbar></Navbar>
      <Switch>
        <Route exact path ="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/courses" component={Courses}/>
        <Route exact path="/courses/:id" component={Course}/>
      </Switch>
    </Router>
    </Provider>
   
  );
}

export default App;
