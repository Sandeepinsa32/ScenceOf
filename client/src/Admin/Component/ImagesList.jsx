import React, { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';

import Table from './Table/table';
import { useLocation } from 'react-router-dom';

export default function ImageList() {
	const [checkwinner, setCheckwinner] = useState('');
	const query = new URLSearchParams(useLocation().search);
	const contestid = query.get('contid');

	function Changestatus(id, flag) {
		console.log(id, flag);

		axios({
			method: 'post',
			url: global.config.apiurl + 'uploadimg/setwinner',
			data: qs.stringify({
				id: id,
				winner: flag,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const [imageslist, setImageslist] = useState([]);
	useEffect(() => {
		let rows = [];
		// axios.get(global.config.apiurl + 'admin/imageslist')
		axios
			.get(
				global.config.apiurl +
					'uploadimg/byContest?contesid=' +
					contestid
			)
			.then((res) => {
				const alldata = res.data;
				console.log(alldata);
				alldata.map((val, ind, arr) => {
					var win = val.winner === '0' ? '1' : '0';
					rows.push([
						ind + 1,
						<img
							src={val.url}
							alt="img"
							height="100px"
							width="100px"
						/>,
						<>
							<button
								className="modalButton join-btn"
								data-popup="accept"
								onClick={() => {
									Changestatus(val.id, win);
								}}>
								Change status
							</button>
							{checkwinner}
						</>,

						checkwinner === '1' ? <h2>winner</h2> : <h2> </h2>,
					]);
				});
				setImageslist(rows);
				console.log(rows);
			});
	}, []);

	return (
		<div>
			<h1> Images Uploaded List</h1>
			<Table
				tableHeaderColor="primary"
				tableHead={['Sr. ', 'Image', 'Action']}
				tableData={imageslist}
			/>
		</div>
	);
}
