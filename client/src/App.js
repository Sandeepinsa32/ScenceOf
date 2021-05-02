import React from 'react';

//Import diff components
import Homepage from './Components/Homepage';
import Profile from './Components/User/Profile';
import { SignIn } from './Components/Login';
import SignUp from './Components/Join';
import AboutUs from './Components/AboutUs';
import NewCalendar from './Components/Calender/NewCalendar';
import Blog from './Components/Blog/Blog';
import Portfolio from './Components/Gallery/Gallery';
import EnterContest from './Components/Contest/EnterContest';
import ReadBlog from './Components/Blog/ReadBlog';
import ForgetPassword from './Components/Forgetpassword';
import ChangePassword from './Components/ChangePassword';
import Payment from './Components/Payment';
import Pricing from './Components/Pricing';
import {
	AllCard,
	Free,
	Premium,
	Sponsored,
} from './Components/Contest/Contest';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Dashboard from './Admin/Dashboard';
import AdminLogin from './Admin/Login';

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
					{/* For Admin Panel */}
					<Route path="/admin" component={AdminLogin} exact />
					{/* user view */}
					<Route
						path="/Forgetpassword"
						component={ForgetPassword}
						exact
					/>
					<Route
						path="/Changepassword"
						component={ChangePassword}
						exact
					/>
					<Route path="/payment" component={Payment} exact />
					<Route path="/pricing" component={Pricing} exact />
				</Switch>
			</Router>
		</>
	);
}
export default App;
