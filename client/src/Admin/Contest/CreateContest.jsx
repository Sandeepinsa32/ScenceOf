import React, { useState } from 'react';
import Title from '../Title';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/CreateContest.css';
import UploaderWindow from '@webutils/uploader';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default function CreateContest() {
	const [imgsrc, setImgsrc] = useState('');
	const classes = useStyles();
	const [age, setAge] = React.useState('');
	const [open, setOpen] = React.useState(false);

	function upload() {
		alert('upload clicked');
		UploaderWindow('my-uploader-12')
			.open()
			.then((res) => {
				const alldata = res[0].url;
				setImgsrc(alldata);
			});
	}
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<div>
			<Title children="Create a Contest" />

			<form action="index.html" method="post">
				<label for="name"> Contest Name:</label>
				<input type="text" id="name" name="user_name" />

				<label for="email">Sponser Name</label>
				<input type="email" id="mail" name="user_email" />

				{/* <label for="bio">Bio:</label>
				<textarea id="bio" name="user_bio"></textarea> */}

				<label for="job">Contest Category:</label>
				<select id="job" name="user_job">
					<option value="frontend_developer">Free</option>
					<option value="php_developer">Premium</option>
					<option value="python_developer">Sponser</option>

					{/* <optgroup label="Mobile">
						<option value="android_developer">
							Android Developer
						</option>
						<option value="ios_developer">IOS Developer</option>
						<option value="mobile_designer">Mobile Designer</option>
					</optgroup>
					<optgroup label="Business">
						<option value="business_owner">Business Owner</option>
						<option value="freelancer">Freelancer</option>
					</optgroup> */}
				</select>

				<label>Contest type:</label>
				<input
					type="radio"
					id="under_13"
					value="under_13"
					name="user_age"
				/>
				<label for="under_13" class="light">
					Free
				</label>
				<br />
				<input
					type="radio"
					id="over_13"
					value="over_13"
					name="user_age"
				/>
				<label for="over_13" class="light">
					Premium
				</label>
				<br />
				<input
					type="radio"
					id="over_13"
					value="over_13"
					name="user_age"
				/>
				<label for="over_13" class="light">
					Sponser
				</label>

				{/* <label>Interests:</label>
				<input
					type="checkbox"
					id="development"
					value="interest_development"
					name="user_interest"
				/>
				<label class="light" for="development">
					Development
				</label>
				<br />
				<input
					type="checkbox"
					id="design"
					value="interest_design"
					name="user_interest"
				/>
				<label class="light" for="design">
					Design
				</label> 
				<br />
				<input
					type="checkbox"
					id="business"
					value="interest_business"
					name="user_interest"
				/>
				<label class="light" for="business">
					Business
				</label>*/}

				<button type="submit">Upload Image</button>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}
