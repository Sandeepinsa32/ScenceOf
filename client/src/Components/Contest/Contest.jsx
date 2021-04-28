import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import ContestCard from './ContestCard';

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const BackgroundImg2 = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';
const BackgroundImg3 =
	'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		// background: `url('${BackgroundImg}')   fixed #212121`,
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
			<Navbar BackgroundImg={BackgroundImg} />
			<div
				style={{
					background: `url('${BackgroundImg}')`,
					marginTop: '12vh',
					padding: '12vh 0',
					color: '#fff',
				}}>
				<Grid justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							All Contest
						</Typography>
					</Grid>
				</Grid>
			</div>
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
			<Navbar BackgroundImg={BackgroundImg2} />
			<div
				style={{
					background: `url('${BackgroundImg2}')`,
					marginTop: '12vh',
					padding: '12vh 0',
					color: '#fff',
				}}>
				<Grid justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Free Contest
						</Typography>
					</Grid>
				</Grid>
			</div>
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
			<Navbar BackgroundImg={BackgroundImg3} />
			<div
				style={{
					background: `url('${BackgroundImg3}')`,
					marginTop: '12vh',
					padding: '12vh 0',
					color: '#fff',
				}}>
				<Grid justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Premium Contest
						</Typography>
					</Grid>
				</Grid>
			</div>
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
			<Navbar BackgroundImg={BackgroundImg} />
			<div
				style={{
					background: `url('${BackgroundImg}')`,
					marginTop: '12vh',
					padding: '12vh 0',
					color: '#fff',
				}}>
				<Grid justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Sponsored Contest
						</Typography>
					</Grid>
				</Grid>
			</div>
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
