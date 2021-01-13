import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import React from 'react';
import history from '../../utils/history';
import GroupNavbar from './GroupNavbar';
import GrpHome from './GrpHome';
import GrpResources from './GrpResources';
import GrpNotes from './GrpNotes';
import GrpStudy from './GrpStudy';
import SinglePost from './SinglePost';

const Group = ({ match }) => {
	const { id } = useParams();

	return (
		<Router history={history}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 m-8 ">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
					<GroupNavbar id={id} />
					<Switch>
						<Route exact path={`/groups/:${id}`} component={GrpHome} />
						<Route exact path={`/groups/post/:${id}`} component={SinglePost} />
						<Route exact path={`/groups/:${id}/resources`} component={GrpResources} />
						<Route exact path={`/groups/:${id}/notes`} component={GrpNotes} />
						<Route exact path={`/groups/:${id}/study`} component={GrpStudy} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default Group;
