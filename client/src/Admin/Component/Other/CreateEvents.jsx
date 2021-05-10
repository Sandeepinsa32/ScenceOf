import React, { useEffect, useState } from 'react';
import Title from '../../Title';
// import { makeStyles } from '@material-ui/core/styles';
import '../../../css/CreateContest.css';
import UploaderWindow from '@webutils/uploader';
import axios from 'axios';
import qs from 'qs';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& > *': {
// 			margin: theme.spacing(1),
// 		},
// 	},
// 	button: {
// 		display: 'block',
// 		marginTop: theme.spacing(2),
// 	},
// 	formControl: {
// 		margin: theme.spacing(1),
// 		minWidth: 120,
// 	},
// }));

export default function CreateContest() {
	const [title, setTitle] = useState('');
	const [starttime, setStarttime] = useState('');
	const [endtime, setEndtime] = useState('');

	function submitform(event) {
		event.preventDefault();
		axios({
			method: 'post',
			url: global.config.apiurl + 'contest/create',
			data: qs.stringify({
				name: title,
				start: starttime,
				end: endtime,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
				if (response.data.status === 'success') {
					alert('Contest Created');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<Title children="Create a New  Contest" />

			<form onSubmit={submitform} ClassName="CreateContest_form">
				<label for="title"> Event Title:</label>
				<input
					className="input"
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				{/* date */}
				<label for="Event_Start_date">Event Start date:</label>
				<input
					type="datetime-local"
					className="input"
					onChange={(e) => setStarttime(e.target.value)}
					name="Event_Start_date"
				/>
				{/* date */}
				<label for="Event_end_date">Event end date:</label>
				<input
					onChange={(e) => setEndtime(e.target.value)}
					type="datetime-local"
					className="input"
					name="Event_end_date"
				/>
				<div>
					<button className="submit_btn " type="submit">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}
// events={[
// 						{
// 							id: 1,
// 							date: Date.now(),
// 							time: '17:55- 17:56',
// 							title: 'Nature contest',
// 						},
// 						{
// 							id: 2,
// 							date: new Date(2021, 3, 5),
// 							time: '17:55- 17:56',
// 							title: 'Call John',
// 						},
// 						{
// 							id: 3,
// 							date: new Date(2021, 3, 15),
// 							time: '17:55- 17:56',
// 							title: 'Meeting with Bob',
// 						},
// 					]}
