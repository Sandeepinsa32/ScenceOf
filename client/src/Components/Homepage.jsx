import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//Import diff components
import Navbar from './Header/Navbar';
import ContentSection from './Header/ContentSection';
import ContestCard from './Contest/ContestCard';
import WinnerCards from './Cards/WinnerCards';
import TestimononialCard from './Cards/TestimonialCard';
import Footer from './Footer/Footer';

// import SignIn from './SignIn';
// import SignUp from './SignUp';

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';
// 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}')   fixed #212121`,
	},
	cards: {
		background: 'url()  #efefef',

		// background: `url('../png/diamond.png'), url('../png/brush.png') fixed #212121`,
		padding: '20px 10px',
		minHeight: '125vh',
		// marginTop: ' 5vh',
	},
}));

function Homepage() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + 'contest/limit?limit=10&start=0')
			.then((res) => {
				const alldata = res.data;
				setContest(alldata);
			});
	}, []);

	return (
		<>
			<CssBaseline />
			<Navbar BackgroundImg={BackgroundImg} />

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					{/* ContentSection */}
					<ContentSection />
				</div>

				<div maxWidth="md" className={classes.cards}>
					{/*CardContest */}
					<Grid spacing={2} justify="center">
						<Grid item>
							<Typography
								gutterBottom
								variant="h4"
								component="h4">
								Active Contest
							</Typography>
						</Grid>
					</Grid>
					<ContestCard data={contest} Contest="Active Contests" />
				</div>

				<div
					maxWidth="md"
					style={{
						background: "url('../png/brush.png') fixed #585858",
					}}>
					{/* testimonial */}
					<TestimononialCard />
					<Container maxWidth="lg">
						<Grid>
							{/* Winner card */}
							<WinnerCards />
						</Grid>
					</Container>
				</div>

				<div maxWidth="md">
					<Container maxWidth="lg">
						<Grid></Grid>
					</Container>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default Homepage;
