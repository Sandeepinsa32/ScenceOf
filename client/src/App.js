import React from 'react';

//Import diff components
import Homepage from './Homepage';
import Profile from './profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import NewCalendar from './NewCalendar';
import Blog from './blog';
import Portfolio from './Gallery';
import EnterContest from './EnterContest';
import ReadBlog from './ReadBlog';
import { AllCard, Free, Premium, Sponsored } from './Contest';
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

					{/* for Contest */}

					<Route path="/active-contest/" component={AllCard} exact />
					<Route
						path="/active-contest/Free-contest"
						component={Free}
						exact
					/>
					<Route
						path="/active-contest/Premium-contest"
						component={Premium}
						exact
					/>
					<Route
						path="/active-contest/Sponsored-contest"
						component={Sponsored}
						exact
					/>
				</Switch>
			</Router>
		</>
	);
}
export default App;
