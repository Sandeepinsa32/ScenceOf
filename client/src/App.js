import React from 'react';

//Import diff components
import Homepage from './Homepage';
import Navbar from './Components/Header/Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import NotFound from './Notfound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				{/* <Homepage /> */}
				<Switch>
					<Route path="/" exact>
						<Homepage />
					</Route>
					<Route path="/about-us" exact>
						<AboutUs />
					</Route>
					<Route path="/404" exact>
						<NotFound />
					</Route>
					<Route path="/join" exact>
						<SignUp />
					</Route>
					<Route path="/login" exact>
						<SignIn />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
export default App;
