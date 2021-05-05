import React, { useEffect, useState } from 'react';
import Auth from '../utils/Auth';
// import qs from 'qs';
import axios from 'axios';

import '../../css/profile.css';

import Navbar from '../Header/Navbar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Gallery from 'react-grid-gallery';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		// padding: '0px 40px',
		// background: `url('') no-repeat  fixed #212121`,
	},
}));

const Profile = (props) => {
	const classes = useStyles();
	const [check, setCheck] = useState(0);
	const [totalimgs, setTotalimgs] = useState(0);
	const [totalcontests, setTotalcontests] = useState(0);
	const [imgsdb, setImgsrcdb] = useState([]);

	useEffect(() => {
		axios
			.get(global.config.apiurl + `uploadimg/countimgs`, {
				headers: Auth(),
			})
			.then((res) => {
				let alldata = res.data;
				// alert(alldata[0].totalimgs);
				setTotalimgs(alldata[0].totalimgs);
			});
		axios
			.get(global.config.apiurl + `contest/countcontests`, {
				headers: Auth(),
			})
			.then((res) => {
				let alldata = res.data;
				// console.log(alldata);
				setTotalcontests(alldata[0].totalcontests);
			});
		const imgsdata = [];
		axios
			.get(global.config.apiurl + `uploadimg/byUser`, {
				headers: Auth(),
			})
			.then((res) => {
				let alldata = res.data;
				alldata.map(function (val, i, arr) {
					return imgsdata.push({
						src: val.url,
						thumbnail: val.url,
						thumbnailWidth: 640,
						thumbnailHeight: 320,
					});
				});
				console.log(imgsdata);
				setImgsrcdb(imgsdata);
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
						<div
							className="activity"
							onClick={() => {
								setCheck(0);
							}}>
							<i className="material-icons">access_time</i>
							<span className="activity-name">Photos</span>
							<span className="index">{totalimgs}</span>
						</div>
						<div
							className="activity"
							onClick={() => {
								setCheck(1);
							}}>
							<i className="material-icons">mode_comment</i>
							<span className="activity-name">Contest</span>
							<span className="index">{totalcontests}</span>
						</div>
					</main>
					{check ? (
						<>
							<span
								className="index"
								style={{ marginTop: '5vh' }}>
								you are participated in {totalcontests} contest
								only
							</span>
						</>
					) : (
						<Gallery
							images={imgsdb}
							backdropClosesModal={true}
							enableKeyboardInput={true}
							enableImageSelection={false}
							style={{ marginTop: '20vh' }}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Profile;
