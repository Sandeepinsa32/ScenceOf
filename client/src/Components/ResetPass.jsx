import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
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
import { useHistory, useLocation } from 'react-router-dom';
import OtpInput from 'react-otp-input';

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
	},
	outterDiv: {
		background: "url('../png/brush.png')",
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
	OtpInput: {
		width: '2.5em !important',
		height: '2em',
		color: '#212121',
		borderRadius: '2px',
	},
}));

export default function SignIn() {
	const classes = useStyles();

	const [passwordLog, SetPasswordLog] = useState('');
	const [OTP, setOTP] = useState('');
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

	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const useremail = query.get('email');
	function submitForm() {
		console.log(useremail);
		// axios({
		// 	method: 'post',
		// 	url: global.config.apiurl + 'users/newpassword',
		// 	data: qs.stringify({
		// 		email: useremail,
		// 		otp: OTP,
		// 		newpass: passwordLog,
		// 	}),
		// 	headers: {
		// 		'content-type':
		// 			'application/x-www-form-urlencoded;charset=utf-8',
		// 	},
		// })
		// 	.then((response) => {
		// 		console.log(response);
		// 		alert(response.data.msg);
		// 		history.push('/reset');
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		axios({
			method: 'post',
			url: global.config.apiurl + 'users/newpassword',
			data: qs.stringify({
				email: useremail,
				otp: OTP,
				newpass: passwordLog,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
				alert(response.data.msg);
				// 		history.push('/reset');
			})
			.catch((err) => {
				console.log(err);
			});
		// e.preventDefault();
	}

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
						Change Your Password
					</Typography>
					{/* main content */}
					<div align="center" xs={12}>
						<Container
							maxWidth="xs"
							justify="center"
							className={classes.outterDiv}>
							<div className={classes.paper}>
								<Avatar className={classes.avatar}></Avatar>
								<Typography component="h1" variant="h5">
									Enter your One Time Password
								</Typography>

								<OtpInput
									onChange={setOTP}
									value={OTP}
									inputStyle={classes.OtpInput}
									numInputs={4}
									separator={<span>-</span>}
								/>

								<FormControl
									style={{ width: '100%', color: '#fff' }}>
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
									onClick={submitForm}>
									Reset Password
								</Button>
								<Grid
									container
									justify="center"
									m="10px"
									gutterBottom>
									<Grid item xs gutterBottom>
										<Link href="/login" variant="body2">
											Remeber password?
										</Link>
									</Grid>
								</Grid>
								{/* </form> */}
							</div>
						</Container>
					</div>
					{/* end here */}
				</Container>
			</main>
		</>
	);
}
