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
	Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './css/profile.css';
import UploaderWindow from '@webutils/uploader';
import { useLocation } from 'react-router-dom';

import Imageapi from './utils/Imageapi';
import Gallery from 'react-grid-gallery';

//Import diff components
import Navbar from './Components/Header/Navbar';
const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		// padding: '25px 40px',
		minHeight: '100vh',
		height: '100%',
		background: `url('')   #888`,
	},
	input: {
		display: 'none',
	},

	heading: {
		color: '#fff',
		marginBottom: '10vh',
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
	ThirdDiv: {
		// minHeight: '100vh',
		height: '100%',
		padding: '0 auto',
		marginTop: '20vh',
		margin: '0 3em',
		borderRadius: '10px',
		backgroundColor: '#efefef',
		boxShadow: '-1px 13px 14px -11px rgb(0 0 1)',
		overflow: 'Hidden',
	},
}));

// const BackgroundImg = './png/Bg_black.gif';
// const BackgroundImg2 = './png/trans_png.png';
function EnterContest(props) {
	const classes = useStyles();

	const [imgsrc, setImgsrc] = useState('');

	function upload() {
		UploaderWindow('my-uploader-120')
			.open()
			.then((res) => {
				// const alldata = res[0].url;
				// setImgsrc(alldata);
			});
	}
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const contesdtid = query.get('contid');

	// console.log(contesdtid);

	const sendInDb = () => {
		axios({
			method: 'post',
			url: global.config.apiurl + 'uploadimg/insert',
			data: qs.stringify({
				imgurl: imgsrc,
				contesdtid: contesdtid,
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

	const getImgs = () => {
		axios
			.get(global.config.apiurl + 'uploadimg/byContest?contesid=44')
			.then((res) => {
				let alldata = res.data;

				setImgsrc(alldata);

				// console.log(typeof alldata);

				// alldata.map((anObjectMapped, index) => {
				// 	return (
				// 		<p key={`${anObjectMapped.name}`}>
				// 			console.log(anObjectMapped.id);
				// 			{anObjectMapped.id} - {anObjectMapped.url}-
				// 			{anObjectMapped.user}
				// 		</p>
				// 	);
				// });
			});
	};
	getImgs();
	return (
		<>
			<CssBaseline />
			<Navbar />

			<main>
				<div maxWidth="lg" className={classes.mainDiv}>
					<div className="Wrapper-div">
						<header
							className="card-header"
							style={{
								position: 'relative',
								top: '-500px',
							}}>
							<Typography
								component="h3"
								variant="h3"
								align="center"
								color="textPrimary"
								className={classes.heading}
								gutterBottom>
								Contest Title
							</Typography>
							<div>
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
										Enter a Contest
									</Button>
								</label>
							</div>

							<div className={classes.ThirdDiv}>
								<Container maxwidth="md">
									<Grid container spacing={2}>
										<Grid item>
											<Typography
												component="p"
												variant="body1"
												align="center"
												style={{ color: '#111' }}>
												This contest was created by a
												member of the Photocrowd
												community. Want to create your
												own?
											</Typography>
											<Typography
												component="p"
												variant="body1"
												align="center"
												style={{ color: '#111' }}>
												For this contest, enter your
												photos showing your favourite
												vacation place. Images can show
												any place such as a beach, a
												city, the mountains, etc. It
												would add interest to the
												contest if you include the
												location in the image
												description.
											</Typography>
										</Grid>
										<Grid item></Grid>
									</Grid>
								</Container>

								{/* <Gallery
									images={imgDic}
									backdropClosesModal={true}
									enableKeyboardInput={true}
									enableImageSelection={false}
									style={{ marginTop: '20vh' }}
								/> */}
							</div>
						</header>
					</div>
				</div>

				{/* image preview */}
				{/* <Container className={classes.cardGrid} maxWidth="md">
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
					</Container> */}
				{/* </div> */}
			</main>
		</>
	);
}

export default EnterContest;
