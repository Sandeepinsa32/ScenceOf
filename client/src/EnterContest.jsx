import React from 'react';
import { CssBaseline, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UploaderWindow from '@webutils/uploader';
//Import diff components
import Navbar from './Components/Header/Navbar';
const BackgroundImg = '';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}') no-repeat  fixed #fff`,
	},
	input: {
		display: 'none',
	},
}));

function EnterContest(props) {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<div maxWidth="md" className={classes.mainDiv}>
				<div
					style={{ marginTop: '12vh', height: '100%' }}
					maxWidth="md">
					<input
						accept="image/*"
						onClick={upload}
						className={classes.input}
						id="contained-button-file"
						multiple
						// type="file"
					/>
					<label htmlFor="contained-button-file">
						<Button
							variant="contained"
							color="primary"
							component="span"
							// onClick={upload}
						>
							<PhotoCamera style={{ margin: '0 5px' }} />
							Upload
						</Button>
					</label>
				</div>
			</div>
		</>
	);
}

function upload() {
	// const UploaderWindow = require('@webutils/uploader');

	UploaderWindow('my-uploader-120')
		.open()
		.then((urls) => console.log(urls));
}

export default EnterContest;
