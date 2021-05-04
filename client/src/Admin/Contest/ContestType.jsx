import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '../Component/Table/table';

export default function () {
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
			<h1> Contest List</h1>
			<Table
				tableHeaderColor="primary"
				tableHead={['Sr. ', 'Type']}
				tableData={contesttype}
			/>
		</div>
	);
}
