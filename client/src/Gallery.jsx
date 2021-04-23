import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Imageapi from './utils/Imageapi';
import Gallery from 'react-grid-gallery';

const BackgroundImg = '';
// 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		// marginTop: '15vh',
		overflow: 'hidden',
		background: `url('${BackgroundImg}')  #fff`,
	},
}));

function Portfolio() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<main maxWidth="lg" className={classes.mainDiv}>
				<div
					style={{
						marginTop: '12vh',
						height: 'auto',
						minHeight: '100vh',
						padding: '5px 10px',
					}}
					maxWidth="md">
					<Gallery
						images={Imageapi}
						margin={3}
						backdropClosesModal={true}
						enableKeyboardInput={true}
						enableImageSelection={false}
						style={{ marginTop: '20vh' }}
					/>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default Portfolio;
