import React from 'react';
import {
	Grid,
	CssBaseline,
	Container,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/NewTestimonial.css';

const useStyles = makeStyles((theme) => ({
	CardOutterDiv: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	CardMainDiv: {
		maxWidth: '400px',
		margin: '10px auto',
		borderRadius: '20px',
		backgroundColor: '#99999999',
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

export default function TestimononialCard() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Container className={classes.CardOutterDiv} maxWidth="lg">
				<Typography
					gutterBottom
					variant="h4"
					component="h4"
					align="center"
					style={{
						color: '#efefef',
					}}>
					Let us know what you think!
				</Typography>

				<figure class="snip1192">
					<blockquote>
						Calvin: Sometimes when I'm talking with others, my words
						can't keep up with my thoughts. I wonder why we think
						faster than we speak. Hobbes: Probably so we can think
						twice.{' '}
					</blockquote>
					<div class="author">
						<img
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
							alt="sq-sample1"
						/>
						<h5>
							Pelican Steve <span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure class="snip1192 hover">
					<blockquote>
						Thank you. before I begin, I'd like everyone to notice
						that my report is in a professional, clear plastic
						binder...When a report looks this good, you know it'll
						get an A. That's a tip kids. Write it down.
					</blockquote>
					<div class="author">
						<img
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
							alt="sq-sample24"
						/>
						<h5>
							Max Conversion<span> LittleSnippets</span>
						</h5>
					</div>
				</figure>
				<figure class="snip1192">
					<blockquote>
						My behaviour is addictive functioning in a disease
						process of toxic co-dependency. I need holistic healing
						and wellness before I'll accept any responsibility for
						my actions.
					</blockquote>
					<div class="author">
						<img
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
							alt="sq-sample29"
						/>
						<h5>
							Eleanor Faint<span> LittleSnippets</span>
						</h5>
					</div>
				</figure>

				{/* <Grid container>
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
												image="../png/img_avatar.png"
											/>
										</Grid>

										<Grid item>
											<Typography
												variant="body2"
												color="textSecondary"
												component="blockquote">
												"I love this site, so many
												amazing photos that inspired me
												every single day"
											</Typography>

											<Typography
												variant="subtitle1"
												component="h6"
												align="right"
												style={{ color: '#efefef' }}>
												-John Kei
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</Grid> */}
			</Container>
		</>
	);
}
