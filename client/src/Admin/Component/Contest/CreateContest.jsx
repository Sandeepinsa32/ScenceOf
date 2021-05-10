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
	const [imgsrc, setImgsrc] = useState('');
	const [name, setName] = useState('');
	const [sponser, setSponser] = useState('');
	const [type, setType] = useState('');
	const [category, setCategory] = useState('');
	const [desc, setDesc] = useState('');
	const [starttime, setStarttime] = useState('');
	const [endtime, setEndtime] = useState('');

	function submitform(event) {
		event.preventDefault();
		axios({
			method: 'post',
			url: global.config.apiurl + 'contest/create',
			data: qs.stringify({
				name: name,
				image: imgsrc,
				sponser: sponser,
				type: type,
				category: category,
				start: starttime,
				end: endtime,
				description: desc,
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

	const [contesttype, setContesttype] = useState(['']);
	useEffect(() => {
		axios.get(global.config.apiurl + 'contesttype').then((res) => {
			const alldata = res.data;
			console.log(alldata);
			setContesttype(alldata);
			console.log(contesttype);
		});
	}, []);

	function upload() {
		UploaderWindow('my-uploader-12')
			.open()
			.then((res) => {
				const alldata = res[0].url;
				setImgsrc(alldata);
			});
	}
	return (
		<div>
			<Title children="Create a New  Contest" />

			<form onSubmit={submitform} ClassName="CreateContest_form">
				<label for="name"> Contest Name:</label>
				<input
					className="input"
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label for="email">Sponser Name</label>
				<input
					className="input"
					type="text"
					id="mail"
					value={sponser}
					onChange={(e) => setSponser(e.target.value)}
				/>

				<label for="job">Contest Type:</label>
				<select
					className="CreateContest_Select"
					id="job"
					name="user_job"
					onChange={(e) => setType(e.target.value)}>
					<option>Choose Type</option>
					{contesttype.map((val, ind, arr) => (
						<option value={val.id}>{val.type}</option>
					))}
				</select>

				<label>Contest Category:</label>
				<select
					className="CreateContest_Select"
					id="job"
					name="user_job"
					onChange={(e) => setCategory(e.target.value)}>
					<option value="1">Nature</option>
					<option value="2">Landscape</option>
					<option value="3">Night</option>
					<option value="4">Music</option>
					<option value="5">Micro</option>
					<option value="6">Sports</option>
				</select>
				{/* desc */}
				<label for="contest_desc">Contest Description:</label>
				<textarea
					id="contest_desc"
					rows="5"
					className="input"
					name="user_contest_desc"
					onChange={(e) => setDesc(e.target.value)}></textarea>
				{/* date */}
				<label for="Contest Start date">Contest Start date:</label>
				<input
					type="datetime-local"
					className="input"
					onChange={(e) => setStarttime(e.target.value)}
					name="Contest Start date"
				/>
				{/* date */}
				<label for="Contest Start date">Contest end date:</label>
				<input
					onChange={(e) => setEndtime(e.target.value)}
					type="datetime-local"
					className="input"
					name="Contest end date"
				/>
				<div>
					<button
						className="submit_btn upoad_btn"
						type="button"
						onClick={upload}>
						Upload
					</button>
					<button className="submit_btn " type="submit">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}
