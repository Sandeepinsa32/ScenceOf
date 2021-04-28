import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import '../../css/Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

	const history = useHistory();

	const handleToggle = () => {
		setActive(!isActive);
	};
	const DisplayToggle = () => {
		setDisplay(!isDisplay);
	};
	const ContestToggle = () => {
		setCheckContest(!checkContest);
	};

	//for user toggle
	// const [auth, setAuth] = React.useState(true);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	// const handleChange = (event) => {
	// 	setAuth(event.target.checked);
	// };

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

	return (
		<>
			<nav
				className={` nav  ${isActive ? '' : 'open'}`}
				style={{
					background: `url('${props.BackgroundImg}') #212121`,
					// filter: 'saturate(0.9)',
				}}>
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
												localStorage.removeItem('user');
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
						{/* testing For COntest Page */}
						<li
							className="dropdown-Contest-icon"
							// onMouseOut={() => ContestToggle()}
							// onClick={() => ContestToggle()}
						>
							<NavLink
								to="/active-contest"
								exact
								onMouseOver={() => ContestToggle()}
								activeClassName={classes.activeLink}>
								Contest
							</NavLink>
							<span
								onClick={() => ContestToggle()}
								// onMouseOver={() => ContestToggle()}
							>
								<ExpandMoreIcon />
							</span>
						</li>
						<span className="Contest-wrapper">
							{/* <li
								className={` Contest-Menu ${
									checkContest ? '' : 'displayContest'
								}`}
								style={{
									left: '270px',
								}}>
								All Contest
							</li> */}
							<li
								className={`Contest-Menu ${
									checkContest ? '' : 'displayContest'
								}`}>
								<NavLink
									to="/active-contest/Free-contest"
									exact
									activeClassName={classes.activeLink}
									className={classes.ContestLink}>
									Free Contest
								</NavLink>
							</li>

							<li
								className={`Contest-Menu ${
									checkContest ? '' : 'displayContest'
								}`}>
								<NavLink
									to="/active-contest/Premium-contest"
									exact
									activeClassName={classes.activeLink}
									className={classes.ContestLink}>
									Premium Contest
								</NavLink>
							</li>
							<li
								className={`Contest-Menu ${
									checkContest ? '' : 'displayContest'
								}`}>
								<NavLink
									to="/active-contest/Sponsored-contest"
									exact
									className={classes.ContestLink}
									activeClassName={classes.activeLink}>
									Sponsered Contest
								</NavLink>
							</li>
						</span>
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
														localStorage.removeItem(
															'user'
														);
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
