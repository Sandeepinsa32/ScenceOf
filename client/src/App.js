import React, { useState } from 'react';

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
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';

// import NotFound from './Notfound';
// import Navbar from './Components/Header/Navbar';
// import Album from './Components/others/Blog';

// console.clear();
function App() {
	const history = useHistory();
	// const [token, setToken] = useState(localStorage.getItem('user'));
	// console.log(token);

	const requireAuth = () => {
		if (localStorage.getItem('user') === false) {
			alert('done');
			<Redirect to="/login" />;
		}
	};

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

					<Route path="/active-contest" onEnter={requireAuth} exact>
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
					<Route path="/myaccount" onEnter={requireAuth} exact>
						<Profile />
					</Route>
					<Route
						path="/contest/enter-a-contest/"
						onEnter={requireAuth}
						exact>
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
