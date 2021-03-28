import React from 'react';
import {
	CssBaseline,
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Css/ContestCard.css';

const useStyles = makeStyles((theme) => ({
	link: {
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
	},

	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},

	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},

	cardMedia: {
		paddingTop: '75%', // 16:9 56.25
	},
	btnMoreCon: {
		color: '#fff',
		fontSize: '12px',
		padding: '10px',
		backgroundColor: '#3dad4b',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: '#389e44',
		},
	},

	cardContent: {
		flexGrow: '1',
		backgroundColor: '#e5e5e5',
		color: '#484848',
	},

	btnJoinCon: {
		paddingLeft: '20px',
		paddingRight: '20px',
		backgroundColor: '#fff',
	},

	btnExplore: {
		marginTop: theme.spacing(4),
	},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const imageUrlForCards =
	'https://static.photocrowd.com/photos/3254787-f3ee9574acbd976f72f925c00cc96a91ed06132a-h810.jpeg';

function WinnerCard() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={2} justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Active Contest
						</Typography>
					</Grid>
				</Grid>

				<Grid md={12}>
					{cards.map((figure) => (
						<figure className="snip1584" key={figure}>
							<img alt="card" src={imageUrlForCards} />
							<figcaption>
								<h3>Image title</h3>
								<h5>Image title</h5>
								<a href="#"></a>
							</figcaption>
						</figure>
					))}
				</Grid>
				<div className={classes.btnExplore}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								variant="contained"
								color="default"
								size="small"
								className={classes.btnMoreCon}>
								See more open contests
							</Button>
						</Grid>
					</Grid>
				</div>
				{/* End hero unit */}
				{/* <Grid container spacing={2}>
					{cards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={3}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={imageUrlForCards}
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
												Traveling
											</Typography>
										</Grid>
									</Grid>
									<Grid
										container
										spacing={2}
										justify="flex-end">
										<Grid item>
											<Typography
												gutterBottom
												variant="p"
												component="p"
												color="textSecondary">
												-Brand Name
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
								<CardActions>
									<Grid
										container
										spacing={2}
										justify="center"
										className={classes.CardContent}>
										<Grid item>
											<Button
												size="small"
												variant="outlined"
												color="primary"
												className={classes.btnJoinCon}>
												Join Contest
											</Button>
										</Grid>
									</Grid>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
				<div className={classes.btnExplore}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								variant="contained"
								color="default"
								size="small"
								className={classes.btnMoreCon}>
								See more open contests
							</Button>
						</Grid>
					</Grid>
				</div> */}
			</Container>
		</>
	);
}

export default WinnerCard;
