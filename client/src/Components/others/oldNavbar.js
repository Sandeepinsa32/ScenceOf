import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

// const BackgroundImg = 'https://cdn.fs.teachablecdn.com/RD4lJ0jZTq6k6zfSQ8de';
const useStyles = makeStyles((theme) => ({
	outterNav: {
		backgroundColor: '#e3e3e3',
		padding: '17px',
		// background: `url('${BackgroundImg}') fixed`,
	},
	NavbarLink: {
		color: '#111',
		padding: '0 10px',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
		borderRight: '1px solid #212121',
		borderLeft: '1px solid #212121',
		margin: '0 auto',
		'&:hover': {
			textDecoration: 'none',
			cursor: 'pointer',
		},
	},
	activeLink: { borderColor: '#3dad4b', color: '#3dad4b', fontWeight: '900' },
}));

function OldNavbar() {
	const classes = useStyles();
	// const [anchorEl, setAnchorEl] = React.useState(null);
	// const handleClick = (event) => {
	// 	setAnchorEl(event.currentTarget);
	// };
	// const handleClose = () => {
	// 	setAnchorEl(null);
	// };

	return (
		<>
			<CssBaseline />

			<nav className={classes.outterNav}>
				<Grid justify="center" container spacing={24}>
					<NavLink
						exact
						activeClassName={classes.activeLink}
						variant="button"
						color="primary"
						to={`/active-contest/`}
						className={classes.NavbarLink}>
						All Contest
					</NavLink>
					<NavLink
						variant="button"
						exact
						activeClassName={classes.activeLink}
						color="primary"
						to="/active-contest/Free-contest"
						className={classes.NavbarLink}>
						Free Contest
					</NavLink>
					<NavLink
						exact
						variant="button"
						color="primary"
						activeClassName={classes.activeLink}
						to="/active-contest/Premium-contest"
						className={classes.NavbarLink}>
						Premium Contest
					</NavLink>
					<NavLink
						exact
						variant="button"
						color="primary"
						activeClassName={classes.activeLink}
						to="/active-contest/Sponsored-contest"
						className={classes.NavbarLink}>
						Sponsored Contest
					</NavLink>
				</Grid>
			</nav>
		</>
	);
}

export default OldNavbar;
