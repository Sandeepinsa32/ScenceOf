import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import ContestCard from './Components/Cards/ContestCard';

// const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
	},
}));

function AllCard() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + 'contest/limit?limit=20&start=0')
			.then((res) => {
				const alldata = res.data;
				console.log(alldata);
				setContest(alldata);
			});
	}, []);
	return (
		<>
			<CssBaseline />
			<Navbar />
			<main maxWidth="md" className={classes.mainDiv}>
				<div style={{ marginTop: '12vh' }} maxWidth="md">
					<ContestCard data={contest} Contest="All Contests" />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}
function Free() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + 'contest/contestfree?limit=10&start=0')
			.then((res) => {
				const alldata = res.data;
				setContest(alldata);
			});
	}, []);
	return (
		<>
			<CssBaseline />
			<Navbar />
			<main maxWidth="md" className={classes.mainDiv}>
				<div style={{ marginTop: '12vh' }} maxWidth="md">
					<ContestCard data={contest} Contest="Free Contests" />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}
function Premium() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + 'contest/premium?limit=10&start=0')
			.then((res) => {
				const alldata = res.data;
				setContest(alldata);
			});
	}, []);
	return (
		<>
			<CssBaseline />
			<Navbar />
			<main maxWidth="md" className={classes.mainDiv}>
				<div style={{ marginTop: '12vh' }} maxWidth="md">
					<ContestCard data={contest} Contest="Premium Contests" />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}
function Sponsored() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + 'contest/sponsored?limit=10&start=0')
			.then((res) => {
				const alldata = res.data;
				setContest(alldata);
			});
	}, []);
	return (
		<>
			<CssBaseline />
			<Navbar />
			<main maxWidth="md" className={classes.mainDiv}>
				<div style={{ marginTop: '12vh' }} maxWidth="md">
					<ContestCard data={contest} Contest="Sponsored Contests" />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

export { AllCard, Free, Premium, Sponsored };
