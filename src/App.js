import React, { useState } from 'react';
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
	spacing,
	Menu,
	MenuItem,
	IconButton,
	InputBase,
	Paper,
	CardActionArea,
} from '@material-ui/core';
import useStyles from './App_Style';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';

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
const test = [1, 2, 3];

function App() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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

			<main>
				<div className={classes.herContent}>
					<div maxWidth="md" className={classes.main}>
						<nav>
							<Grid
								justify="space-evenly" // Add it here :)
								container
								spacing={24}>
								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									Home
								</Link>

								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									About
								</Link>

								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									<Button
										aria-controls="simple-menu"
										aria-haspopup="true"
										onClick={handleClick}
										className={classes.link}>
										Contests
									</Button>
									<Menu
										id="simple-menu"
										anchorEl={anchorEl}
										keepMounted
										open={Boolean(anchorEl)}
										onClose={handleClose}>
										<MenuItem onClick={handleClose}>
											categories
										</MenuItem>
										<MenuItem onClick={handleClose}>
											Ending Soon
										</MenuItem>
										<MenuItem onClick={handleClose}>
											Popular
										</MenuItem>
										<MenuItem onClick={handleClose}>
											Winner
										</MenuItem>
									</Menu>
								</Link>
								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									Calender
								</Link>
								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									Directory
								</Link>
								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									Sponsor
								</Link>
								<Link
									variant="button"
									color="primary"
									href="#"
									className={classes.link}>
									Blog
								</Link>
							</Grid>
						</nav>
						<div className={classes.headingDiv}>
							<Typography
								component="h3"
								variant="h3"
								p={1}
								align="center"
								color="textPrimary"
								className={classes.mainHeading}
								gutterBottom>
								Capture, Share, Explore.
							</Typography>

							<Grid
								justify="center" // Add it here :)
								container
								spacing={24}>
								<Grid item>
									<Paper
										component="form"
										className={classes.rootD}>
										<InputBase
											className={classes.input}
											placeholder="Search a Content"
											// inputProps={{
											// 	'aria-label':
											// 		'search google maps',
											// }}
										/>
										<IconButton
											type="submit"
											className={classes.iconButton}
											aria-label="search">
											<SearchIcon />
										</IconButton>
									</Paper>
								</Grid>
							</Grid>
							{/* <Typography
								variant="h6"
								align="center"
								color="textSecondary"
								className={classes.mainHeading}
								paragraph>
								A world of great photo contests and awards, in
								one place.
							</Typography> */}
						</div>
					</div>
				</div>
				<Container className={classes.cardGrid} maxWidth="lg">
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
									See more open contests
								</Button>
							</Grid>
						</Grid>
					</div>
				</Container>

				{/* testimonial */}
				<Container className={classes.cardGrid} maxWidth="lg">
					<Grid container>
						{test.map((card) => (
							<Card
								className={classes.root}
								key={card}
								xs={12}
								sm={4}
								md={3}>
								<CardActionArea>
									<CardContent>
										<Grid
											container
											spacing={2}
											justify="center">
											<Grid item>
												<CardMedia
													className={classes.media}
													image="https://scenesofnewengland.com/wp-content/uploads/2020/07/pexels-photo-220453.png"
												/>
											</Grid>

											<Grid item>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p">
													I love this site, so many
													amazing photos that inspired
													me every single day
												</Typography>
												<Typography
													variant="subtitle1"
													component="h6"
													align="right">
													-John Kei
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
					</Grid>
				</Container>
				{/* testimonial end */}
			</main>
			{/* Footer */}
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
				<Matfooter />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}

export default App;
