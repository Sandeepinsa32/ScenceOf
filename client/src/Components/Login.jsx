import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import {
	CssBaseline,
	Grid,
	Typography,
	Input,
	TextField,
	Link,
	InputAdornment,
	FormControl,
	InputLabel,
	IconButton,
	Button,
	Avatar,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

//Import diff components
import Navbar from './Header/Navbar';
const BackgroundImg = '../png/img_black_grey.jpg';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 5px',
		backgroundImage: ` url('../png/trans_png.png'),url('${BackgroundImg}')`,
		backgroundColor: '#212121',
		// backgroundPosition: 'center',
		// backgroundSize: 'cover',
		// backgroundColor: '#fff',
	},
	outterDiv: {
		background: "url('../png/brush.png')",
		// backgroundColor: '#fff',
		color: '#111x',
		borderRadius: '15px',
		boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.51)',
		margin: 0,
		height: '60vh',
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
	return (
		<>
			<CssBaseline />
			{/* header */}
			<Navbar />
			<main className={classes.mainDiv}>
				<Container component="div" className={classes.innerDiv}>
					<Typography
						component="h4"
						variant="h4"
						color="textSecondary"
						className={classes.SectionHeading}
						style={{ marginTop: '15vh' }}
						gutterBottom>
						Welcome Back
					</Typography>
				</Container>
				<Login />
			</main>
		</>
	);
}
const Login = () => {
	const classes = useStyles();

	const [usernameLog, SetUsernameLog] = useState('');
	const [passwordLog, SetPasswordLog] = useState('');

	// const history = useHistory();

	const [values, setValues] = useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		SetPasswordLog(event.target.value);
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const Login = () => {
		axios({
			method: 'post',
			url: global.config.apiurl + 'users/login',
			data: qs.stringify({
				email: usernameLog,
				password: passwordLog,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
			withCredentials: true,
		})
			.then((response) => {
				console.log(response);
				alert(response.data.msg);
				if ('Login Success' === response.data.msg) {
					console.log(response.data);
					localStorage.setItem('user', true);
					localStorage.setItem('username', response.data.user);
					localStorage.setItem('token', response.data.token);
					// history.push('/');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<div align="center" xs={12}>
				<Container
					maxWidth="xs"
					justify="center"
					className={classes.outterDiv}>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}></Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						{/* <form className={classes.form} noValidate> */}
						<TextField
							style={{ color: '#fff' }}
							margin="normal"
							required
							fullWidth
							label="Enter Username"
							autoComplete="email"
							autoFocus
							onChange={(e) => {
								SetUsernameLog(e.target.value);
							}}
						/>

						<FormControl style={{ width: '100%', color: '#fff' }}>
							<InputLabel htmlFor="standard-adornment-password">
								Password
							</InputLabel>
							<Input
								required
								fullWidth
								label="Password"
								id="standard-adornment-password"
								onChange={handleChange('password')}
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}>
											{values.showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={Login}>
							Sign In
						</Button>
						<Grid container justify="center" m="10px" gutterBottom>
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
						{/* </form> */}
					</div>
				</Container>
			</div>
		</>
	);
};

export { SignIn, Login };
