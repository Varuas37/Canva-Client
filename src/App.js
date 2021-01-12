import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Page/Home/Home';
import CanvasLogin from './Page/CanvasAuth/Login/CanvasLogin';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import history from './utils/history';

import setAuthToken from './utils/setAuthToken';
import Alert from './Components/Alert/Alert';
import PrivateRoute from './Components/routing/PrivateRoute';
import Dashboard from './Page/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Courses from './Page/Courses/Courses';
import Profile from './Page/Profile/Profile';
import Settings from './Page/Settings/Settings';
import Pricing from './Page/Pricing/Pricing';
import Login from './Page/Authentication/Login';
import Register from './Page/Authentication/Register';
import { loadUser } from './Redux/Action/auth';
import Tools from './Page/Tools/Tools';
import ExcelCheck from './Page/ExcelCheck/ExcelCheck';
import CourseHome from './Page/Courses/CourseHome';
import Group from './Page/Group/Group';
import CourseGroup from './Page/Courses/CourseSections/CourseGroup';
import GrpHome from './Page/Group/GrpHome';
import LogRocket from 'logrocket';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		LogRocket.init('oi4xgz/automatedcanvas', {
			dom: {
				textSanitizer: true,
				inputSanitizer: true,
			},
		});

		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router history={history}>
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
					<PrivateRoute exact path="/tools" component={Tools} />
					<PrivateRoute exact path="/excelCheck" component={ExcelCheck} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
