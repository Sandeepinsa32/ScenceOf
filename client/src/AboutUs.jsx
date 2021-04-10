import React from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
// import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';

const BackgroundImg = './png/Bg_black.gif';
const BackgroundImg2 = './png/trans_png.png';

// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}') fixed #EDAE9B`,
		boxShadow: '-1px -12px 7px -12px rgb(0 ,0 ,0.75)',
	},
	SecondDiv: {
		minHeight: '100vh',
		padding: '10vh 5vw',
		backgroundColor: '#fff',
		boxShadow: '-1px -12px 7px -12px rgb(0 ,0 ,0.75)',
	},
	ThirdDiv: {
		minHeight: '100vh',
		padding: '10vh 5vw',
		backgroundColor: '#EDAE9B',
		boxShadow: '-1px -12px 7px -12px rgb(0 ,0 ,0.75)',
		background: `url('${BackgroundImg2}')`,
	},
	SectionHeadingDiv: {
		marginTop: '20vh',
		color: '#212121',
	},
	SectionHeading: {
		color: '#EE6059',
		fontFamily: "'Dosis', sans-serif",
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
	},
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	gridFlex: {
		height: '80vh',
		display: 'flex',
		flexDirection: 'column',
	},
	img: {
		maxWidth: '50vw',
		maxHeight: '80vh',

		[theme.breakpoints.down('sm')]: {
			minWidth: '90vw',
			minHeight: '49vh',
		},
	},
}));

function AboutUs() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			{/* <Navbar /> */}

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					<div className={classes.SectionHeadingDiv}>
						<Typography
							component="h3"
							variant="h3"
							p={1}
							align="center"
							color="textPrimary"
							className={classes.SectionHeading}
							gutterBottom>
							Who we are
						</Typography>
						<Typography
							component="h3"
							variant="h3"
							p={1}
							align="center"
							className={classes.SectionHeading}
							gutterBottom>
							and
						</Typography>
						<Typography
							component="h3"
							variant="h3"
							p={1}
							align="center"
							color="textPrimary"
							className={classes.SectionHeading}
							gutterBottom>
							What we do?
						</Typography>

						<div align="center" style={{ marginTop: '15vh' }}>
							<Typography
								component="p"
								variant="  body1"
								align="center"
								style={{ color: '#FFFDFD' }}>
								Find Out More
							</Typography>
							<Typography
								component="p"
								variant="  body1"
								align="center"
								color="textPrimary">
								<img
									src="./png/DownArrow.png"
									alt="arrow_Downard"
									style={{ height: '30px' }}
								/>
							</Typography>
						</div>
					</div>
				</div>
				<div
					maxWidth="md"
					className={classes.SecondDiv}
					style={{ Background: '#fff' }}>
					<Typography
						component="h3"
						variant="h3"
						p={1}
						align="center"
						color="textPrimary"
						className={classes.SectionHeading}
						gutterBottom>
						Who we are ?
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						align="center"
						style={{ color: '#212121' }}>
						Our two co-founders (and photo fanatics) came together
						to find a solution to empower creators in a fun and safe
						environment. We’ve built a unique photography community
						and photo sharing site that fosters collaboration and
						rewards creativity.
					</Typography>
					<Typography
						component="h3"
						variant="h3"
						p={1}
						align="center"
						color="textPrimary"
						className={classes.SectionHeading}
						style={{ marginTop: '10vh' }}
						gutterBottom>
						What we do?
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						align="center"
						style={{ color: '#212121' }}>
						We connect millions of visual creators in a community
						with photography tools to help them explore and grow
						their craft.Photographs are the universal language of
						our era. Everyone has hundreds, maybe thousands in their
						pocket. Weightless, they turn the scale when the
						argument is: What happened here? Images don’t age or
						warp. A great photographer’s strings never go out of
						tune.
					</Typography>
					<Typography
						component="h3"
						variant="h3"
						p={1}
						align="center"
						color="textPrimary"
						className={classes.SectionHeading}
						style={{ marginTop: '10vh' }}
						gutterBottom>
						Why We Do It
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						align="center"
						style={{ color: '#212121' }}>
						We are photography buffs and are in love with this
						visual art form. Our missions is simple: We want to
						offer the best tools to empower photographers worldwide.
						We connect millions of visual creators in a community
						with photography tools to help them explore and grow
						their craft.Photographs are the universal language of
						our era.
					</Typography>
				</div>
				<div maxWidth="md" className={classes.ThirdDiv}>
					<Typography
						component="h3"
						variant="h3"
						p={1}
						align="center"
						color="textPrimary"
						className={classes.SectionHeading}
						style={{
							marginTop: '10vh',
							color: '#212121',
						}}
						gutterBottom>
						We believe in the power of creativity
					</Typography>
					<Grid spacing={2}>
						<Grid item>
							<img
								src="./png/img.jpg"
								md={6}
								alt="img"
								className={classes.img}
							/>
							<Typography
								component="p"
								md={6}
								variant="subtitle1"
								style={{ color: '#212121' }}>
								We connect millions of visual creators in a
								community with photography tools to help them
								explore and grow their craft.Photographs are the
								universal language of our era. Everyone has
								hundreds, maybe thousands in their pocket. A
								great photographer’s strings never go out of
								tune.
							</Typography>
						</Grid>
					</Grid>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default AboutUs;
