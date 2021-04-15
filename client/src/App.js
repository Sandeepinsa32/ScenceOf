import React from 'react';

//Import diff components
import Homepage from './Homepage';
// import Navbar from './Components/Header/Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import NotFound from './Notfound';
import Album from './Components/others/Blog';
import NewCalendar from './NewCalendar';
import Contest from './Contest';
import Blog from './blog';
import Portfolio from './Portfolio';
import EnterContest from './EnterContest';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
console.clear();
function App() {
	// const [token, setToken] = useState('');

	return (
		<>
			<Router>
				{/* <Navbar style={{ marginBottom: '10vh' }} /> */}
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
					{/* 
					<Route exact>
						<Album />
					</Route> */}
					<Route path="/contest/enter-a-contest" exact>
						<EnterContest />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
export default App;
