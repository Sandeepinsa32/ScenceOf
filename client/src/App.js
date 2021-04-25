import React from 'react';

//Import diff components
import Homepage from './Homepage';
import Profile from './profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import NewCalendar from './NewCalendar';
import Contest from './Contest';
import Blog from './blog';
import Portfolio from './Gallery';
import EnterContest from './EnterContest';
import ReadBlog from './ReadBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// console.clear();
function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Homepage />
					</Route>

					<Route path="/calendar" exact>
						<NewCalendar />
					</Route>

					<Route path="/active-contest" exact>
						<Contest />
					</Route>

					<Route path="/about-us" exact>
						<AboutUs />
					</Route>

					<Route path="/blog" exact>
						<Blog />
					</Route>

					<Route path="/portfolio" exact>
						<Portfolio />
					</Route>

					<Route path="/join" exact>
						<SignUp />
					</Route>

					<Route path="/login" exact>
						<SignIn />
					</Route>
					<Route path="/myaccount" exact>
						<Profile />
					</Route>
					<Route path="/contest/enter-a-contest/" exact>
						<EnterContest />
					</Route>
					<Route path="/blog/readblog/" exact>
						<ReadBlog />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
export default App;
