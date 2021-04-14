import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Imageapi from './utils/Imageapi';
import Gallery from 'react-grid-gallery';

const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		// marginTop: '15vh',
		background: `url('${BackgroundImg}')  #212121`,
	},
}));

function Portfolio() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<main maxWidth="md" className={classes.mainDiv}>
				<div
					style={{ marginTop: '12vh', height: '100%' }}
					maxWidth="md">
					<Gallery images={Imageapi} />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default Portfolio;
