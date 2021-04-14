import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {makeStyles} from '@material-ui/core/styles';

import {useHistory} from 'react-router-dom';

const logoImg = 'https://whatpageareyouon.com/scenesof/wp-content/uploads/2020/07/logo.png';

const useStyles = makeStyles((theme) => ({
	activeLink: {
		color: '#3dad4b !important',
		borderBottom: ' 1px solid #3dad4b !important',
		fontWeight: '600',
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
	if (loggedInUser) {
		var LoggindUser = loggedInUser;
		var isLogin = true;
		console.log(LoggindUser);
		// setUser(foundUser);
	}
	return (
		<>
			<nav class={`nav ${isActive ? '' : 'open'}`}>
				<button class='menu'>
					<i
						class='hamburger'
						onClick={() => {
							burgerToggle();
							handleToggle();
						}}></i>
				</button>
				<div class='brand'>
					<img src={logoImg} alt='image_logo' className='headerLogo' />
					{/* <a href="#">Brand</a> */}
				</div>
				<div className='narrowLinks'>
					<ul class='navbar'>
						<li>
							<NavLink to='/' exact activeClassName={classes.activeLink}>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink to='/calendar' exact activeClassName={classes.activeLink}>
								Calendar
							</NavLink>
						</li>
						<li>
							<NavLink to='/active-contest' exact activeClassName={classes.activeLink}>
								Contest
							</NavLink>
						</li>
						<li>
							<NavLink to='/about-us' exact activeClassName={classes.activeLink}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to='/blog' exact activeClassName={classes.activeLink}>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink to='/portfolio' exact activeClassName={classes.activeLink}>
								Portfolio
							</NavLink>
						</li>

						<li className='dropdown-icon' onClick={() => DisplayToggle()}>
							<a href='_blank'>Follow us on</a>
						</li>
						<li class={`Social-icons ${isDisplay ? '' : 'display'}`}>
							<NavLink to='/404' class='social-icon'>
								<i class='fa fa-facebook'></i>
							</NavLink>
						</li>
						<li class={`Social-icons ${isDisplay ? '' : 'display'}`}>
							<NavLink to='/404' class='social-icon'>
								<i class='fa fa-twitter'></i>
							</NavLink>
						</li>

						<li class={`Social-icons ${isDisplay ? '' : 'display'}`}>
							<NavLink to='/404' class='social-icon'>
								<i class='fa fa-linkedin'></i>
							</NavLink>
						</li>
						{!isLogin && (
							<li>
								{/* <div class="button-wrapper"> */}
								<NavLink to='/login' exact activeClassName={classes.activeLink} class='modalButton Sign-btn '>
									Sign in
								</NavLink>
								{/* </div> */}
							</li>
						)}
						{!isLogin && (
							<li>
								<div class='button-wrapper'>
									<NavLink to='/join' exact>
										<button class='modalButton join-btn' data-popup='accept'>
											Join
										</button>
									</NavLink>
								</div>
							</li>
						)}
						{isLogin && <li>{LoggindUser}</li>}
						{isLogin && (
							<li>
								<div class='button-wrapper'>
									<button
										class='modalButton join-btn'
										data-popup='accept'
										onClick={() => {
											localStorage.removeItem('user');
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
