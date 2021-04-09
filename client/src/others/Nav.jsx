import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="h/">Home</Link>
				</li>
				<li>
					<Link to="/j">About</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
			</ul>
		</nav>
	);
}
