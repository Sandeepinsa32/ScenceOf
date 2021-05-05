import React, { useState } from 'react';
import { Typography, Link, Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';

import '../../css/footer.css';
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

import { NavLink } from 'react-router-dom';

const BackgroundImg =
	'https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const useStyles = makeStyles((theme) => ({
	footerMainDiv: {
		background: `url('${BackgroundImg}')   #212121`,
		color: '#FFF',
	},
	footerText: {
		// color: '#FFF',
		fontWeight: '400',
		fontSize: '20px',
	},
}));

function Footer() {
	const classes = useStyles();
	const loggedInUser = localStorage.getItem('user');

	const [auth, setAuth] = useState(loggedInUser);
	return (
		<footer class="footer">
			<div class="footer__addr">
				<h1 class="footer__logo">Scenes Of NewEngland</h1>
				<address>
					10-12 Avenue Mohamed V Gueliz, Marrakech, 40000, Morocco
				</address>
			</div>

			<ul class="footer__nav">
				<li class="nav__item">
					<h2 class="nav__title">Legal</h2>

					<ul class="nav__ul">
						<li>
							<a href="#">Privacy Policy</a>
						</li>

						<li>
							<a href="#">Terms of Use</a>
						</li>
					</ul>
				</li>

				{!auth && (
					<li class="nav__item">
						<h2 class="nav__title">Join Us Today</h2>

						<ul class="nav__ul">
							<li>
								<Grid justify="center">
									<Grid item>
										<span
											className="button-wrapper"
											style={{
												margin: ' 0vh 5vh',
												display: 'flex',
												alignItems: 'center',
												justifyContent: ' center',
											}}>
											<NavLink to="/join" exact>
												<button
													className="modalButton join-btn"
													data-popup="accept">
													Join
												</button>
											</NavLink>
										</span>
									</Grid>
								</Grid>
							</li>
						</ul>
					</li>
				)}

				<li class="nav__item">
					<Typography
						variant="h6"
						align="center"
						className={classes.footerText}
						gutterBottom>
						Follow Us On
					</Typography>

					<ul class="nav__ul">
						<Grid spacing={2} align="center">
							<Grid item>
								<FacebookShareButton
									url="http://scenesofnewengland.com/"
									quote={'hey im sharing this'}
									hashtag="#react">
									<FacebookIcon
										logoFillColor="white"
										round={true}></FacebookIcon>
								</FacebookShareButton>
								<WhatsappShareButton
									url="http://scenesofnewengland.com/"
									quote={'hey im sharing this'}
									hashtag="#react">
									<WhatsappIcon
										logoFillColor="white"
										round={true}></WhatsappIcon>
								</WhatsappShareButton>
								<TwitterShareButton
									url="http://scenesofnewengland.com/"
									quote={'hey im sharing this'}
									hashtag="#react">
									<TwitterIcon
										logoFillColor="white"
										round={true}></TwitterIcon>
								</TwitterShareButton>
							</Grid>
						</Grid>
					</ul>
				</li>
			</ul>

			<div class="legal">
				<Typography
					variant="body2"
					color="textSecondary"
					className={classes.footerText}
					align="center">
					{'Copyright © '}
					<Link color="inherit" href="/">
						ScenesOfNewEngland All rights reserved.
					</Link>
					{new Date().getFullYear()}
				</Typography>
			</div>
		</footer>
	);
}

export default Footer;
