import React from 'react';
import { Grid, CssBaseline, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const logoImg =
	'https://whatpageareyouon.com/scenesof/wp-content/uploads/2020/07/logo.png';

const useStyles = makeStyles((theme) => ({
	headerMain: {
		backgroundColor: '#1e1e1e',
	},
	headerLogo: {
		marginTop: '20px',
		height: '50px',
	},
	headerSocialMediaIcon: {
		color: '#FFF',
	},
	headerJoinBtn: {
		color: '#fff',
		backgroundColor: '#5AD9E6',
		margin: '20px 10px',
		fontSize: '12px',
		justifyContent: 'center',
	},
	headerSignInbtn: {
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
				className={classes.headerMain}
				maxWidth="md">
				<Toolbar>
					<Grid
						justify="space-between" // Add it here :)
						container
						spacing={24}>
						<Grid item>
							<img
								src={logoImg}
								alt="image_logo"
								className={classes.headerLogo}
							/>
						</Grid>

						<Grid item>
							<span justify="center">
								<FacebookIcon
									variant="contained"
									color="primary"
									align="right"
									className={classes.headerSocialMediaIcon}
								/>
								<InstagramIcon
									className={classes.headerSocialMediaIcon}
								/>
								<TwitterIcon
									className={classes.headerSocialMediaIcon}
								/>
							</span>

							<Button
								variant="contained"
								size="small"
								color="primary"
								align="right"
								className={classes.headerJoinBtn}>
								Join
							</Button>

							<Button
								color="transparent"
								variant="outlined"
								size="small"
								align="right"
								className={classes.headerSignInbtn}>
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
