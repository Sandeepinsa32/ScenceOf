import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Components/Footer/Footer';
import {
	MonthlyBody,
	MonthlyCalendar,
	MonthlyNav,
	DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';

import { format, startOfMonth, subHours } from 'date-fns';

// import events from './utils/events';
import Navbar from './Components/Header/Navbar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import { blue } from '@material-ui/core/colors';

// const BackgroundImg = '';
// 'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '120vh',
		padding: '10%',
		background: "url('../png/brush.png') fixed #888",
		// background: `url('${BackgroundImg}') no-repeat  fixed #fff`,
		fontSize: '22px',
		fontFamily: 'Roboto',
		paddingTop: '15vh',
		fontWeight: 'bold',
	},
	CalendarStyle: {
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			width: '300%!important',
		},
	},
}));

function NewCalendar() {
	const classes = useStyles();
	let [currentMonth, setCurrentMonth] = useState(startOfMonth(Date.now()));
	return (
		<>
			<CssBaseline />
			<Navbar />
			<div className={classes.mainDiv}>
				<MonthlyCalendar
					currentMonth={currentMonth}
					onCurrentMonthChange={(date) => setCurrentMonth(date)}>
					<MonthlyNav />
					<MonthlyBody
						events={[
							{
								id: 1,
								date: Date.now(),
								time: '17:55- 17:56',
								title: 'Call John',
							},
							{
								id: 2,
								date: new Date(2021, 3, 5),
								time: '17:55- 17:56',
								title: 'Call John',
							},
							{
								id: 3,
								date: new Date(2021, 3, 15),
								time: '17:55- 17:56',
								title: 'Meeting with Bob',
							},
						]}
						renderDay={(data) =>
							data.map((item) => (
								<DefaultMonthlyEventItem
									key={item.id}
									title={item.title}
									date={item.time}
								/>
							))
						}
					/>
				</MonthlyCalendar>
			</div>

			<Footer />
		</>
	);
}
export default NewCalendar;

// renderDay={(data) => (
// 					<DefaultMonthlyEventItem
// 						title={'call me'}
// 						// date={)}
// 					/>
// 				)}
// 			/>
