import React, { useState } from 'react';
import { useForm } from 'react-cool-form';
import qs from 'qs';
import axios from 'axios';
import '../css/Login.css';
import { IconButton } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Field = ({ label, id, error, ...rest }) => (
	<div>
		<label htmlFor={id}>{label}</label>
		<input id={id} {...rest} />
		{error && <p>{error}</p>}
	</div>
);

export default function AdminLogin() {
	const { form, mon, submit } = useForm({
		defaultValues: { email: '', password: '' },
		// onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
	});

	const errors = mon('errors', { errorWithTouched: true });

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
	const history = useHistory();
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	function login() {
		axios({
			method: 'post',
			url: global.config.apiurl + 'admin/login',
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
				// alert(response.data.msg);
				if ('Login Success' === response.data.msg) {
					console.log(response.data);
					localStorage.setItem('admin', true);
					localStorage.setItem('username', response.data.user);
					localStorage.setItem('token', response.data.token);
					history.push('/admin/dashboard');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="outter-div">
			<h2 className="header-text">Login</h2>
			<div className="Wrapper-Login" ref={form}>
				<Field
					label="Email"
					id="email"
					name="email"
					type="email"
					required
					error={errors.email}
					onChange={(e) => {
						SetUsernameLog(e.target.value);
					}}
				/>
				<Field
					label="Password"
					id="password"
					name="password"
					type="password"
					required
					minLength={8}
					onChange={handleChange('password')}
					type={values.showPassword ? 'text' : 'password'}
					value={values.password}
					error={errors.password}
				/>
				<IconButton
					aria-label="toggle password visibility"
					onClick={handleClickShowPassword}
					onMouseDown={handleMouseDownPassword}>
					{values.showPassword ? <Visibility /> : <VisibilityOff />}
				</IconButton>
				<button className="submit-button" onClick={login}>
					Submit
				</button>
			</div>
		</div>
	);
}
