import React from 'react';
import {
	CssBaseline,
	Container,
	Grid,
	Typography,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Css/ContestCard.css';

const useStyles = makeStyles((theme) => ({
	CcOutterDiv: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	CcExploreMoreDiv: {
		marginTop: theme.spacing(4),
	},
	CcExploreMoreBtn: {
		color: '#fff',
		fontSize: '12px',
		padding: '10px',
		backgroundColor: '#3dad4b',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: '#389e44',
		},
	},
	link: {
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
	},
}));

// var cards = [
// 	{
// 		image: 'https://source.unsplash.com/random',
// 		title: 'Burgundy Flemming',
// 		subtitle: 'Advertising',
// 	},
// 	{
// 		image: 'https://source.unsplash.com/random',
// 		title: 'Nigel Nigel',
// 		subtitle: 'Sound & Vision',
// 	},
// 	{
// 		image: 'https://source.unsplash.com/random',
// 		title: 'Caspian Bellevedere',
// 		subtitle: 'Accounting',
// 	},
// ];

const NoOfCards = [1, 2, 3, 4, 5, 6];

const ContestCardImg =
	'https://static.photocrowd.com/photos/3254787-f3ee9574acbd976f72f925c00cc96a91ed06132a-h810.jpeg';

function ContestCard() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container className={classes.CcOutterDiv} maxWidth="lg">
				<Grid container spacing={2} justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Active Contest
						</Typography>
					</Grid>
				</Grid>

				<Grid md={12}>
					{NoOfCards.map((figure) => (
						<figure className="snip1584" key={figure}>
							<img alt="card" src={ContestCardImg} />
							<figcaption>
								<h3>Contest title</h3>
								<h5>Sponsers</h5>
								{/* <a href="#"></a> */}
							</figcaption>
						</figure>
					))}
				</Grid>
				<div className={classes.CcExploreMoreDiv}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								variant="contained"
								color="default"
								size="small"
								className={classes.CcExploreMoreBtn}>
								See more open contests
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</>
	);
}

export default ContestCard;
