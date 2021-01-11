import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import React from 'react';
import history from '../../utils/history';
import GroupNavbar from './GroupNavbar';
import GrpHome from './GrpHome';
import GrpResources from './GrpResources';
import GrpNotes from './GrpNotes';
import GrpStudy from './GrpStudy';

const Group = ({ match }) => {
	const { id } = useParams();

	return (
		<Router history={history}>
			<GroupNavbar id={id} />
			<Switch>
				<Route exact path={`/groups/:${id}`}  component={GrpHome} />
				<Route exact path={`/groups/:${id}/resources`} component={GrpResources} />
				<Route exact path={`/groups/:${id}/notes`} component={GrpNotes} />
				<Route exact path={`/groups/:${id}/study`} component={GrpStudy} />
			</Switch>
		</Router>
	);
};

export default Group;
