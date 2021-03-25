import React from 'react';
import {
	AppBar,
	Button,
	Card,
	CardActions,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	CardContent,
	Typography,
	Container,
	Link,
} from '@material-ui/core';
import useStyles from './App_Style';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Matfooter() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
	const classes = useStyles();

	return (
		<React.Fragment>
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
								src="https://whatpageareyouon.com/scenesof/wp-content/uploads/2020/07/logo.png"
								alt="image_logo"
								className={classes.navbarLogo}
							/>
						</Grid>

						<Grid item>
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

			<main className={classes.mai}>
				<div className={classes.herContent}>
					<div maxWidth="md" className={classes.main}>
						<Typography
							component="h2"
							variant="h4"
							align="center"
							color="textPrimary"
							gutterBottom>
							Capture, Share, Explore.
						</Typography>

						<Typography
							variant="h6"
							align="center"
							color="textSecondary"
							paragraph>
							A world of great photo contests and awards, in one
							place.
						</Typography>

						<div className={classes.btnExplore}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="outlined" color="primary">
										<a
											href="#seeThis"
											className={classes.seeThisLink}>
											Explore More
										</a>
									</Button>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>

				<Container
					className={classes.cardGrid}
					id="seeThis"
					maxWidth="lg">
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Typography
								gutterBottom
								variant="h4"
								component="h4">
								Enter a contest for free now
							</Typography>
						</Grid>
					</Grid>

					{/* End hero unit */}
					<Grid container spacing={2}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={3}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent
										className={classes.cardContent}>
										<Grid
											container
											spacing={2}
											justify="center">
											<Grid item>
												<Typography
													gutterBottom
													variant="h6"
													component="h6">
													Traveling
												</Typography>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={2}
											justify="flex-end">
											<Grid item>
												<Typography
													gutterBottom
													variant="p"
													component="p"
													color="textSecondary">
													-Brand Name
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
									<CardActions>
										<Grid
											container
											spacing={2}
											justify="center">
											<Grid item>
												<Button
													size="small"
													variant="outlined"
													color="primary"
													className={
														classes.btnJoinCon
													}>
													Join Contest
												</Button>
											</Grid>
										</Grid>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
					<div className={classes.btnExplore}>
						<Grid container spacing={2} justify="center">
							<Grid item>
								<Button
									variant="contained"
									color="default"
									size="small"
									className={classes.btnMoreCon}>
									See more open contests >
								</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Follow Us On
				</Typography>
				<Grid container spacing={4} justify="center">
					<Grid item>
						<FacebookIcon />
						<InstagramIcon />
						<TwitterIcon />
					</Grid>
				</Grid>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p">
					Something here to give the footer a purpose!
				</Typography>
				<Matfooter />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}

export default App;
