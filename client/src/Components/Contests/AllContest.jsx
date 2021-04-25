import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import OldNavbar from './Components/others/oldNavbar';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContestCard from './Components/Cards/ContestCard';

// const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
	},
}));

function AllContest() {
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
