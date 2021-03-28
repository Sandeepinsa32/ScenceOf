import React from 'react';
import { Grid, CssBaseline, Link, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	link: {
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
	},
}));

function Navbar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<CssBaseline />
			<nav>
				<Grid
					justify="space-evenly" // Add it here :)
					container
					spacing={24}>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.link}>
						Home
					</Link>

					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.link}>
						About
					</Link>
					<Link>
						<a
							className={classes.link}
							// aria-controls="simple-menu"
							// aria-haspopup="true"
							// onMouseOver={handleClick}
						>
							Contests
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>
									categories
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Ending Soon
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Popular
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Winner
								</MenuItem>
							</Menu>
						</a>
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.link}>
						Calender
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.link}>
						Directory
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.link}>
						Sponsor
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.link}>
						Blog
					</Link>
				</Grid>
			</nav>
		</>
	);
}

export default Navbar;
