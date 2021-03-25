import { makeStyles } from '@material-ui/core/styles';

const imgSrc =
	'https://images.unsplash.com/photo-1548195667-1d329af0a472?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1782&q=80';
const useStyles = makeStyles((theme) => ({
	root: {
		'& body': {},
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	main: {
		minHeight: '100vh',
		padding: '100px 0',
		background: `url('${imgSrc}') no-repeat  fixed red`,
		overflow: 'none',

		// https://scenesofnewengland.com/wp-content/uploads/2020/07/landscape-4518381_1920.png
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
	},
}));

export default useStyles;
