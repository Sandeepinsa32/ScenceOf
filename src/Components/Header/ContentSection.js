import React from 'react';
import {
	CssBaseline,
	Grid,
	Typography,
	IconButton,
	InputBase,
	Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	SectionHeadingDiv: {
		marginTop: '30vh',
		color: '#FFF',
	},
	SectionHeading: {
		color: '#FFF',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
	},
	SectionSearchPaper: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
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
				<Typography
					component="h3"
					variant="h3"
					p={1}
					align="center"
					color="textPrimary"
					className={classes.SectionHeading}
					gutterBottom>
					Capture, Share, Explore.
				</Typography>

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
				</Grid>
			</div>
		</>
	);
}

export default ContentSection;
