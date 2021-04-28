import React from 'react';
import { useForm } from 'react-cool-form';
import './Css/Login.css';

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
		onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
	});
	const errors = mon('errors', { errorWithTouched: true });

	return (
		<>
			<h2 className="header-text">Login</h2>
			<div className="Wrapper-Login" ref={form}>
				<Field
					label="Email"
					id="email"
					name="email"
					type="email"
					required
					error={errors.email}
				/>
				<Field
					label="Password"
					id="password"
					name="password"
					type="password"
					required
					minLength={8}
					error={errors.password}
				/>
				<button onClick={submit}>Submit</button>
			</div>
		</>
	);
}
