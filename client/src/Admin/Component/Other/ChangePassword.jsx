import React, { useState } from 'react';
import Title from '../../Title';
import axios from 'axios';
import qs from 'qs';
import { makeStyles } from '@material-ui/core/styles';
import '../../../css/CreateContest.css';
import {
	Input,
	InputAdornment,
	FormControl,
	InputLabel,
	IconButton,
	Button,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		width: '20vw',
		display: '',
	},
}));

export default function CreateContest() {
	const classes = useStyles();

	const [usernameLog, SetUsernameLog] = useState('');
	const [passwordLog, SetPasswordLog] = useState('');

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

	const SubmitForm = () => {
		axios({
			method: 'post',
			url: global.config.apiurl + 'users/newpassword',
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
		<div>
			<Title children="Change Admin's Password" />
			<form className={classes.form} noValidate>
				<FormControl style={{ width: '20vw', color: '#fff' }}>
					<InputLabel htmlFor="standard-adornment-password">
						Enter Password
					</InputLabel>
					<Input
						required
						fullWidth
						style={{ marginBottom: '5vh' }}
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
									onMouseDown={handleMouseDownPassword}>
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
				<div>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={SubmitForm}>
						Change Password
					</Button>
				</div>
			</form>
		</div>
	);
}
