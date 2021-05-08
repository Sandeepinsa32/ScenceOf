import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../Title';
import Table from '../Table/table';

export default function ContestCategory() {
	const [contest, setContest] = useState([]);
	useEffect(() => {
		let rows = [];
		axios.get(global.config.apiurl + 'contestcategory').then((res) => {
			const alldata = res.data;
			console.log(alldata);
			alldata.map((val, ind) => {
				return rows.push([
					ind + 1,
					<img
						alt="card"
						src={val.background}
						height="100px"
						width="100px"
					/>,
					val.name,
				]);
			});
			setContest(rows);
			// console.log(rows);
		});
	}, []);

	return (
		<div>
			<Title children="diffrent  Catergories of contest" />
			<Table
				tableHeaderColor="primary"
				tableHead={['SR.', 'Image', 'Name']}
				tableData={contest}
			/>
		</div>
	);
}
