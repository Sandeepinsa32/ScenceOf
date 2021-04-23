import React, { useEffect, useState } from 'react';
// import qs from 'qs';
import axios from 'axios';

import './css/profile.css';

import Navbar from './Components/Header/Navbar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		// padding: '0px 40px',
		// background: `url('') no-repeat  fixed #212121`,
	},
}));

const Profile = (props) => {
	const classes = useStyles();

	const [totalimgs, setTotalimgs] = useState(0);
	const [totalcontests, setTotalcontests] = useState(0);

	useEffect(() => {
		axios
			.get(global.config.apiurl + `uploadimg/countimgs`, {
				withCredentials: true,
			})
			.then((res) => {
				let alldata = res.data;
				// alert(alldata[0].totalimgs);
				setTotalimgs(alldata[0].totalimgs);
			});
		axios
			.get(global.config.apiurl + `uploadimg/countcontests`, {
				withCredentials: true,
			})
			.then((res) => {
				let alldata = res.data;
				// console.log(alldata);
				setTotalcontests(alldata[0].totalcontests);
			});
	}, []);

	return (
		<>
			<CssBaseline />
			<Navbar />
			<div className={classes.mainDiv}>
				<div className="Wrapper-div">
					<header className="card-header">
						<div className="inner-div">
							<img
								className="user_pic"
								src="../png/img_avatar.png"
								alt=""
							/>
							<div className="heading-box">
								<h1>John Doe</h1>
								<h3>
									Photographer,
									<span>
										<i className="material-icons">
											location_city
										</i>
										Warsaw, PL
									</span>
								</h3>
							</div>
						</div>
					</header>
					<main className="card-main">
						<div className="activity">
							<i className="material-icons">access_time</i>
							<span className="activity-name">Photos</span>
							<span className="index">{totalimgs}</span>
						</div>
						<div className="activity">
							<i className="material-icons">mode_comment</i>
							<span className="activity-name">Contest</span>
							<span className="index">{totalcontests}</span>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Profile;
