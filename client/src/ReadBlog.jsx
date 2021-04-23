import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './css/Blog.css';

//Import diff components
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		background: `url('')  #fff`,
	},
}));

function ReadBlog() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<main className={classes.mainDiv}>
				<div maxWidth="md" className="site-main">
					<Blog />
				</div>
				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}

function Blog(props) {
	const [blog, setBlog] = useState([]);
	useEffect(() => {
		axios
			.get(global.config.apiurl + `blog/?blogid=` + blog.id)
			.then((res) => {
				let alldata = res.data;
				console.log(res);
				console.log(alldata);
				setBlog(alldata);
			});
		axios.get(global.config.apiurl + `users/checklog`).then((res) => {
			let alldata = res.data;
			console.log(alldata);
			// alert(alldata.msg);
		});
	}, []);

	return (
		<>
			<Grid container md sm xs spacing={2}>
				{/* Articles  */}

				{blog.map((Blog) => (
					<Grid item key={Blog.id} xs={12} sm={3} md={4}>
						<article className="article">
							<div className="card">
								<div className="overflow-img">
									<img
										src={Blog.thumbnail}
										alt=""
										className="img-fluid"
									/>
								</div>
								<div className="card-body text-center px-1">
									<Link
										className="text-title display-1
										text-dark">
										{Blog.title}
									</Link>

									<p className="secondary-title text-secondary display-3">
										<span>
											<i className="far fa-clock text-primary"></i>
											{Blog.posttime}
										</span>
									</p>
								</div>
							</div>
						</article>
					</Grid>
				))}
				{/* Articles  */}
			</Grid>
		</>
	);
}

export default ReadBlog;
