import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../Title';
import Table from '../Table/table';

export default function Userlist() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		let rows = [];
		axios.get(global.config.apiurl + 'admin/userlist').then((res) => {
			const alldata = res.data;
			console.log(alldata);
			alldata.map((val, ind, arr) => {
				rows.push([ind + 1, val.fname, val.username, val.email]);
			});
			setUsers(rows);
			console.log(rows);
		});
	}, []);

	return (
		<div>
			<Title children="List Of user" />
			<Table
				tableHeaderColor="primary"
				tableHead={['Sr. ', 'Blog Title', 'Blog Desc.', 'Blog Image']}
				tableData={users}
			/>
		</div>
	);
}
