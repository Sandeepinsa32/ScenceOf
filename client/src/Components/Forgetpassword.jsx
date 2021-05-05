import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
	CssBaseline,
	Grid,
	Typography,
	TextField,
	Button,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Header/Navbar';
const BackgroundImg = '../png/img_black_grey.jpg';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 5px',
		background: `url('${BackgroundImg}') #212121`,
	},
	outterDiv: {
		borderRadius: '15px',
		boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.51)',
		margin: 0,
		height: '80vh',
		background: '#fff',
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
		// height: '200px',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '15px',
		background: '#fff !important',
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
		backgroundColor: '#ffae42',
		color: '#fff',
		margin: theme.spacing(3, 0, 2),
		'&:hover': {
			backgroundColor: 'rgb(255, 174, 66,0.8)',
		},
	},
	imgForget: {
		height: '200px',
	},
	Warpper_paper: {},
}));

function ForgetPassword() {
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

	const Reset = () => {
		axios({
			method: 'post',
			url: global.config.apiurl + 'users/forgetpass',
			data: qs.stringify({
				email: usernameLog,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
				alert(response.data.msg);
				history.push('/reset?email=' + usernameLog);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<CssBaseline />
			{/* header */}
			<Navbar />
			<main className={classes.mainDiv}>
				<Grid
					container
					alignContent="center"
					alignItems="center"
					justify="center">
					<Grid item>
						<Container maxWidth="xs" className={classes.outterDiv}>
							<div className={classes.paper}>
								<Typography component="h1" variant="h5">
									Forgot your password?
								</Typography>
								<img
									src="../png/forget_pass.png"
									alt="forget password"
									className={classes.imgForget}
								/>
								<Typography component="h1" variant="h5">
									Don't Worry!
								</Typography>
								{/* <form className={classes.form} noValidate> */}
								<TextField
									margin="normal"
									required
									fullWidth
									label="Email"
									autoComplete="email"
									autoFocus
									onChange={(e) => {
										SetUsernameLog(e.target.value);
									}}
								/>

								<Button
									type="submit"
									align="right"
									variant="contained	"
									onClick={Reset}
									className={classes.submit}>
									Send My Password
								</Button>

								{/* </form> */}
							</div>
						</Container>
					</Grid>
				</Grid>
			</main>
		</>
	);
}

export default ForgetPassword;
