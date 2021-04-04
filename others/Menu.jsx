import React, {Fragment} from 'react';
import './index.css';
import SignIn from '../src/SignIn';
import SignUp from '../src/SignUp';
import App from '../src/App';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default function Menu() {
	const name = 'John Doe';
	return (
		<Router>
			<main>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to={`/about/${name}`}>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path='/' exact component={SignIn} />
					<Route path='/about/:name' component={SignUp} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</main>
		</Router>
	);
}

// const Home = () => (
// 	<Fragment>
// 		<h1>Home</h1>
// 	</Fragment>
// );

const About = ({
	match: {
		params: {name},
	},
}) => (
	// props.match.params.name
	<Fragment>
		<h1>About {name}</h1>
	</Fragment>
);

const Contact = () => (
	<Fragment>
		<h1>Contact</h1>
	</Fragment>
);
