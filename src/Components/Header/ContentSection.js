import React from 'react';
import {
	Grid,
	CssBaseline,
	Typography,
	IconButton,
	InputBase,
	Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	headingDiv: {
		marginTop: '10vh',
	},
	mainHeading: {
		color: '#FFF',
	},
	rootD: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '70vw',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
		color: '#FD9B28',
	},
}));

function ContentSection() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<div className={classes.headingDiv}>
				<Typography
					component="h3"
					variant="h3"
					p={1}
					align="center"
					color="textPrimary"
					className={classes.mainHeading}
					gutterBottom>
					Capture, Share, Explore.
				</Typography>

				<Grid align="center" spacing={2}>
					<Grid item>
						<Paper
							component="form"
							align="center"
							className={classes.rootD}>
							<InputBase
								className={classes.input}
								placeholder="Search a Content"
							/>
							<IconButton
								type="submit"
								className={classes.iconButton}
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
