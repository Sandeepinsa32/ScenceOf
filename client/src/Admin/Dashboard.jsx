import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
	CssBaseline,
	Drawer,
	Paper,
	Grid,
	Container,
	IconButton,
	Typography,
	List,
	Toolbar,
	AppBar,
	Collapse,
} from '@material-ui/core';
import ContestList from './Component/Contest/Contestlist';
import ContestType from './Component/Contest/ContestType';
import ContestCategory from './Component/Contest/ContestCategory';
import CreateContest from './Component/Contest/CreateContest';
//other component
import UserList from './Component/Other/UserList';
import BlogList from './Component/Other/BlogList';
import CreateBlog from './Component/Other/CreateBlog';
import CreateEvents from './Component/Other/CreateEvents';
import CreateAdmin from './Component/Other/CreateAdmin';
import ChangePassword from './Component/Other/ChangePassword';

//menulist
import { ListItemText, ListItemIcon, ListItem } from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CategoryIcon from '@material-ui/icons/Category';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import DescriptionIcon from '@material-ui/icons/Description';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
		background: theme.palette.info.main,
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
	welcome_title: {
		color: theme.palette.info.main,
		alignItems: 'center',
		fontSize: 32,
		textTransform: 'capitalize',
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const [contest, setContest] = useState(false);
	const [other, setOther] = useState(false);
	const [component, setComponent] = useState(<Welcome />);

	const handleContest = () => {
		setContest(!contest);
	};
	const handleOther = () => {
		setOther(!other);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const history = useHistory();
	const requireAuth = () => {
		if (!localStorage.getItem('admin')) {
			alert('Please Login ');
			return history.push('/admin');
		}
	};
	requireAuth();

	const logout = () => {
		localStorage.removeItem('admin');
		window.location.reload();
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
						<Typography component="h6" variant="h6" color="inherit">
							<span onClick={logout}>Logout</span>
						</Typography>
						{/* <Badge badgeContent={0} color="secondary">
							<NotificationsIcon />
						</Badge> */}
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
				<List>
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
					<ListItem onClick={handleContest}>
						<ListItemIcon>
							<SubdirectoryArrowRightIcon />
						</ListItemIcon>
						<ListItemText primary="Contest" />
						{contest ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={contest}>
						<List component="div" disablePadding>
							<div>
								<ListItem
									button
									onClick={() => {
										setComponent(<ContestList />);
									}}>
									<ListItemIcon>
										<FormatListNumberedIcon />
									</ListItemIcon>

									<ListItemText primary="Contest List" />
								</ListItem>

								<ListItem
									button
									onClick={() => {
										setComponent(<ContestCategory />);
									}}>
									<ListItemIcon>
										<CategoryIcon />
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
										<AddBoxIcon />
									</ListItemIcon>
									<ListItemText primary="Create Contest" />
								</ListItem>
							</div>
						</List>
					</Collapse>
				</List>

				<List>
					<ListItem onClick={handleOther}>
						<ListItemIcon>
							<SubdirectoryArrowRightIcon />
						</ListItemIcon>
						<ListItemText primary="Other" />
						{other ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={other}>
						<List component="div" disablePadding>
							<div>
								<ListItem
									button
									onClick={() => {
										setComponent(<BlogList />);
									}}>
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText primary="List Of Blog" />
								</ListItem>
								<ListItem
									button
									onClick={() => {
										setComponent(<CreateBlog />);
									}}>
									<ListItemIcon>
										<PostAddIcon />
									</ListItemIcon>
									<ListItemText primary="Create New Blog" />
								</ListItem>
								<ListItem
									button
									onClick={() => {
										setComponent(<CreateEvents />);
									}}>
									<ListItemIcon>
										<PostAddIcon />
									</ListItemIcon>
									<ListItemText primary="Calender Events" />
								</ListItem>
								{/* <ListItem
									button
									onClick={() => {
										setComponent(<CreateAdmin />);
									}}>
									<ListItemIcon>
										<PostAddIcon />
									</ListItemIcon>
									<ListItemText primary="Create Admin" />
								</ListItem> */}
								<ListItem
									button
									onClick={() => {
										setComponent(<ChangePassword />);
									}}>
									<ListItemIcon>
										<PostAddIcon />
									</ListItemIcon>
									<ListItemText primary="Change Password" />
								</ListItem>
							</div>
						</List>
					</Collapse>
				</List>
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

const Welcome = () => {
	const classes = useStyles();
	return (
		<Typography
			component="h3"
			variant="h3"
			align="center"
			className={classes.welcome_title}
			gutterBottom>
			Welcome to the Admin Panel
		</Typography>
	);
};
