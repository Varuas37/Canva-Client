import { BrowserRouter as Router, Switch, useParams } from 'react-router-dom';
import React from 'react';
import ClassNavBar from '../../Components/ClassNavBar/ClassNavBar';
import history from '../../utils/history';
import Course from './Course';
import Announcements from './CourseSections/Announcements';
import Assignments from './CourseSections/Assignments';
import CourseGroup from './CourseSections/CourseGroup';
import PrivateRoute from '../../Components/routing/PrivateRoute';


const CourseHome = () => {
	const { id } = useParams();
	return (
		<Router history={history}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 m-8">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
					<ClassNavBar id={id} />
					<Switch>
						<PrivateRoute exact path="/course/:id" component={Course} />
						<PrivateRoute exact path="/course/:id/announcement" component={Announcements} />
						<PrivateRoute exact path="/course/:id/assignment" component={Assignments} />
						<PrivateRoute exact path="/course/:id/group" component={CourseGroup} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};
export default CourseHome;
