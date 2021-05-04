import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {} from '@material-ui/core';
import {
	CssBaseline,
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Header/Navbar';
import '../css/Winner.css';

var image =
	'https://static.photocrowd.com/photos/3254787-f3ee9574acbd976f72f925c00cc96a91ed06132a-h810.jpeg';

const NoOfCards = [1, 2, 3];

const useStyles = makeStyles((theme) => ({
	link: {
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
	},
	cardMain: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},

	cardMedia: {
		paddingTop: '75%', // 16:9 56.25
	},

	cardContent: {
		flexGrow: '1',
		backgroundColor: '#e5e5e5',
		color: '#484848',
	},

	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	CardOutterDiv: {
		minHeight: '15vh',
	},
}));

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

function WinnerCards() {
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
			<Container className={classes.CardOutterDiv} maxWidth="lg">
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

				{/* <Grid container spacing={2} style={{ marginBottom: '5vh' }}>
					{NoOfCards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={3}>
							<Card className={classes.cardMain}>
								<CardMedia
									className={classes.cardMedia}
									image={image}
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Grid
										container
										spacing={2}
										justify="center">
										<Grid item>
											<Typography
												gutterBottom
												variant="h6"
												component="h6">
												Winner (name )
											</Typography>
										</Grid>
									</Grid>
									<Grid
										container
										spacing={2}
										justify="center">
										<Grid item>
											<Typography
												gutterBottom
												variant="p"
												component="p"
												color="textSecondary">
												Nature (photo Categories)
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>*/}
			</Container>
			<Grid md={12}>
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
			</Grid>

			{/* <Container>
				<Grid md={12}>
					<figure className="snip1584 ">
						<img alt="card" src="https://picsum.photos/200/200" />
						<figcaption>
							<img
								className="user_img"
								alt="card"
								src="https://picsum.photos/100/100"
							/>
							<h5>Nature PhotoGaraphy</h5>
							<h3>Sandee</h3>
						</figcaption>
					</figure>
				</Grid>
			</Container> */}
		</>
	);
}

export default WinnerCards;
