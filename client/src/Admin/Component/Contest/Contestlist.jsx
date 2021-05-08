import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../Title';
import Table from '../Table/table';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Contestlist() {
	const [contest, setContest] = useState([]);

	function del(id) {
		axios
			.get(global.config.apiurl + 'admin/contestdel?id=' + id)
			.then((res) => {
				const resdata = res.data;
				alert(resdata.msg);
				fetchtabldata();
			});
	}

	function fetchtabldata() {
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
					// val.catname,
					val.type,
					<div className="button-wrapper">
						<Link
							to={'/admin/imglist?contid=' + val.id}
							target="_blank"
							exact>
							<button
								className="modalButton join-btn"
								data-popup="accept"
								style={{
									padding: '5px',
								}}>
								select
							</button>
						</Link>
					</div>,
					<div className="button-wrapper">
						<button
							className="modalButton join-btn"
							data-popup="accept"
							style={{
								padding: '0',
								margin: '0',
								width: '35px',
							}}
							onClick={() => {
								del(val.id);
							}}>
							<DeleteIcon />
						</button>
					</div>,
				]);
			});
			setContest(rows);
			console.log(rows);
		});
	}

	useEffect(() => {
		fetchtabldata();
	}, []);

	return (
		<div>
			<Title children="List Of Contest" />
			<Table
				tableHeaderColor="primary"
				tableHead={[
					'Image',
					'Name',
					'Sponser',
					// 'Category',
					'Type',
					'select sponser',
					'Action',
				]}
				tableData={contest}
			/>
		</div>
	);
}
