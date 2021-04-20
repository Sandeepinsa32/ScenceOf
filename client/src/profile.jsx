import React from 'react';
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
								src="https://media.visualstories.com/uploads/images/1/140/5430023-960_468357488-1158103_p.jpg"
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
						{/* <div className="activity">
					<i className="material-icons">group</i>
					<span className="activity-name">Followers</span>
					<span className="index">{props.friends}</span>
				</div> */}
						<div className="activity">
							<i className="material-icons">access_time</i>
							<span className="activity-name">Photos</span>
							<span className="index">225</span>
						</div>
						<div className="activity">
							<i className="material-icons">mode_comment</i>
							<span className="activity-name">Contest</span>
							<span className="index">146</span>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Profile;
