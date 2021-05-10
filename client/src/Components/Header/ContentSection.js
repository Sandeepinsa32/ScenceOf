import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	SectionHeadingDiv: {
		marginTop: '30vh',
		color: '#FFF',
	},
	SectionHeading: {
		color: '#efefef',
		// color: '#EE6059',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
	},
	SectionSearchPaper: {
		padding: '2px 4px',
		display: 'flex',
		// alignItems: 'center',
		width: '70vw',
	},
	SectionSearchInput: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	SearchIcon: {
		padding: 10,
		color: '#FD9B28', //Yellow Shade
	},
}));

function ContentSection() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<div className={classes.SectionHeadingDiv}>
				<div className="App">
					<Typography
						component="h3"
						variant="h3"
						p={1}
						align="center"
						color="textPrimary"
						className={classes.SectionHeading}
						gutterBottom>
						Capture, Share, Explore
						{/* Life is simple{' '} */}
						{/* Style will be inherited from the parent element */}
						{/* <span style={{ color: '#3dad4b' }}>
							<Typewriter
								loop
								cursor
								cursorStyle="_"
								typeSpeed={120}
								deleteSpeed={100}
								delaySpeed={1000}
								words={['Capture .', 'Share .', 'Explore .']}
								onLoop={(loopCount) =>
									console.log(
										`Just completed loop ${loopCount}`
									)
								}
							/>
						</span> */}
					</Typography>
				</div>

				<div align="center" style={{ marginTop: '40vh' }}>
					<a href="#active-contest">
						<Typography
							component="p"
							variant="body1"
							align="center"
							style={{ color: '#FFFDFD' }}>
							Find Out More
						</Typography>
						<Typography
							component="p"
							variant="body1"
							color="textPrimary">
							<img
								src="./png/DownArrow.png"
								alt="arrow_Downard"
								style={{ height: '30px' }}
							/>
						</Typography>
					</a>
				</div>
				{/* 
				<Grid align="center" spacing={2}>
					<Grid item>
						<Paper
							component="form"
							align="center"
							className={classes.SectionSearchPaper}>
							<InputBase
								className={classes.SectionSearchInput}
								placeholder="Search a Content"
							/>
							<IconButton
								type="submit"
								className={classes.SearchIcon}
								aria-label="search">
								<SearchIcon />
							</IconButton>
						</Paper>
					</Grid>
				</Grid> */}
			</div>
		</>
	);
}

export default ContentSection;
