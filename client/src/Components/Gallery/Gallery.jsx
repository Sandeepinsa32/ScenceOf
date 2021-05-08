import React, { useState } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//Import diff components
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Imageapi from '../utils/Imageapi';
import Gallery from 'react-grid-gallery';

const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		height: '100%',
		// overflow: 'hidden',
		// background: `url('${BackgroundImg}')  #fff`,
		// margin: '0 auto',
	},
}));

function ImgGallery() {
	const classes = useStyles();
	// const [imgsrc, setImgsrc] = useState('');
	const [imgsdb, setImgsrcdb] = useState([]);

	function FetchImage() {
		const imgsdata = [];
		axios
			.get(global.config.apiurl + 'uploadimg/limit?limit=10&start=0')
			.then((res) => {
				let alldata = res.data;
				alldata.map(function (val, i, arr) {
					return imgsdata.push({
						src: val.url,
						thumbnail: val.url,
						thumbnailWidth: 640,
						thumbnailHeight: 320,
					});
				});
				console.log(imgsdata);
				setImgsrcdb(imgsdata);
			});
	}
	FetchImage();

	return (
		<>
			<CssBaseline />
			<Navbar BackgroundImg={BackgroundImg} />
			<div
				style={{
					background: `url('${BackgroundImg}')`,
					padding: '15vh 0',
					color: '#fff',
				}}>
				<Grid justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Gallery
						</Typography>
					</Grid>
				</Grid>
			</div>
			<main className={classes.mainDiv}>
				<Grid justify="center">
					<Grid item>
						<Gallery
							images={imgsdb}
							margin={3}
							backdropClosesModal={true}
							enableKeyboardInput={true}
							enableImageSelection={false}
						/>
					</Grid>
				</Grid>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default ImgGallery;
