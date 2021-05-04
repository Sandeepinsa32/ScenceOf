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
import Winner from './Components/WinnerList';
import Demo from './Components/NavTab';
import Notfound from './Components/404.jsx';
import { Contest } from './Components/Contest/Contest';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import AdminLogin from './Admin/Login';

// console.clear();
function App() {
	return (
		<>
			<Router>
				<Switch>
					{/* user view */}
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

					{/* for Contest */}

					<Route path="/active-contest/" component={Contest} exact />

					{/* For Admin Panel */}

					<Route path="/admin" component={AdminLogin} exact />
					<Route
						path="/admin/dashboard"
						component={Dashboard}
						exact
					/>

					<Route path="/payment" component={Payment} exact />
					<Route path="/pricing" component={Pricing} exact />
					<Route path="/winner" component={Winner} exact />
					<Route path="/test" component={Demo} exact />
					<Route component={Notfound} exact />
				</Switch>
			</Router>
		</>
	);
}
export default App;
