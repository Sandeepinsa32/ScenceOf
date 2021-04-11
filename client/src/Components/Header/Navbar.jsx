import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

const logoImg =
	'https://whatpageareyouon.com/scenesof/wp-content/uploads/2020/07/logo.png';
function Navbar() {
	const [isActive, setActive] = useState('false');
	const [isDisplay, setDisplay] = useState('false');

	const handleToggle = () => {
		setActive(!isActive);
	};
	const DisplayToggle = () => {
		setDisplay(!isDisplay);
	};
	return (
		<>
			<nav class={`nav ${isActive ? '' : 'open'}`}>
				<button class="menu">
					<i
						class="hamburger"
						onClick={() => {
							burgerToggle();
							handleToggle();
						}}></i>
				</button>
				<div class="brand">
					<img
						src={logoImg}
						alt="image_logo"
						className="headerLogo"
					/>
					{/* <a href="#">Brand</a> */}
				</div>
				<div className="narrowLinks">
					<ul class="navbar">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about-us">About</Link>
						</li>
						<li>
							<Link to="/404">Services</Link>
						</li>
						<li>
							<Link to="/calendar">Calendar</Link>
						</li>

						<li
							className="dropdown-icon"
							onClick={() => DisplayToggle()}>
							<a href="_blank">Follow us on</a>
						</li>
						<li
							class={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<Link to="/404" class="social-icon">
								<i class="fa fa-facebook"></i>
							</Link>
						</li>
						<li
							class={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<Link to="/404" class="social-icon">
								<i class="fa fa-twitter"></i>
							</Link>
						</li>

						<li
							class={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<Link to="/404" class="social-icon">
								<i class="fa fa-linkedin"></i>
							</Link>
						</li>

						<li>
							{/* <div class="button-wrapper"> */}
							<Link to="/login" class="modalButton Sign-btn  ">
								Sign in
							</Link>
							{/* </div> */}
						</li>

						<li>
							<div class="button-wrapper">
								<Link to="/join">
									<button
										class="modalButton join-btn"
										data-popup="accept">
										Join
									</button>
								</Link>
							</div>
						</li>
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
