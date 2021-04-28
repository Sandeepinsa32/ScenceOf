import React from 'react';
import { Grid } from '@material-ui/core';
import {
	CssBaseline,
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/ContestCard.css';

var image =
	'https://static.photocrowd.com/photos/3254787-f3ee9574acbd976f72f925c00cc96a91ed06132a-h810.jpeg';

const NoOfCards = [1, 2, 3, 4];

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
		minHeight: '75vh',
	},
}));

function WinnerCards() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container className={classes.CardOutterDiv} maxWidth="lg">
				<Typography
					gutterBottomContainer
					variant="h4"
					component="h4"
					align="center"
					style={{
						color: '#efefef',
						marginBottom: '10vh',
					}}>
					Contest Winner
				</Typography>

				<Grid container spacing={2} style={{ marginBottom: '5vh' }}>
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
				</Grid>
			</Container>
		</>
	);
}

export default WinnerCards;
