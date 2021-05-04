import React, { useState } from 'react';
import Auth, { forpost } from '../utils/Auth';
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
import '../../css/profile.css';
import UploaderWindow from '@webutils/uploader';
import { useLocation } from 'react-router-dom';
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import Gallery from 'react-grid-gallery';

//Import diff components
import Navbar from '../Header/Navbar';
import LoginPopUp from '../utils/LoginPopUp';
import LoginPopup from '../utils/LoginPopUp';
// const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

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
	activity_tag: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

// const BackgroundImg = './png/Bg_black.gif';
// const BackgroundImg2 = './png/trans_png.png';
function EnterContest(props) {
	const classes = useStyles();
	function Checkupload() {
		if (auth) {
			upload();
		} else {
			LoginPopUp();
		}
	}
	// const history = useHistory();
	// const requireAuth = () => {
	// 	if (!localStorage.getItem('user')) {
	// 		alert('Please Login ');
	// 		return history.push('/login');
	// 	}
	// };
	// requireAuth();
	const loggedInUser = localStorage.getItem('user');
	const [auth, setAuth] = useState(loggedInUser);

	const [imgsrc, setImgsrc] = useState('');
	const [imgsdb, setImgsrcdb] = useState([]);

	function checkusertype() {
		axios
			.get(global.config.apiurl + `uploadimg/countimgs`, {
				headers: Auth(),
			})
			.then((res) => {
				let alldata = res.data;
				alert(alldata[0].totalimgs);
				if (
					localStorage.getItem('usertype') === '1' &&
					alldata[0].totalimgs < 1
				) {
					upload();
				} else {
					alert('Please Upgrade your account to part........');
				}
			});
	}

	function upload() {
		alert('upload clicked');
		UploaderWindow('my-uploader-12')
			.open()
			.then((res) => {
				const alldata = res[0].url;
				setImgsrc(alldata);
			});
	}

	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const contestid = query.get('contid');

	// console.log(contesdtid);

	const sendInDb = () => {
		axios({
			method: 'post',
			url: global.config.apiurl + 'uploadimg/insert',
			data: qs.stringify({
				imgurl: imgsrc,
				contesdtid: contestid,
			}),
			headers: forpost(),
		})
			.then((response) => {
				console.log(response);
				alert('picture uploaded');
				FetchImage();
				// window.location.reload(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	function FetchImage() {
		const imgsdata = [];
		axios
			.get(
				global.config.apiurl +
					'uploadimg/byContest?contesid=' +
					contestid
			)
			.then((res) => {
				let alldata = res.data;
				alldata.map(function (val, i, arr) {
					return imgsdata.push({
						src: val.url,
						thumbnail: val.url,
						thumbnailWidth: 640,
						thumbnailHeight: 320,
					});
				});
				console.log(imgsdata);
				setImgsrcdb(imgsdata);
			});
	}
	FetchImage();

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
								top: '-400px',
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

							<div className={classes.ThirdDiv}>
								<Container maxwidth="md">
									<Grid container spacing={2}>
										<Grid
											item
											xs={12}
											sm={12}
											md={12}
											style={{ padding: '45px 0' }}>
											<Typography
												component="h2"
												variant="h6"
												align="center"
												style={{ color: '#111' }}>
												Something About Contest
											</Typography>
											<Typography
												component="p"
												variant="body1"
												align="center"
												style={{ color: '#111' }}>
												Description of blog For this
												contest, enter your photos
												showing your favourite vacation
												place. Images can show any place
												such as a beach, a city, the
												mountains, etc. It would add
												interest to the contest if you
												include the location in the
												image.
											</Typography>
											<Container>
												<div
													className={
														classes.activity_tag
													}>
													<i class="material-icons">
														schedule
													</i>
													<span
														className="activity-name"
														style={{
															padding: '10px',
														}}>
														1 Days Left to Enter
													</span>
												</div>
												<div
													className={
														classes.activity_tag
													}>
													<i class="material-icons">
														photo
													</i>
													<span
														className="activity-name"
														style={{
															padding: '15px',
														}}>
														1 Photos Enter
													</span>
												</div>
												<div
													className={
														classes.activity_tag
													}>
													<i class="material-icons">
														photo_camera_front
													</i>
													<span
														className="activity-name"
														style={{
															padding: '10px',
														}}>
														7 photographers
													</span>
												</div>
											</Container>
										</Grid>
										{/*  */}
										<Grid
											item
											xs={12}
											sm={12}
											md={12}
											style={{ margin: '0 auto' }}>
											<FacebookShareButton
												url="http://scenesofnewengland.com/"
												quote={'hey im sharing this'}
												hashtag="#react">
												<FacebookIcon
													logoFillColor="white"
													round={true}></FacebookIcon>
											</FacebookShareButton>
											<WhatsappShareButton
												url="http://scenesofnewengland.com/"
												quote={'hey im sharing this'}
												hashtag="#react">
												<WhatsappIcon
													logoFillColor="white"
													round={true}></WhatsappIcon>
											</WhatsappShareButton>
											{/* <InstagramShareButton>
												<InstagramIcon
													logoFillColor="white"
													round={
														true
													}></InstagramIcon>
											</InstagramShareButton> */}
											<TwitterShareButton
												url="http://scenesofnewengland.com/"
												quote={'hey im sharing this'}
												hashtag="#react">
												<TwitterIcon
													logoFillColor="white"
													round={true}></TwitterIcon>
											</TwitterShareButton>
										</Grid>

										{/*  */}

										<Grid
											item
											xs={12}
											sm={6}
											md={6}
											style={{ margin: '0 auto' }}>
											<Card className={classes.card}>
												<CardMedia
													className={
														classes.cardMedia
													}
													image={imgsrc}
													// title="Image title"
												/>
												<div>
													{auth ? (
														<Button
															variant="contained"
															color="default"
															style={{
																backgroundColor:
																	'#2e8b57',
																color: '#fff',
															}}
															component="span"
															onClick={
																checkusertype
															}>
															upload
														</Button>
													) : (
														<LoginPopup />
													)}

													<Button
														variant="contained"
														color="default"
														style={{
															backgroundColor:
																'#888',
															margin: '5px',
															color: '#fff',
														}}
														component="span"
														onClick={sendInDb}>
														Submit
													</Button>
												</div>
											</Card>
										</Grid>
									</Grid>
								</Container>

								<Gallery
									images={imgsdb}
									backdropClosesModal={true}
									enableKeyboardInput={true}
									enableImageSelection={false}
									style={{ marginTop: '20vh' }}
								/>
							</div>
						</header>
					</div>
				</div>

				{/* image preview */}
				{/* </div> */}
			</main>
		</>
	);
}

export default EnterContest;
