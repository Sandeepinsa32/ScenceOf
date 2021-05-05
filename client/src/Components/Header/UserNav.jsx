import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

// framework
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, MenuItem, Menu } from '@material-ui/core';

// icons
import AccountCircle from '@material-ui/icons/AccountCircle';

// css
import '../../css/Navbar.css';

const useStyles = makeStyles((theme) => ({}));

//props.username , props.NameOfClass

export default function UserNav(props) {
	const classes = useStyles();
	const history = useHistory();

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
				<IconButton
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}
					color="inherit">
					<AccountCircle />
				</IconButton>
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
						<NavLink to="/myaccount" exact>
							<div
								className={classes.popupMenu}
								style={{
									width: '100%',
									color: '#2e8b57',
									fontWeight: 'bolder',
									fontSize: '16px',
									textAlign: 'center',
									justifyContent: 'center',
									margin: '0 auto',
									textTransform: 'uppercase',
								}}>
								Welcome {props.Username}
							</div>
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/myaccount"
							exact
							className={classes.popupMenu}>
							My Account
						</NavLink>
					</MenuItem>
					{/* <MenuItem>
						<NavLink
							to="/myaccount"
							exact
							className={classes.popupMenu}>
							Your Photos
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/myaccount"
							exact
							className={classes.popupMenu}>
							Your Contest
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink
							to="/myaccount"
							exact
							className={classes.popupMenu}>
							Notificaiton
						</NavLink>
					</MenuItem> */}

					<MenuItem>
						<li>
							<div className="button-wrapper">
								<button
									className="modalButton join-btn"
									data-popup="accept"
									onClick={() => {
										localStorage.removeItem('user');
										history.push('/login');
									}}>
									LogOut
								</button>
							</div>
						</li>
					</MenuItem>
				</Menu>
			</span>
		</>
	);
}
