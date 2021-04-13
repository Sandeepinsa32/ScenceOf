import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
// import Navbar from './Components/Header/Navbar';
const BackgroundImg =
	'https://static.photocrowd.com/img/registration_bg_2019.jpg';
//'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 5px',
		background: `url('${BackgroundImg}') no-repeat #212121`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		// backgroundColor: '#fff',
	},
	outterDiv: {
		backgroundColor: '#fff',
		color: '#222',
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

	const history = useHistory();

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
			url: 'http://localhost:3000/users/login',
			data: qs.stringify({
				email: usernameLog,
				password: passwordLog,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
				alert(response.data.msg);
				if ('Login Success' === response.data.msg) {
					history.push('/');
				}
			})
			.catch((err) => {
				console.log(err);
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
					<Typography
						component="h1"
						variant="h5"
						className={classes.SectionHeading}
						gutterBottom>
						~Sign in Now
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
							{/* <form className={classes.form} noValidate> */}
							<TextField
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

							<FormControl style={{ width: '100%' }}>
								<InputLabel htmlFor="standard-adornment-password">
									Password
								</InputLabel>
								<Input
									required
									fullWidth
									label="Password"
									id="standard-adornment-password"
									onChange={handleChange('password')}
									type={
										values.showPassword
											? 'text'
											: 'password'
									}
									value={values.password}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													handleClickShowPassword
												}
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
							{/* </form> */}
						</div>
					</Container>
				</div>
			</main>
		</>
	);
}

export default SignIn;
