import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

// framework
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Menu } from '@material-ui/core';

// icons

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// css
import '../../css/Navbar.css';

const useStyles = makeStyles((theme) => ({}));

//props.username , props.NameOfClass

export default function UserNav(props) {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<span className={props.NameOfClass}>
				<NavLink
					to="/active-contest"
					exact
					activeClassName={classes.activeLink}>
					Contests
				</NavLink>
				{/* <span
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}

					color="inherit">
					Contests
					<ExpandMoreIcon />
				</span> */}
				{/* 
				<Menu
					style={{
						marginTop: '50px',
						right: '50px',
					}}
					id="menu-appbar"
					anchorEl={anchorEl}
					keepMounted
					open={open}
					onClose={handleClose}>
					<MenuItem>
						<NavLink
							to="/active-contest"
							exact
							activeClassName={classes.activeLink}>
							All Contest
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/active-contest/Free-contest"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							Free Contest
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/active-contest/Premium-contest"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							Premium Contest
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/active-contest/Sponsored-contest"
							exact
							className={classes.ContestLink}
							activeClassName={classes.activeLink}>
							Sponsered Contest
						</NavLink>
					</MenuItem>
				</Menu> */}
			</span>
		</>
	);
}
