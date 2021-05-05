import React from 'react';
import { NavLink } from 'react-router-dom';

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
				{/* <NavLink
					to="/active-contest"
					exact
					activeClassName={classes.activeLink}>
					Explore
				</NavLink> */}
				<span
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}
					color="inherit">
					Directory
					<ExpandMoreIcon />
				</span>

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
							to="/pricing"
							exact
							activeClassName={classes.activeLink}>
							Pricing
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/winner"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							Winner
						</NavLink>
					</MenuItem>

					<MenuItem>
						<NavLink
							to="/admin"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							Admin Login
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/admin/dashboard"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							Admin Dashboard
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/Forgetpassword"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							ForgetPassword
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/Changepassword"
							exact
							activeClassName={classes.activeLink}
							className={classes.ContestLink}>
							Change Password
						</NavLink>
					</MenuItem>
				</Menu>
			</span>
		</>
	);
}
