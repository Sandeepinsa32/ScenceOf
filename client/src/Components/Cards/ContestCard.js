import React from 'react';
import {
	CssBaseline,
	Container,
	Grid,
	Typography,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Css/ContestCard.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	CcOutterDiv: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	CcExploreMoreDiv: {
		marginTop: theme.spacing(4),
	},
	CcExploreMoreBtn: {
		color: '#fff',
		fontSize: '12px',
		padding: '10px',
		backgroundColor: '#3dad4b',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: '#389e44',
		},
	},
	link: {
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
	},
}));

function ContestCard(props) {
	const classes = useStyles();
	// console.log(props.data);
	const contextList = props.data;
	// console.log(contextList[0].name);
	return (
		<>
			<CssBaseline />
			<Container className={classes.CcOutterDiv} maxWidth="lg">
				<Grid container spacing={2} justify="center">
					<Grid item>
						<Typography gutterBottom variant="h4" component="h4">
							Active Contest
						</Typography>
					</Grid>
				</Grid>

				<Grid md={12}>
					{contextList.map((figure) => (
						<figure className="snip1584" key={figure.name}>
							<img alt="card" src={figure.image} />
							<figcaption>
								<h3>{figure.name}</h3>
								<h5>{figure.sponser}</h5>

								<Link
									to={
										'/contest/enter-a-contest?contid=' +
										figure.id
									}
									exact></Link>
							</figcaption>
						</figure>
					))}
				</Grid>
				<div className={classes.CcExploreMoreDiv}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Link to="/active-contest" exact>
								<Button
									variant="contained"
									color="default"
									size="small"
									className={classes.CcExploreMoreBtn}>
									See more open contests
								</Button>
							</Link>
						</Grid>
					</Grid>
				</div>
			</Container>
		</>
	);
}

export default ContestCard;
