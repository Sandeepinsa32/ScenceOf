import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Blog.css';
//Import diff components
// import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';

const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '1px 0px',
		background: `url('')  #212121`,
	},
}));

const BlogDesc = [
	{
		id: '1',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 0 Looking for some feedback for this rejected technology',
		blogdate: 'Clock Wed 02,2021',
		commentCount: '12',
	},
	{
		id: '2',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 1 Looking for some feedback for this rejected technology',
		blogdate: 'Clock Wed 02,2021',
		commentCount: '1',
	},
	{
		id: '3',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 2 Looking for some feedback for this rejected technology',
		blogdate: '2',
		commentCount: '13',
	},
	{
		id: '4',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 2 Looking for some feedback for this rejected technology',
		blogdate: '2',
		commentCount: '13',
	},
	{
		id: '5',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 2 Looking for some feedback for this rejected technology',
		blogdate: '2',
		commentCount: '13',
	},
	{
		id: '6',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 2 Looking for some feedback for this rejected technology',
		blogdate: '2',
		commentCount: '13',
	},
	{
		id: '7',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 2 Looking for some feedback for this rejected technology',
		blogdate: '2',
		commentCount: '13',
	},
	{
		id: '8',
		imgSrc: 'https://source.unsplash.com/user/erondu/1400x900',
		blogTitle:
			'Blog title 2 Looking for some feedback for this rejected technology',
		blogdate: '2',
		commentCount: '13',
	},
];

function Blog() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			{/* <Navbar /> */}
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
console.log(BlogDesc[0].imgSrc);
function BlogPost(props) {
	return (
		<>
			<Grid container md sm xs spacing={2}>
				{/* Articles  */}
				{BlogDesc.map((card) => (
					<Grid item key={BlogDesc.id} xs={12} sm={3} md={4}>
						<article className="article">
							<div className="card">
								<div className="overflow-img">
									<a href="/">
										<img
											src={BlogDesc[0].imgSrc}
											alt=""
											className="img-fluid"
										/>
									</a>
								</div>
								<div className="card-body text-center px-1">
									<a
										href="/"
										className="text-title display-1 text-dark">
										{BlogDesc[0].blogTitle}
									</a>

									<p className="secondary-title text-secondary display-3">
										<span>
											<i className="far fa-clock text-primary"></i>
											{BlogDesc[0].blogdate}
										</span>
										<span>
											<i className="far fa-comments text-primary"></i>
											{BlogDesc[0].commentCount}
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
