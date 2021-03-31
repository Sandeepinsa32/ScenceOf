import React from 'react';
import { CssBaseline, Grid, Link, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	NavbarLink: {
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
						className={classes.NavbarLink}>
						Home
					</Link>

					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.NavbarLink}>
						About
					</Link>
					<Link>
						<a
							className={classes.NavbarLink}
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
						className={classes.NavbarLink}>
						Calender
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.NavbarLink}>
						Directory
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.NavbarLink}>
						Sponsor
					</Link>
					<Link
						variant="button"
						color="primary"
						href="#"
						className={classes.NavbarLink}>
						Blog
					</Link>
				</Grid>
			</nav>
		</>
	);
}

export default Navbar;
