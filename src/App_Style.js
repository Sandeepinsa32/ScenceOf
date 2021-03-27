import { makeStyles } from '@material-ui/core/styles';

const imgSrc =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';
// 'https://images.unsplash.com/photo-1548195667-1d329af0a472?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1782&q=80';
const useStyles = makeStyles((theme) => ({
	rootD: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '70vw',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
		color: '#FD9B28',
	},
	divider: {
		height: 28,
		margin: 4,
	}, // search bar icon
	root: {
		maxWidth: '400px',
		margin: '10px auto',
		borderRadius: '20px',
	},
	mainHeading: {
		color: '#FFF',
	},
	media: {
		height: '80px',
		width: '80px',
		borderRadius: '50%',
	},
	headingDiv: {
		marginTop: '10vh',
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	main: {
		minHeight: '100vh',
		padding: '25px 40px',
		background: `url('${imgSrc}') no-repeat  fixed red`,
		overflow: 'none',
	},
	link: {
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'auto',
		textTransform: 'none',
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	navbarMain: {
		backgroundColor: '#1e1e1e',
		// backgroundColor: 'steelblue',
	},
	btnExplore: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '75%', // 16:9 56.25%'
	},
	cardContent: {
		flexGrow: '1',
	},
	footer: {
		maxHeight: '60vh',
		background: `url('${imgSrc}') no-repeat  fixed red`,
	},
	seeThisLink: {
		textDecoration: 'none',
		color: '#3dad4b',
		borderColor: '#3dad4b',
	},
	navbarLogo: {
		marginTop: '20px',
		height: '50px',
	},
	btnJoin: {
		color: '#fff',
		backgroundColor: '#5AD9E6',
		margin: '20px 10px',
		fontSize: '12px',
		justifyContent: 'center',
	},
	btnSign: {
		color: '#fff',
		borderColor: '#fff',
		backgroundColor: 'transparent',
		margin: '20px 10px',
		textTransform: 'normal',
		fontSize: '12px',
	},
	btnJoinCon: {
		paddingLeft: '20px',
		paddingRight: '20px',
	},
	btnMoreCon: {
		color: '#fff',
		fontSize: '12px',
		padding: '10px',
		backgroundColor: '#3dad4b',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: '#389e44',
		},
		cardName: {
			fontSize: '12px',
			color: 'red',
		},
	},
}));

export default useStyles;
