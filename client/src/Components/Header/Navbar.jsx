import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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

	//for user toggle
	// const [auth, setAuth] = React.useState(true);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	//end of user toggle

	const loggedInUser = localStorage.getItem('user');
	const Username = localStorage.getItem('username');

	const [auth, setAuth] = useState(loggedInUser);

	// const login = localStorage.getItem('IsUserAuth');
	// console.log(login);
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
					<NavLink to="/" exact>
						<img
							src={logoImg}
							alt="image_logo"
							className="headerLogo"
						/>
					</NavLink>
				</div>
				{/* in mobile mode */}
				{auth && (
					<span className="menu">
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit">
							<AccountCircle />
						</IconButton>
						<Menu
							style={{
								marginTop: '50px',
								right: '50px',
							}}
							id="menu-appbar"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}>
							<MenuItem>
								<NavLink to="/myaccount" exact>
									<div
										className={classes.popupMenu}
										style={{
											width: '100%',
											color: '#2e8b57',
											fontWeight: 'bolder',
											fontSize: '16px',
											textAlign: 'center',
											justifyContent: 'center',
											margin: '0 auto',
											textTransform: 'uppercase',
										}}>
										Welcome {Username}
									</div>
								</NavLink>
							</MenuItem>
							<MenuItem>
								<NavLink
									to="/myaccount"
									exact
									className={classes.popupMenu}>
									My Account
								</NavLink>
							</MenuItem>
							<MenuItem>
								<NavLink
									to="/myaccount"
									exact
									className={classes.popupMenu}>
									Your Photos
								</NavLink>
							</MenuItem>
							<MenuItem>
								<NavLink
									to="/myaccount"
									exact
									className={classes.popupMenu}>
									Your Contest
								</NavLink>
							</MenuItem>
							<MenuItem>
								<NavLink
									to="/myaccount"
									exact
									className={classes.popupMenu}>
									Notificaiton
								</NavLink>
							</MenuItem>

							<MenuItem>
								<li>
									<div className="button-wrapper">
										<button
											className="modalButton join-btn"
											data-popup="accept"
											onClick={() => {
												setAuth(
													localStorage.removeItem(
														'user'
													)
												);
												// setIsLogin(true);
												// setIsLogin(false);
												history.push('/login');
											}}>
											LogOut
										</button>
									</div>
								</li>
							</MenuItem>
						</Menu>
					</span>
				)}

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
								Gallery
							</NavLink>
						</li>

						<li
							className="dropdown-icon"
							onClick={() => DisplayToggle()}>
							<a href="#">Follow us on</a>
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
						{/* in desktop mode  */}

						{auth && (
							<span className="narrowLinks  hide_userIcon">
								<IconButton
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit">
									<AccountCircle />
								</IconButton>
								<Menu
									style={{
										marginTop: '50px',
										right: '50px',
									}}
									id="menu-appbar"
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}>
									<MenuItem>
										<NavLink to="/myaccount" exact>
											<div
												className={classes.popupMenu}
												style={{
													width: '100%',
													color: '#2e8b57',
													fontWeight: 'bolder',
													fontSize: '16px',
													textAlign: 'center',
													justifyContent: 'center',
													margin: '0 auto',
													textTransform: 'uppercase',
												}}>
												Welcome {Username}
											</div>
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink
											to="/myaccount"
											exact
											className={classes.popupMenu}>
											My Account
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink
											to="/myaccount"
											exact
											className={classes.popupMenu}>
											Your Photos
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink
											to="/myaccount"
											exact
											className={classes.popupMenu}>
											Your Contests
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink
											to="/myaccount"
											exact
											className={classes.popupMenu}>
											Notification
										</NavLink>
									</MenuItem>

									<MenuItem>
										<li>
											<div className="button-wrapper">
												<button
													className="modalButton join-btn"
													data-popup="accept"
													onClick={() => {
														setAuth(
															localStorage.removeItem(
																'user'
															)
														);
														// setIsLogin(true);
														// setIsLogin(false);
														history.push('/login');
													}}>
													LogOut
												</button>
											</div>
										</li>
									</MenuItem>
								</Menu>
							</span>
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

						{/* {auth && (
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
						)} */}
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
