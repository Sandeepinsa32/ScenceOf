import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {
	CssBaseline,
	Drawer,
	Paper,
	Grid,
	Container,
	Badge,
	IconButton,
	Divider,
	Typography,
	List,
	Toolbar,
	AppBar,
} from '@material-ui/core';

import ContestList from './Contestlist';
import ContestType from './ContestType';
import ContestCategory from './ContestCategory';
import ImagesList from '../Component/ImagesList';
import CreateContest from './CreateContest';
import UserList from './UserList';

//menulist
import { ListItemText, ListItemIcon, ListItem } from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

const welcome = (
	<Typography
		component="h3"
		variant="h3"
		p={1}
		align="center"
		color="textPrimary"
		gutterBottom>
		Welcome to Admin Panel
	</Typography>
);

export default function Dashboard() {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const [component, setComponent] = useState(<ImagesList />);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	// const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}>
						<MenuIcon />
					</IconButton>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}>
						Dashboard
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={0} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(
						classes.drawerPaper,
						!open && classes.drawerPaperClose
					),
				}}
				open={open}>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<div>
						<ListItem
							button
							onClick={() => {
								setComponent(<UserList />);
							}}>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>

						<ListItem
							button
							onClick={() => {
								setComponent(<ContestList />);
							}}>
							<ListItemIcon>
								<LayersIcon />
							</ListItemIcon>

							<ListItemText primary="Contest" />
						</ListItem>

						<ListItem
							button
							onClick={() => {
								setComponent(<ContestCategory />);
							}}>
							<ListItemIcon>
								<LayersIcon />
							</ListItemIcon>
							<ListItemText primary="Contest Category" />
						</ListItem>

						<ListItem
							button
							onClick={() => {
								setComponent(<ContestType />);
							}}>
							<ListItemIcon>
								<LayersIcon />
							</ListItemIcon>
							<ListItemText primary="Contest Type" />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								setComponent(<CreateContest />);
							}}>
							<ListItemIcon>
								<LayersIcon />
							</ListItemIcon>
							<ListItemText primary="Create Contest" />
						</ListItem>
					</div>
				</List>
				<Divider />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>{component}</Paper>
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	);
}
