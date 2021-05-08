import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../Title';
import Table from '../Table/table';

export default function ContestType() {
	const [contesttype, setContesttype] = useState([]);
	useEffect(() => {
		let rows = [];
		axios.get(global.config.apiurl + 'contesttype').then((res) => {
			const alldata = res.data;
			console.log(alldata);
			alldata.map((val, ind, arr) => {
				rows.push([ind + 1, val.type]);
			});
			setContesttype(rows);
			console.log(rows);
		});
	}, []);

	return (
		<div>
			<Title children="Types  Of Contest available" />
			<Table
				tableHeaderColor="primary"
				tableHead={['Sr. ', 'Type']}
				tableData={contesttype}
			/>
		</div>
	);
}
