import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Account from './Account';
import SettingNavbar from '../../Components/SettingsNavBar/SettingNavbar';
import history from '../../utils/history';
import Billing from './Billing';
import CanvasIntegration from './CanvasIntegration';
import Privacy from './Privacy';

export default function Settings() {
	return (
		<Router history={history}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 divide-y m-8">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
					<SettingNavbar />
					<Switch>
						<Route exact path="/settings" component={Account} />
						<Route exact path="/settings/billing" component={Billing} />
						<Route exact path="/settings/privacy" component={Privacy} />
						<Route exact path="/settings/canvas" component={CanvasIntegration} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}
