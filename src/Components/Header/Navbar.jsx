import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
						}}>
						ham
					</i>
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
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>

						<li
							className="dropdown-icon"
							onClick={() => DisplayToggle()}>
							<a>Follow us on</a>
						</li>
						<li
							class={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<a href="#" class="social-icon">
								<i class="fa fa-facebook"></i>
							</a>
						</li>
						<li
							class={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<a href="#" class="social-icon">
								<i class="fa fa-twitter"></i>
							</a>
						</li>

						<li
							class={`Social-icons ${
								isDisplay ? '' : 'display'
							}`}>
							<a href="#" class="social-icon">
								<i class="fa fa-linkedin"></i>
							</a>
						</li>

						<li>
							<div class="button-wrapper">
								<button class="modalButton Sign-btn  ">
									Sign In
								</button>
							</div>
						</li>

						<li>
							<div class="button-wrapper">
								<button
									class="modalButton join-btn"
									data-popup="accept">
									Join
								</button>
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
