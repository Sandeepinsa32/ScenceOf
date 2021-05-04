import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '../Component/Table/table';

export default function Contestlist() {
	const [contest, setContest] = useState([]);
	useEffect(() => {
		let rows = [];
		axios.get(global.config.apiurl + 'admin/contesttable').then((res) => {
			const alldata = res.data;
			console.log(alldata);
			alldata.map((val, ind, arr) => {
				rows.push([
					<img
						alt="card"
						src={val.image}
						height="100px"
						width="100px"
					/>,
					val.name,
					val.sponser,
					val.catname,
					val.type,
				]);
			});
			setContest(rows);
			console.log(rows);
		});
	}, []);

	return (
		<div>
			<h1> Contest List</h1>
			<Table
				tableHeaderColor="primary"
				tableHead={['Image', 'Name', 'Sponser', 'Category', 'Type']}
				tableData={contest}
			/>
		</div>
	);
}
