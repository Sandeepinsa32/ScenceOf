import React from 'react';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Components/Header/Navbar';
import Header from './Components/Header/Header';
import ContentSection from './Components/Header/ContentSection';
import ContestCard from './Components/Cards/ContestCard';
import WinnerCards from './Components/Cards/WinnerCards';
import TestimononialCard from './Components/Cards/TestimonialCard';
import Footer from './Components/Footer/Footer';

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}') no-repeat  fixed #212121`,
	},
}));

function App() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			{/* header */}
			<Header />

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					{/* navbar */}
					<Navbar />

					{/* ContentSection */}
					<ContentSection />
				</div>

				{/*CardContest */}

				<ContestCard maxWidth="lg" />

				{/* testimonial */}
				<TestimononialCard />

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

export default App;
