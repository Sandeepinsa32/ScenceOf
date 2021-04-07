import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Components/Footer/Footer';
import './Notfound.css';
const BackgroundImg = '';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}') no-repeat  fixed #efefef`,
	},
}));

function NotFound() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			{/* <Navbar /> */}

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					<div id="main">
						<div class="fof">
							<h1>Coming soon...</h1>
						</div>
					</div>
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</>
	);
}

export default NotFound;
