import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

// framework
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

// css
import '../../css/Navbar.css';

//importing components
import UserNav from './UserNav';
import ContestNav from './ContestNav';

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
	popupMenu: {
		fontSize: '16px',
		fontWeight: 'bold',
		color: '#111',
	},
	ContestLink: {
		color: '#2e8b57 !important',
		cursor: 'pointer',
	},
}));

function Navbar(props) {
	const classes = useStyles();
	const [isActive, setActive] = useState('false');
	const [isDisplay, setDisplay] = useState('false');
	const [checkContest, setCheckContest] = useState('false');

	// const BackgroundImg = `' ${props.BackgroundImg}'`;
	// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

	const handleToggle = () => {
		setActive(!isActive);
	};
	const DisplayToggle = () => {
		setDisplay(!isDisplay);
	};
	const ContestToggle = () => {
		setCheckContest(!checkContest);
	};

	const loggedInUser = localStorage.getItem('user');
	const Username = localStorage.getItem('username');

	const [auth, setAuth] = useState(loggedInUser);

	return (
		<>
			<nav
				className={` nav  ${isActive ? '' : 'open'}`}
				style={
					{
						// background: `url('${props.BackgroundImg}') #212121`,
						// filter: 'saturate(0.9)',
					}
				}>
				<div className="nav_section">
					<button className="menu">
						<i
							className="hamburger"
							onClick={() => {
								burgerToggle();
								handleToggle();
							}}></i>
					</button>
					<div className="brand">
						<NavLink to="/" exact>
							<img
								src={logoImg}
								alt="image_logo"
								className="headerLogo"
							/>
						</NavLink>
					</div>
					{/* in mobile mode */}
					{auth && <UserNav NameOfClass="menu" username={Username} />}
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
						{/* testing For COntest Page */}
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
								Gallery
							</NavLink>
						</li>

						<li
							className="dropdown-icon"
							onClick={() => DisplayToggle()}>
							<Link style={{ textDecoration: 'none' }} to="#">
								Follow us on
							</Link>
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
						{/* explore more */}
						<li>
							<ContestNav />
						</li>
						{/* in desktop mode   it show UserIcon */}

						{auth && (
							<li>
								<UserNav
									NameOfClass={
										'narrowLinks' + 'hide_userIcon'
									}
									username={Username}
								/>
							</li>
						)}

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
