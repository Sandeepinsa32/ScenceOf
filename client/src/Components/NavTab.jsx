import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Free, Premium, Sponsored } from './Contest/Contest';
import {
	Container,
	Paper,
	Tabs,
	Tab,
	Typography,
	Box,
} from '@material-ui/core';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

//props.Contest
export default function NavTabs(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered>
				<LinkTab label="All Contest" {...a11yProps(0)} />
				<LinkTab label="Free Contest" {...a11yProps(1)} />
				<LinkTab label="Premium Contest" {...a11yProps(2)} />
				<LinkTab label="Sponsered Contest" {...a11yProps(3)} />
				<LinkTab label="Other Contest" {...a11yProps(4)} />
			</Tabs>

			<TabPanel value={value} index={0}>
				{props.contest0}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{props.contest1}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{props.contest2}
			</TabPanel>
			<TabPanel value={value} index={3}>
				{props.contest3}
			</TabPanel>
			<TabPanel value={value} index={4}>
				{props.contest4}
			</TabPanel>
		</div>
	);
}
