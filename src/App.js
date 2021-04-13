import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./Page/Home/Home";
import CanvasLogin from "./Page/CanvasAuth/Login/CanvasLogin";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import history from "./utils/history";
import { PersistGate } from "redux-persist/integration/react";

import setAuthToken from "./utils/setAuthToken";
import Alert from "./Components/Alert/Alert";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Dashboard from "./Page/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Courses from "./Page/Courses/Courses";
import Profile from "./Page/Profile/Profile";
import Settings from "./Page/Settings/Settings";
import Pricing from "./Page/Pricing/Pricing";
import Login from "./Page/Authentication/Login";
import Register from "./Page/Authentication/Register";
import { loadUser } from "./Redux/Action/auth";
import Tools from "./Page/Tools/Tools";
import ExcelCheck from "./Page/ExcelCheck/ExcelCheck";
import CourseHome from "./Page/Courses/CourseHome";
import Group from "./Page/Group/Group";
import LogRocket from "logrocket";
import NotFound from "./Page/404/NotFound";
import CanvasComment from "./Page/CanvasComment/CanvasComment";
// import TaskManagement from './Page/TaskManagement/TaskManagement';
import TaskBoard from "./Page/TaskManagement/TaskBoard";
import CreateBoard from "./Page/TaskManagement/CreateBoard";
import ExcelSheetHome from "./Page/ExcelCheck/ExcelSheetHome";
import CheckPlagarism from "./Page/ExcelCheck/CheckPlagarism";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    LogRocket.init("oi4xgz/automatedcanvas", {
      dom: {
        textSanitizer: true,
        inputSanitizer: true,
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Provider store={store}>
        <Router history={history}>
          <PersistGate persistor={persistor}>
            <Alert />
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/canvasAuth" component={CanvasLogin} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/courses" component={Courses} />
              <PrivateRoute exact path="/course/:id" component={CourseHome} />
              <PrivateRoute exact path="/profile/" component={Profile} />
              <PrivateRoute exact path="/groups/:id" component={Group} />
              <PrivateRoute exact path="/settings/" component={Settings} />
              <Route exact path="/pricing/" component={Pricing} />
              <PrivateRoute exact path="/boards/:id" component={TaskBoard} />
              <PrivateRoute exact path="/boards" component={CreateBoard} />
              <PrivateRoute exact path="/tools" component={Tools} />
              <PrivateRoute exact path="/excelCheck" component={ExcelCheck} />
              <PrivateRoute
                exact
                path="/checkPlagarism"
                component={CheckPlagarism}
              />

              <PrivateRoute
                exact
                path="/excelHome"
                component={ExcelSheetHome}
              />
              <PrivateRoute
                exact
                path="/canvas-comment"
                component={CanvasComment}
              />
              <Route component={NotFound} />
            </Switch>
          </PersistGate>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

//
const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
  console.log(error, info);
};
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
