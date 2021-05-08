import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import '../../css/Winner.css';

const useStyles = makeStyles((theme) => ({
	CardOutterDiv: {
		minHeight: '90vh',
	},
}));

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

function WinnerPage() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Navbar BackgroundImg={BackgroundImg} />

			<div
				style={{
					background: `url('${BackgroundImg}')`,
					padding: '  15vh 0 1px 0',
					color: '#fff',
				}}>
				<Typography
					gutterBottomContainer
					variant="h4"
					component="h4"
					align="center"
					style={{
						marginBottom: '10vh',
					}}>
					Winner
				</Typography>
			</div>
			<Container className={classes.CardOutterDiv} maxWidth="lg">
				{/* card for winner */}
				<WinnerCard />
				{/* end here */}
			</Container>

			{/* Footer */}
			<Footer />
		</>
	);
}

function WinnerCard() {
	const classes = useStyles();
	const [contest, setContest] = useState([]);
	useEffect(() => {
		axios.get(global.config.apiurl + 'uploadimg/getwinner').then((res) => {
			const alldata = res.data;
			setContest(alldata);
		});
	}, []);
	return (
		<>
			<CssBaseline />
			<Container className={classes.CardOutterDiv} maxWidth="lg">
				{/* card for winner */}
				<Grid container spacing={2}>
					{contest.map((figure) => (
						<Grid item key={figure.id} xs={12} sm={6} md={3}>
							<main class="page-content">
								<div
									class="card"
									style={{
										background: `url('${figure.url}')`,
									}}>
									<div class="content">
										<h2 class="title">{figure.username}</h2>
										<p class="copy">{figure.contestname}</p>
										{/* <button class="btn">See Winnner</button> */}
									</div>
								</div>
							</main>
						</Grid>
					))}
				</Grid>
				{/* end here */}
			</Container>
		</>
	);
}

export { WinnerPage, WinnerCard };

/* <Grid md={12}>

				{contest.map((figure) => (
					<figure className="snip1584" key={figure.name}>
						<img alt="card" src={figure.image} />
						<figcaption>
							<img
								className="user_img"
								alt="card"
								src="https://picsum.photos/100/100"
							/>
							<h3>{figure.name}</h3>
							<h5>{figure.sponser}</h5>
						</figcaption>
					</figure>
				))}
			</Grid> */
