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
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	root: {
		maxWidth: '400px',
		margin: '10px auto',
		borderRadius: '20px',
	},
	media: {
		height: '80px',
		width: '80px',
		borderRadius: '50%',
	},
	btnExplore: {
		marginTop: theme.spacing(4),
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
}));

const test = [1, 2, 3];

function TestimononialCard() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Container className={classes.cardGrid} maxWidth="lg">
				<Typography
					gutterBottom
					variant="h4"
					component="h4"
					align="center">
					Let us know what you think!
				</Typography>

				<Grid container>
					{test.map((card) => (
						<Card
							className={classes.root}
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
												className={classes.media}
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
				<div className={classes.btnExplore}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								variant="contained"
								color="default"
								size="small"
								className={classes.btnMoreCon}>
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
