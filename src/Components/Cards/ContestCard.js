import React from 'react';
import { Grid } from '@material-ui/core';
import {
	CssBaseline,
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Css/ContestCard.css';

var cards = [
	{
		image: 'https://source.unsplash.com/random',
		title: 'Burgundy Flemming',
		subtitle: 'Advertising',
	},
	{
		image: 'https://source.unsplash.com/random',
		title: 'Nigel Nigel',
		subtitle: 'Sound & Vision',
	},
	{
		image: 'https://source.unsplash.com/random',
		title: 'Caspian Bellevedere',
		subtitle: 'Accounting',
	},
];

var image =
		'https://static.photocrowd.com/photos/3254787-f3ee9574acbd976f72f925c00cc96a91ed06132a-h810.jpeg',
	title = 'Contest Category',
	subtitle = 'Sponsor name';
const test = [1, 2, 3, 4];

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

function ContestCard() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			{/* <Grid container>
				{test.map((figure) => (
					<figure className="snip1584" key={figure}>
						<img alt="card" src={image} />
						<figcaption>
							<h3>{title}</h3>
							<h5>{subtitle}</h5>
							<a href="#"></a>
						</figcaption>
					</figure>
				))}

			</Grid> */}
			<Grid container spacing={2}>
				{test.map((card) => (
					<Grid item key={card} xs={12} sm={6} md={3}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={image}
								title="Image title"
							/>
							<CardContent className={classes.cardContent}>
								<Grid container spacing={2} justify="center">
									<Grid item>
										<Typography
											gutterBottom
											variant="h6"
											component="h6">
											Winner (name )
										</Typography>
									</Grid>
								</Grid>
								<Grid container spacing={2} justify="center">
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
							{/* <CardActions>
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
							</CardActions> */}
						</Card>
					</Grid>
				))}
			</Grid>
			{/* <div className={classes.btnExplore}>
				<Grid container spacing={2} justify="center">
					<Grid item>
						<Button
							variant="contained"
							color="default"
							size="small"
							className={classes.btnMoreCon}>
							Checkout some more Winner
						</Button>
					</Grid>
				</Grid>
			</div> */}
		</>
	);
}

export default ContestCard;
