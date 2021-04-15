// import React from 'react';
// import {
// 	Button,
// 	Card,
// 	CardMedia,
// 	CssBaseline,
// 	Typography,
// 	Container,
// 	Grid,
// } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import UploaderWindow from '@webutils/uploader';

// const BackgroundImg = './png/Bg_black.gif';
// const useStyles = makeStyles((theme) => ({
// 	mainDiv: {
// 		// marginTop: '10vh',
// 		minHeight: '100vh',
// 		padding: '25px 40px',
// 		background: `url('${BackgroundImg}') fixed #EDAE9B`,
// 		boxShadow: '-1px -12px 7px -12px rgb(0 ,0 ,0.75)',
// 	},
// 	heroButtons: {
// 		marginTop: theme.spacing(4),
// 	},
// 	cardGrid: {
// 		paddingTop: theme.spacing(8),
// 		paddingBottom: theme.spacing(8),
// 	},
// 	input: {
// 		display: 'none',
// 	},
// 	card: {
// 		height: '100%',
// 		display: 'flex',
// 		flexDirection: 'column',
// 	},
// 	cardMedia: {
// 		paddingTop: '56.25%', // 16:9
// 	},
// }));

// export default function Album() {
// 	const classes = useStyles();

// 	return (
// 		<>
// 			<CssBaseline />

// 			<main>
// 				{/* Hero unit */}
// 				<div className={classes.mainDiv}>
// 					<Container maxWidth="md">
// 						<Typography
// 							component="h3"
// 							variant="h3"
// 							align="center"
// 							color="textPrimary"
// 							gutterBottom>
// 							Enter a Contest
// 						</Typography>
// 						<Typography
// 							variant="h5"
// 							align="center"
// 							color="textSecondary"
// 							paragraph>
// 							Something short and leading about the collection
// 							below—its contents, the creator, etc. Make it short
// 							and sweet, but not too short so folks don&apos;t
// 							simply skip over it entirely.
// 						</Typography>
// 						<div className={classes.heroButtons}>
// 							<Grid container spacing={2} justify="center">
// 								<Grid item>
// 									<input
// 										accept="image/*"
// 										onClick={upload}
// 										className={classes.input}
// 										id="contained-button-file"
// 										multiple
// 										// type="file"
// 									/>
// 									<label htmlFor="contained-button-file">
// 										<Button
// 											variant="contained"
// 											color="primary"
// 											component="span"
// 											// onClick={upload}
// 										>
// 											<PhotoCamera
// 												style={{ margin: '0 5px' }}
// 											/>
// 											Upload
// 										</Button>
// 									</label>
// 								</Grid>
// 							</Grid>
// 						</div>
// 					</Container>
// 				</div>

// 				<Container className={classes.cardGrid} maxWidth="md">
// 					<Grid container>
// 						<Grid item xs={12} sm={12} md={12}>
// 							<Card className={classes.card}>
// 								<CardMedia
// 									className={classes.cardMedia}
// 									image="https://source.unsplash.com/random"
// 									title="Image title"
// 								/>
// 							</Card>
// 						</Grid>
// 					</Grid>
// 				</Container>
// 			</main>
// 		</>
// 	);
// }
// function upload() {
// 	// const UploaderWindow = require('@webutils/uploader');

// 	UploaderWindow('my-uploader-120')
// 		.open()
// 		.then((urls) => console.log(urls));
// }
