import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import {
	Button,
	Card,
	CardMedia,
	CssBaseline,
	Typography,
	Container,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UploaderWindow from '@webutils/uploader';

//Import diff components
import Navbar from './Components/Header/Navbar';
const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}')    fixed #EDAE9B`,
	},
	input: {
		display: 'none',
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	heading: {
		color: '#fff',
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
}));

function EnterContest(props) {
	const classes = useStyles();
	const [imgsrc, setImgsrc] = useState('');

	function upload() {
		UploaderWindow('my-uploader-120')
			.open()
			.then((res) => {
				const alldata = res[0].url;
				setImgsrc(alldata);
			});
	}

	const sendInDb = () => {
		axios({
			method: 'post',
			url: global.config.apiurl+'uploadimg/insert',
			data: qs.stringify({
				imgurl: imgsrc,
				contesdtid: 1,
				userid: localStorage.getItem('userid'),
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
				alert(response.data.msg);
			})
			.catch((err) => {
				console.log(err);
			});
		alert('picture uploaded');
	};

	return (
		<>
			<CssBaseline />
			<Navbar />

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					<div
						style={{ marginTop: '12vh', height: '100%' }}
						maxWidth="md">
						<Container maxWidth="md">
							<Typography
								component="h3"
								variant="h3"
								align="center"
								color="textPrimary"
								className={classes.heading}
								gutterBottom>
								Enter a Contest
							</Typography>
							<Typography
								variant="h5"
								align="center"
								className={classes.heading}
								color="textSecondary"
								paragraph>
								Something short and leading about the collection
								below—its contents, the creator, etc. Make it
								short and sweet, but not too short so folks
								don&apos;t simply skip over it entirely.
							</Typography>
							<div className={classes.heroButtons}>
								<Grid container spacing={2} justify="center">
									<Grid item>
										<input
											accept="image/*"
											onClick={upload}
											className={classes.input}
											id="contained-button-file"
											multiple
										/>
										<label htmlFor="contained-button-file">
											<Button
												variant="contained"
												color="default"
												style={{
													backgroundColor: '#2e8b57',
													color: '#fff',
												}}
												component="span"
												// onClick={upload}
											>
												<PhotoCamera
													style={{ margin: '0 5px' }}
												/>
												Upload
											</Button>
										</label>
									</Grid>
									<Grid item>
										<Button
											variant="contained"
											color="default"
											type="submit"
											component="span"
											onClick={sendInDb}>
											Submit
										</Button>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>

					<Container className={classes.cardGrid} maxWidth="md">
						<Typography
							variant="h5"
							align="center"
							className={classes.heading}
							color="textSecondary"
							paragraph>
							Image Preview:
						</Typography>
						<Grid container>
							<Grid item xs={12} sm={12} md={12}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={imgsrc}
										// title="Image title"
									/>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</div>
			</main>
		</>
	);
}

export default EnterContest;
