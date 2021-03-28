import React from 'react';
import { Grid, CssBaseline, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const imgSrc =
	'https://whatpageareyouon.com/scenesof/wp-content/uploads/2020/07/logo.png';
const useStyles = makeStyles((theme) => ({
	navbarMain: {
		backgroundColor: '#1e1e1e',
		// backgroundColor: 'steelblue',
	},
	navbarLogo: {
		marginTop: '20px',
		height: '50px',
	},
	mainHeading: {
		color: '#FFF',
	},
	btnJoin: {
		color: '#fff',
		backgroundColor: '#5AD9E6',
		margin: '20px 10px',
		fontSize: '12px',
		justifyContent: 'center',
	},
	btnSign: {
		color: '#fff',
		borderColor: '#fff',
		backgroundColor: 'transparent',
		margin: '20px 10px',
		textTransform: 'normal',
		fontSize: '12px',
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar
				position="sticky"
				color="transparent"
				className={classes.navbarMain}
				maxWidth="md">
				<Toolbar>
					<Grid
						justify="space-between" // Add it here :)
						container
						spacing={24}>
						<Grid item>
							<img
								src={imgSrc}
								alt="image_logo"
								className={classes.navbarLogo}
							/>
						</Grid>

						<Grid item>
							<FacebookIcon
								variant="contained"
								color="primary"
								align="right"
								className={classes.mainHeading}
							/>
							<InstagramIcon className={classes.mainHeading} />
							<TwitterIcon className={classes.mainHeading} />

							<Button
								variant="contained"
								size="small"
								color="primary"
								align="right"
								className={classes.btnJoin}>
								Join
							</Button>

							<Button
								color="transparent"
								variant="outlined"
								size="small"
								align="right"
								className={classes.btnSign}>
								Sign
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;
