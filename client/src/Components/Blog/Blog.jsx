import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classes from '../../css/Blog.module.css';
import clsx from 'clsx';
//Import diff components
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		// background: `url('${BackgroundImg}')   #212121`,
	},
}));

function Blog() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar BackgroundImg={BackgroundImg} />

			<div
				style={{
					background: `url('${BackgroundImg}')`,
					padding: '15vh 0',
					color: '#fff',
				}}>
				<Grid justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Blog
						</Typography>
					</Grid>
				</Grid>
			</div>
			<main className={classes.mainDiv}>
				<div maxWidth="md" className="site-main">
					<BlogPost />
				</div>
				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}

function BlogPost(props) {
	const [blogsdata, setBlogsdata] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + `blog/limit?limit=10&start=0`)
			.then((res) => {
				let alldata = res.data;
				console.log(alldata);
				setBlogsdata(alldata);
			});
		axios.get(global.config.apiurl + `users/checklog`).then((res) => {
			let alldata = res.data;
			console.log(alldata);
			// alert(alldata.msg);
		});
	}, []);

	return (
		<>
			<Container>
				<Grid container md sm xs spacing={3}>
					{blogsdata.map((Blog) => (
						<Grid item key={Blog.id} xs={12} sm={3} md={4}>
							<div className={classes.wrapper}>
								<article className={classes.card}>
									<div className={classes.card__img}>
										<img
											alt="blog_img"
											src={Blog.thumbnail}
										/>
									</div>
									<div className={classes.card__content}>
										<Link
											to={
												'/blog/readblog?blogid=' +
												Blog.id
											}
											exact
											className={clsx(
												classes.text_title
												// classes.display - 1,
												// classes.text - dark
											)}>
											{Blog.title}
										</Link>
										<p>{Blog.shortdescription}</p>

										<span className={classes.card_link}>
											<Link
												to={
													'/blog/readblog?blogid=' +
													Blog.id
												}
												exact>
												<button
													className={
														classes.modalButton
													}
													data-popup="accept"
													style={{
														width: '70%',
														margin: ' 2vh 0',
													}}>
													Read more
												</button>
											</Link>

											{/* <a href="#">Read more</a> */}
										</span>
									</div>
								</article>
							</div>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}

export default Blog;
