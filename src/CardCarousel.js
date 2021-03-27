import React from 'react';
import { Grid } from '@material-ui/core';
import './CardCarousel.css';

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
	title = 'title 1',
	subtitle = 'Accounting';
const test = [1, 2, 3];

function Dpp() {
	return (
		<>
			<Grid container>
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
			</Grid>
		</>
	);
}

export default Dpp;
