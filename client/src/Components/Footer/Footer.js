import React from 'react';
import { Typography, Link, Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	footerMainDiv: {
		maxHeight: '60vh',
		background: `url('${BackgroundImg}')  #212121`,
		marginTop: '10vh',
		color: '#FFF',
	},
	footerText: {
		color: '#FFF',
	},
}));

function Footer() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<footer className={classes.footerMainDiv}>
				<Typography
					variant="h6"
					align="center"
					className={classes.footerText}
					gutterBottom>
					Follow Us On
				</Typography>

				<Grid spacing={2} align="center">
					<Grid item>
						<FacebookIcon className={classes.footerText} />
						<InstagramIcon className={classes.footerText} />
						<TwitterIcon className={classes.footerText} />
					</Grid>
				</Grid>

				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
					className={classes.footerText}>
					Something here to give the footer a purpose!
				</Typography>
				<Typography
					variant="body2"
					color="textSecondary"
					className={classes.footerText}
					align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://material-ui.com/">
						ScenesOfNewEngland.Com
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</footer>
		</>
	);
}

export default Footer;
