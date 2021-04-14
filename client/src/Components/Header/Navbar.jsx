import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';

const logoImg =
	'https://whatpageareyouon.com/scenesof/wp-content/uploads/2020/07/logo.png';

const useStyles = makeStyles((theme) => ({
	activeLink: {
		color: '#3dad4b !important',
		borderBottom: ' 1px solid #3dad4b !important',
		fontWeight: '600',
		'&:hover': {
			textDecoration: 'none',
			cursor: 'pointer',
		},
	},
}));

function Navbar() {
	const classes = useStyles();
	const [isActive, setActive] = useState('false');
	const [isDisplay, setDisplay] = useState('false');

	const history = useHistory();

	const handleToggle = () => {
		setActive(!isActive);
	};
	const DisplayToggle = () => {
		setDisplay(!isDisplay);
	};

	const loggedInUser = localStorage.getItem('user');
	const Username = localStorage.getItem('username');
	// const login = localStorage.getItem('IsUserAuth');
	// console.log(login);
	const [auth, setAuth] = useState(loggedInUser);

	// const [isLogin, setIsLogin] = useState(false);

	// if (login === 'success') {
	// }
	return (
		<>
			<nav className={`nav ${isActive ? '' : 'open'}`}>
				<button className="menu">
					<i
						className="hamburger"
						onClick={() => {
							burgerToggle();
							handleToggle();
						}}></i>
				</button>
				<div className="brand">
					<img
						src={logoImg}
						alt="image_logo"
						className="headerLogo"
					/>
					{/* <a href="#">Brand</a> */}
				</div>
				<div className="narrowLinks">
					<ul className="navbar">
						<li>
							<NavLink
								to="/"
								exact
								activeClassName={classes.activeLink}>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/calendar"
								exact
								activeClassName={classes.activeLink}>
								Calendar
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/active-contest"
								exact
								activeClassName={classes.activeLink}>
								Contest
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about-us"
								exact
								activeClassName={classes.activeLink}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/blog"
								exact
								activeClassName={classes.activeLink}>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/portfolio"
								exact
								activeClassName={classes.activeLink}>
								Portfolio
							</NavLink>
						</li>

						<li
							className="dropdown-icon"
							onClick={() => DisplayToggle()}>
							<a href="_blank">Follow us on</a>
						</li>
						<li
							className={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<NavLink to="/404" className="social-icon">
								<i className="fa fa-facebook"></i>
							</NavLink>
						</li>
						<li
							className={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<NavLink to="/404" className="social-icon">
								<i className="fa fa-twitter"></i>
							</NavLink>
						</li>

						<li
							className={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<NavLink to="/404" className="social-icon">
								<i className="fa fa-linkedin"></i>
							</NavLink>
						</li>
						{!auth && (
							<li>
								{/* <div className="button-wrapper"> */}
								<NavLink
									to="/login"
									exact
									activeClassName={classes.activeLink}
									className="modalButton Sign-btn ">
									Sign in
								</NavLink>
								{/* </div> */}
							</li>
						)}
						{!auth && (
							<li>
								<div className="button-wrapper">
									<NavLink to="/join" exact>
										<button
											className="modalButton join-btn"
											data-popup="accept">
											Join
										</button>
									</NavLink>
								</div>
							</li>
						)}
						{auth && <li>{Username}</li>}
						{auth && (
							<li>
								<div className="button-wrapper">
									<button
										className="modalButton join-btn"
										data-popup="accept"
										onClick={() => {
											setAuth(
												localStorage.removeItem('user')
											);
											// setIsLogin(true);
											// setIsLogin(false);
											history.push('/login');
										}}>
										LogOut
									</button>
								</div>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
}

function burgerToggle() {
	let linksEl = document.querySelector('.navbar');
	if (ReactDOM.findDOMNode(linksEl).style.display === 'block') {
		ReactDOM.findDOMNode(linksEl).style.display = 'none';
	} else {
		ReactDOM.findDOMNode(linksEl).style.display = 'block';
	}
}

export default Navbar;
