import React from 'react';
import Homepage from '../Homepage';
// import SignIn from '../SignIn';
import Nav from './Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<Nav />
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/h">
						<Homepage />
					</Route>
					<Route path="/j">
						<SignIn />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Users() {
	return <h2>Us</h2>;
}
