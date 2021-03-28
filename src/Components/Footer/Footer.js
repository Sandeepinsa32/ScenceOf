import React from 'react';
import { Typography, Link, Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const imgSrc =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	footer: {
		maxHeight: '60vh',
		background: `url('${imgSrc}') no-repeat  fixed red`,
		marginTop: '10vh',
	},
	mainHeading: {
		color: '#FFF',
	},
}));

function Footer() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<footer className={classes.footer}>
				<Typography
					variant="h6"
					align="center"
					className={classes.mainHeading}
					gutterBottom>
					Follow Us On
				</Typography>

				<Grid spacing={2} align="center">
					<Grid item>
						<FacebookIcon className={classes.mainHeading} />
						<InstagramIcon className={classes.mainHeading} />
						<TwitterIcon className={classes.mainHeading} />
					</Grid>
				</Grid>

				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
					className={classes.mainHeading}>
					Something here to give the footer a purpose!
				</Typography>
				<Typography
					variant="body2"
					color="textSecondary"
					className={classes.mainHeading}
					align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://material-ui.com/">
						Your Website
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</footer>
		</>
	);
}

export default Footer;
