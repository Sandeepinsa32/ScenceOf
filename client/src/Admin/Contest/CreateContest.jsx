import { Container, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Title from '../Title';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import UploaderWindow from '@webutils/uploader';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default function CreateContest() {
	const [imgsrc, setImgsrc] = useState('');
	const classes = useStyles();
	const [age, setAge] = React.useState('');
	const [open, setOpen] = React.useState(false);

	function upload() {
		alert('upload clicked');
		UploaderWindow('my-uploader-12')
			.open()
			.then((res) => {
				const alldata = res[0].url;
				setImgsrc(alldata);
			});
	}
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<>
			<Title children="Create a Contest" />
			<Container>
				<form className={classes.root} noValidate autoComplete="off">
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							justify-Content="Space-around">
							<TextField
								id="standard-basic"
								label="Contest Name"
							/>

							<TextField
								id="standard-basic"
								label="Sponser Name"
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							style={{ padding: '40px 20vh' }}>
							<span
								className={classes.dropdown}
								style={{ margin: '0 5vh' }}>
								<InputLabel id="demo-controlled-open-select-label">
									Category
								</InputLabel>
								<Select
									labelId="demo-controlled-open-select-label"
									id="demo-controlled-open-select"
									open={open}
									onClose={handleClose}
									onOpen={handleOpen}
									value={age}
									onChange={handleChange}>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Free</MenuItem>
									<MenuItem value={20}>Premium</MenuItem>
									<MenuItem value={30}>Sposoner</MenuItem>
								</Select>
							</span>
							<InputLabel htmlFor="grouped-select">
								Type
							</InputLabel>
							<Select defaultValue="" id="grouped-select">
								<MenuItem value="">
									<em>None</em>
								</MenuItem>

								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}> 2</MenuItem>
								<MenuItem value={3}> 3</MenuItem>
							</Select>
						</Grid>

						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							style={{ padding: '45px 0' }}>
							<Button
								variant="contained"
								color="default"
								style={{
									backgroundColor: '#2e8b57',
									color: '#fff',
									margin: '5vh 5vh',
								}}
								component="span"
								onClick={upload}>
								upload
							</Button>
							<Button
								variant="contained"
								color="default"
								style={{
									backgroundColor: '#888',
									margin: '5px',
									color: '#fff',
								}}
								component="span">
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		</>
	);
}
