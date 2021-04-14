import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

//Import diff components
import Navbar from './Components/Header/Navbar';
import ContentSection from './Components/Header/ContentSection';
import ContestCard from './Components/Cards/ContestCard';
import WinnerCards from './Components/Cards/WinnerCards';
import TestimononialCard from './Components/Cards/TestimonialCard';
import Footer from './Components/Footer/Footer';

// import SignIn from './SignIn';
// import SignUp from './SignUp';

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}') no-repeat  fixed #212121`,
	},
}));

function Homepage() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/contest/limit?limit=10&start=0')
			.then((res) => {
				const alldata = res.data;
				setContest(alldata);
			});
	}, []);

	return (
		<>
			<CssBaseline />
			<Navbar />

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					{/* ContentSection */}
					<ContentSection />
				</div>

				<ContestCard maxWidth="lg" data={contest} />

				{/*CardContest */}
				<TestimononialCard />
				{/* testimonial */}

				<Container maxWidth="lg">
					<Grid>
						{/* Winner card */}
						<WinnerCards />
					</Grid>
				</Container>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default Homepage;
