import { BrowserRouter as Router, Switch, Route, Link ,useParams} from 'react-router-dom';
import React from 'react';
import ClassNavBar from '../../Components/ClassNavBar/ClassNavBar';
import history from '../../utils/history';
import Course from './Course';
import Announcements from './CourseSections/Announcements';
import Assignments from './CourseSections/Assignments';
import Group from './CourseSections/Group';

const CourseHome=({match})=> {
	const{id} = useParams();
	return (
		<Router history={history}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 m-8">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
					<ClassNavBar id={id} />
					<Switch>
						<Route exact path="/course/:id" component={Course} />
						<Route exact path="/course/:id/announcement" component={Announcements} />
						<Route exact path="/course/:id/assignment" component={Assignments} />
						<Route exact path="/course/:id/group" component={Group} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}
export default CourseHome;