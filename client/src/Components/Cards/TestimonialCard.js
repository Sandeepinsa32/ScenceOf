import React from 'react';
import {
	Grid,
	CssBaseline,
	Container,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	CardOutterDiv: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	CardMainDiv: {
		maxWidth: '400px',
		margin: '10px auto',
		borderRadius: '20px',
	},
	CardMedia: {
		height: '80px',
		width: '80px',
		borderRadius: '50%',
	},
	cardExploreMorediv: {
		marginTop: theme.spacing(4),
	},
	cardExploreMoreBtn: {
		color: '#fff',
		fontSize: '12px',
		padding: '10px',
		backgroundColor: '#3dad4b',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: '#389e44',
		},
	},
}));

const NoOfCard = [1, 2];

function TestimononialCard() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Container className={classes.CardOutterDiv} maxWidth="lg">
				<Typography
					gutterBottom
					variant="h4"
					component="h4"
					align="center">
					Let us know what you think!
				</Typography>

				<Grid container>
					{NoOfCard.map((card) => (
						<Card
							className={classes.CardMainDiv}
							key={card}
							xs={12}
							sm={4}
							md={3}>
							<CardActionArea>
								<CardContent>
									<Grid
										container
										spacing={2}
										justify="center">
										<Grid item>
											<CardMedia
												className={classes.CardMedia}
												image="https://scenesofnewengland.com/wp-content/uploads/2020/07/pexels-photo-220453.png"
											/>
										</Grid>

										<Grid item>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p">
												I love this site, so many
												amazing photos that inspired me
												every single day
											</Typography>
											<Typography
												variant="subtitle1"
												component="h6"
												align="right">
												-John Kei
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</Grid>
				<div className={classes.cardExploreMorediv}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								variant="contained"
								color="default"
								size="small"
								className={classes.cardExploreMoreBtn}>
								Let Us Know
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</>
	);
}

export default TestimononialCard;
