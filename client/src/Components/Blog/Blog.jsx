import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import '../../css/Blog.css';

//Import diff components
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

// const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		background: `url('')  #212121`,
	},
}));

function Blog() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar />
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
			<Grid container md sm xs spacing={2}>
				{/* Articles  */}

				{blogsdata.map((Blog) => (
					<Grid item key={Blog.id} xs={12} sm={3} md={4}>
						<article className="article">
							<div className="card">
								<div className="overflow-img">
									<Link
										to={'/blog/readblog?blogid=' + Blog.id}
										exact>
										<img
											src={Blog.thumbnail}
											alt=""
											className="img-fluid"
										/>
									</Link>
								</div>
								<div className="card-body text-center px-1">
									<Link
										to={'/blog/readblog?blogid=' + Blog.id}
										exact
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

export default Blog;
