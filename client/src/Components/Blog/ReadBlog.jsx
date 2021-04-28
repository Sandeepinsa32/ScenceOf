import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import '../../css/Blog.css';

//Import diff components
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		background: `url('')  #fff`,
	},
	BlogWrapper: {
		marginTop: '5em',
		marginBottom: '5em',
	},
	WrapperImage: {
		maxWidth: '900px',
		margin: '0 auto',
	},
	BlogImage: {
		width: '100%',
		height: '50vh',
	},
}));

function ReadBlog() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<main className={classes.mainDiv}>
				<div maxWidth="md" className={classes.BlogWrapper}>
					<Blog />
				</div>
				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}

function Blog(props) {
	const classes = useStyles();
	const [blog, setBlog] = useState([]);
	useEffect(() => {
		axios.get(global.config.apiurl + `blog/byId?id=1`).then((res) => {
			let alldata = res.data;
			console.log(res);
			console.log(alldata);
			setBlog(alldata);
		});
	}, []);

	return (
		<>
			{/* <Grid container md sm xs spacing={2}> */}
			{/* Articles  */}

			{blog.map((Blog) => (
				<Grid component="div" key={Blog.id}>
					<article>
						<div className="card">
							<div className={classes.WrapperImage}>
								<img
									src={Blog.thumbnail}
									alt=""
									className={classes.BlogImage}
								/>

								<div className="card-body text-center px-1">
									<Link
										className="text-title display-1
										text-dark">
										{/* {Blog.title} */}
										These Are The 10 Most Beautiful Blog
										Designs In The World
									</Link>

									<p className="px-2">
										It’s no secret that blogs are the pillar
										of any successful company website. A
										frequently updated blog will drive
										traffic to the brand, guide users with
										targeted content, and act as a vital
										tool to engage with the broader
										community. Alongside being a low-cost
										marketing strategy with a lucrative
										payoff, blogs are also the perfect way
										to establish your brand identity and
										grow a loyal following. Creating
										engaging, information-rich content for
										your readers, however, is only half of
										the job: equally important is presenting
										the content in a visually stimulating
										way. When it comes to blog design, there
										are a variety of different factors to
										look at—from font sizes and text width,
										to hierarchy and calls-to-action.
										Uninspiring blog design is a sure fire
										way to lose interest—or even customers.
										Are you a budding UI designer
										exasperated by boring blogs? We’ve
										rounded up ten blogs and online
										magazines that showcase the very best of
										creative editorial design. To help us on
										our way, I’ve enlisted the expertise of
										CareerFoundry’s resident UI designer
										Amy, who’ll be shedding light on why
										each blog has hit the nail on the head
										with their UI design. Without further
										ado, let’s jump right in! Six-Two Annual
										digest Clever Coda Story Nourisheats
										Girlboss Dropbox Help Scout The Outline
										Pixelgrade 1. Six-two Powered by the
										global youth travel brand Contiki,
										Six-Two boasts robust travel guides
										jam-packed with gorgeous imagery that
										instantly makes us want to pack our bags
										and set off for some serious
										wanderlusting. Six-two have taken the
										popular ‘tiling’ feature and put their
										own spin on it—mixing blog posts in with
										text, and playing around with image
										size. While they’ve got some interesting
										features going on, they’ve kept the
										color scheme fairly basic—mostly
										sticking to pastel colours with the
										occasional splash of dark pink. Six-two
										has managed to strike a perfect balance
										between fun and informative. Six-Two
										user interface design Six-Two user
										interface design It’s no secret that
										blogs are the pillar of any successful
										company website. A frequently updated
										blog will drive traffic to the brand,
										guide users with targeted content, and
										act as a vital tool to engage with the
										broader community. Alongside being a
										low-cost marketing strategy with a
										lucrative payoff, blogs are also the
										perfect way to establish your brand
										identity and grow a loyal following.
										Creating engaging, information-rich
										content for your readers, however, is
										only half of the job: equally important
										is presenting the content in a visually
										stimulating way. When it comes to blog
										design, there are a variety of different
										factors to look at—from font sizes and
										text width, to hierarchy and
										calls-to-action. Uninspiring blog design
										is a sure fire way to lose interest—or
										even customers. Are you a budding UI
										designer exasperated by boring blogs?
										We’ve rounded up ten blogs and online
										magazines that showcase the very best of
										creative editorial design. To help us on
										our way, I’ve enlisted the expertise of
										CareerFoundry’s resident UI designer
										Amy, who’ll be shedding light on why
										each blog has hit the nail on the head
										with their UI design. Without further
										ado, let’s jump right in! Six-Two Annual
										digest Clever Coda Story Nourisheats
										Girlboss Dropbox Help Scout The Outline
										Pixelgrade 1. Six-two Powered by the
										global youth travel brand Contiki,
										Six-Two boasts robust travel guides
										jam-packed with gorgeous imagery that
										instantly makes us want to pack our bags
										and set off for some serious
										wanderlusting. Six-two have taken the
										popular ‘tiling’ feature and put their
										own spin on it—mixing blog posts in with
										text, and playing around with image
										size. While they’ve got some interesting
										features going on, they’ve kept the
										color scheme fairly basic—mostly
										sticking to pastel colours with the
										occasional splash of dark pink. Six-two
										has managed to strike a perfect balance
										between fun and informative. Six-Two
										user interface design Six-Two user
										interface design
									</p>
								</div>
							</div>
						</div>
					</article>
				</Grid>
			))}
			{/* Articles  */}
			{/* </Grid> */}
		</>
	);
}

export default ReadBlog;
