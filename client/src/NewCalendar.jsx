import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Components/Footer/Footer';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import events from './utils/events';
import Navbar from './Components/Header/Navbar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const BackgroundImg = '';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '120vh',
		padding: '25px 40px',
		background: `url('${BackgroundImg}') no-repeat  fixed #fff`,
		fontSize: '22px',
		fontFamily: 'Roboto',
	},
}));

function NewCalendar() {
	const classes = useStyles();

	const localizer = momentLocalizer(moment);
	console.log(localizer);

	let allViews = Object.keys(Views).map((k) => Views[k]);

	console.log(allViews);

	const ColoredDateCellWrapper = ({ children }) =>
		React.cloneElement(React.Children.only(children), {
			style: {
				backgroundColor: 'lightblue',
			},
		});
	return (
		<>
			<CssBaseline />
			<Navbar />
			<div className={classes.mainDiv}>
				<Calendar
					events={events}
					style={{
						height: '80vh',
						marginTop: '15vh',
					}}
					step={120}
					Views="month"
					showMultiDayTimes
					defaultDate={new Date()}
					components={{
						timeSlotWrapper: ColoredDateCellWrapper,
					}}
					localizer={localizer}
				/>
			</div>

			<Footer />
		</>
	);
}

export default NewCalendar;
