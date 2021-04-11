import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import {
	CssBaseline,
	Grid,
	Typography,
	TextField,
	Link,
	Button,
	Avatar,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
// import Navbar from './Components/Header/Navbar';
const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';
// 'https://static.photocrowd.com/img/registration_bg_2019.jpg';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 5px',
		background: `url('${BackgroundImg}')  #212121`,
		// backgroundPosition: 'center',
		// backgroundSize: 'cover',
		// backgroundColor: '#fff',
	},
	outterDiv: {
		backgroundColor: '#fff',
		color: '#222',
		borderRadius: '15px',
		boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.51)',
		margin: 0,
		height: '75vh',
	},
	SectionHeadingDiv: {
		margin: '20px',
		color: '#FFF',
	},
	SectionHeading: {
		color: '#fff',
		fontStyle: 'italic',
		//color: '#212121',
		// backgroundColor: '#212121',
	},
	innerDiv: {
		padding: '0',
		marginTop: '10vh',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '15px',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignIn() {
	const classes = useStyles();
	const [usernameLog, SetUsernameLog] = useState('');
	const [passwordLog, SetPasswordLog] = useState('');
	const [loginStatus, SetLoginStatus] = useState('Sign In');

	const config = {
		headers: {
			// 'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
		},
	};

	const data = qs.stringify({
		email: usernameLog,
		password: passwordLog,
	});

	const Login = () => {
		axios({
			method: 'Post',
			url: 'http://localhost:3000/users/login',
			data,
			config,
		})
			.then((response) => {
				if (response.data.user[0]) {
					SetLoginStatus(`welcome ${response.data.user[0].name}`);
					console.log('User found');
				} else {
					SetLoginStatus(`Oops! Wrong Username/Password`);
					console.log('User Not Exist');
				}

				console.log(response);
			})
			.catch((err) => {
				console.log(err);
				console.log('error');
			});
	};
	return (
		<>
			<CssBaseline />
			{/* header */}
			{/* <Navbar /> */}
			<main className={classes.mainDiv}>
				<Container component="div" className={classes.innerDiv}>
					<Typography
						component="h4"
						variant="h4"
						color="textSecondary"
						className={classes.SectionHeading}
						style={{ marginTop: '15vh' }}
						gutterBottom>
						A world of great photo contests and awards, in one place
					</Typography>
					{/* <Typography
						component="h1"
						variant="h5"
						className={classes.SectionHeading}
						gutterBottom>
						~Sign in Now
					</Typography> */}
					<Typography
						component="h1"
						variant="h5"
						className={classes.SectionHeading}
						gutterBottom>
						{` ${loginStatus}`}
					</Typography>
				</Container>

				<div align="center" xs={12}>
					<Container
						maxWidth="xs"
						justify="center"
						className={classes.outterDiv}>
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								{/* <LockOutlinedIcon /> */}
							</Avatar>
							<Typography component="h1" variant="h5">
								Sign in
							</Typography>
							<form className={classes.form} noValidate>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus
									onChange={(e) => {
										SetUsernameLog(e.target.value);
									}}
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={(e) => {
										SetPasswordLog(e.target.value);
									}}
								/>

								<Button
									fullWidth
									variant="contained"
									color="primary"
									onClick={Login}
									className={classes.submit}>
									Sign In
								</Button>
								<Grid
									container
									justify="center"
									m="10px"
									gutterBottom>
									<Grid item xs gutterBottom>
										<Link href="#" variant="body2">
											Forgot password?
										</Link>
									</Grid>
									<Grid item gutterBottom>
										<Link href="#" variant="body2">
											{"Don't have an account? Sign Up"}
										</Link>
									</Grid>
								</Grid>
							</form>
						</div>
					</Container>
				</div>
			</main>
		</>
	);
}

export default SignIn;
