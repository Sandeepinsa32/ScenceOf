import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Login } from '../Login';
const useStyles = makeStyles((theme) => ({
	WrappeDialog: {
		backgroundColor: '#212121',
	},
	paper: {
		marginTop: '0',
	},
	closeIcon: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

export default function LoginPopup(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const ShowPopup = () => {
		setOpen(true);
	};

	const HidePopup = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button
				variant="contained"
				color="default"
				style={{
					backgroundColor: '#2e8b57',
					color: '#fff',
				}}
				component="span"
				onClick={ShowPopup}>
				upload
			</Button>

			<Dialog
				open={open}
				ClassName={classes.WrappeDialog}
				onClose={HidePopup}>
				<DialogActions>
					<CloseOutlinedIcon
						onClick={HidePopup}
						className={classes.closeIcon}
					/>
				</DialogActions>
				{/* <DialogTitle className={classes.Title}>Login First</DialogTitle> */}
				<DialogContent>
					<Login />
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
}
