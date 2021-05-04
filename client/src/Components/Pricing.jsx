import React from 'react';
import {
	CssBaseline,
	Container,
	Grid,
	Typography,
	CardHeader,
	CardContent,
	CardActions,
	Card,
	Button,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import Payment from './Payment';
import tiers from './utils/pricingData';

const BackgroundImg =
	'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';
const useStyles = makeStyles((theme) => ({
	mainDiv: {
		// marginTop: '10vh',
		minHeight: '10vh',
		padding: '10vh 0',
		color: '#fff',
		background: `url('${BackgroundImg}') fixed`,
		boxShadow: '-1px -12px 7px -12px rgb(0 ,0 ,0.75)',
	},
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	wrapper_heading: {
		padding: theme.spacing(8, 0, 6),
	},
	Pricing_Section: {
		minHeight: '100vh',
		padding: '20vh 0',
	},
	cardHeader: {
		backgroundColor: '#ffae42',
		// backgroundColor:
		// 	theme.palette.type === 'dark'
		// 		? theme.palette.grey[200]
		// 		: theme.palette.grey[700],
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

export default function Pricing() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Navbar BackgroundImg={BackgroundImg} />

			<main>
				<div maxWidth="md" className={classes.mainDiv}>
					<Container
						maxWidth="sm"
						component="main"
						className={classes.wrapper_heading}>
						<Typography
							component="h1"
							variant="h2"
							align="center"
							gutterBottom>
							Pricing
						</Typography>
						<Typography
							variant="h6"
							style={{ fontSize: '1rem' }}
							align="center"
							component="p">
							Quickly build an effective pricing table for your
							potential customers with this layout. It&apos;s
							built with default Material-UI components with
							little customization.
						</Typography>
					</Container>
				</div>

				<Container
					maxWidth="md"
					component="main"
					className={classes.Pricing_Section}>
					<Grid container spacing={5} alignItems="flex-end">
						{tiers.map((tier) => (
							// Enterprise card is full width at sm breakpoint
							<Grid
								item
								key={tier.title}
								xs={12}
								sm={tier.title === 'Enterprise' ? 12 : 6}
								md={4}>
								<Card>
									<CardHeader
										title={tier.title}
										subheader={tier.subheader}
										titleTypographyProps={{
											align: 'center',
										}}
										subheaderTypographyProps={{
											align: 'center',
										}}
										action={
											tier.title === 'Pro' ? (
												<StarIcon />
											) : null
										}
										className={classes.cardHeader}
									/>
									<CardContent>
										<div className={classes.cardPricing}>
											<Typography
												component="h2"
												variant="h3"
												color="textPrimary">
												${tier.price}
											</Typography>
											<Typography
												variant="h6"
												color="textSecondary">
												/mo
											</Typography>
										</div>
										<ul>
											{tier.description.map((line) => (
												<Typography
													component="li"
													variant="subtitle1"
													align="center"
													key={line}>
													{line}
												</Typography>
											))}
										</ul>
									</CardContent>
									<CardActions
										style={{ justifyContent: 'center' }}>
										{tier.title === 'Free' ? (
											<Button
												fullWidth
												variant={tier.buttonVariant}
												color="primary">
												{tier.buttonText}
											</Button>
										) : (
											<Payment totalAmount="1" />
										)}
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>

				<Container>
					<img
						src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png"
						alt="Pay with PayPal, PayPal Credit or any major credit card"
					/>
				</Container>
			</main>

			{/* Footer */}
			<Footer />

			{/* End footer */}
		</>
	);
}
