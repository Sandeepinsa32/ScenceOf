import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
	const [testimonialdata, setTestimonialdata] = useState([]);

	useEffect(() => {
		axios
			.get(global.config.apiurl + `testimonial//limit?limit=3&start=0`)
			.then((res) => {
				let alldata = res.data;
				console.log(alldata);
				setTestimonialdata(alldata);
			});
	});

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
						color: '#e5e5e5',
						fontWeight: 'bold',
						borderBottom: ' 3px solid #ffae42',
						width: '40%',
						margin: ' 0 auto',
					}}>
					Our Reviews
				</Typography>
				{testimonialdata.map((data) => (
					<figure class="snip1192">
						<blockquote>{data.text}</blockquote>
						<div class="author">
							<img src={data.userimg} alt="sq-sample1" />
							<h5>
								{data.name} <span> {data.role}</span>
							</h5>
						</div>
					</figure>
				))}
				{/* 
				<figure class="snip1192">
					<blockquote>
						Calvin: Sometimes when I'm talking with others, my words
						can't keep up with my thoughts. I wonder why we think
						faster than we speak. Hobbes: Probably so we can think
						twice.
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

				<figure class="snip1192">
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
				</figure> */}
			</Container>
		</>
	);
}
