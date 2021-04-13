import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
// import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import OldNavbar from './Components/others/oldNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContestCard from './Components/Cards/ContestCard';
// import Slider from 'infinite-react-carousel';

const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		// marginTop: '15vh',
		// background: `url('${BackgroundImg}')   #fff`,
	},
}));
const numOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.clear();
function Homepage() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			{/* <Navbar /> */}
			<main maxWidth="md" className={classes.mainDiv}>
				<div style={{ marginTop: '12vh' }} maxWidth="md">
					<Router>
						<OldNavbar />

						<Switch>
							<Route path="/active-contest/" exact>
								<AllCard />
							</Route>
							<Route path="/active-contest/Free-contest" exact>
								<Free />
							</Route>
							<Route path="/active-contest/Premium-contest" exact>
								<Premium />
							</Route>
							<Route
								path="/active-contest/Sponsored-contest"
								exact>
								<Sponsored />
							</Route>
						</Switch>
					</Router>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

function Sponsored() {
	return (
		<>
			<h2>Sponsored ONe!!</h2>
			<ContestCard numOfCards={numOfCards} />
		</>
	);
}
function AllCard() {
	return (
		<>
			<h2>All ONe!!</h2>
			<ContestCard numOfCards={numOfCards} />
		</>
	);
}

function Free() {
	return (
		<>
			<h2>Free ONe!!</h2>
			<ContestCard numOfCards={numOfCards} />
		</>
	);
}

function Premium() {
	return (
		<>
			<h2>Premium ONe!!</h2>
			<ContestCard numOfCards={numOfCards} />
		</>
	);
}

export default Homepage;
