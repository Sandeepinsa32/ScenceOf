import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styles from '../../assests/css/tableStyle';
import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TableContainer,
	Paper,
} from '@material-ui/core';

const useStyles = makeStyles(styles);

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.info.main,
		color: theme.palette.common.black,
		textTransform: 'capitalize',

		fontWeight: 600,
	},
	body: {
		fontSize: 20,
		fontWeight: 400,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.disabled,
		},
	},
}))(TableRow);

export default function CustomTable(props) {
	const classes = useStyles();
	const { tableHead, tableData, tableHeaderColor } = props;

	return (
		<div className={classes.tableResponsive}>
			<TableContainer component={Paper}>
				<Table className={classes.table}>
					{tableHead !== undefined ? (
						<TableHead
							className={
								classes[tableHeaderColor + 'TableHeader']
							}>
							<TableRow className={classes.tableHeadRow}>
								{tableHead.map((prop, key) => {
									return (
										<StyledTableCell
											className={
												classes.tableCell +
												' ' +
												classes.tableHeadCell
											}
											key={key}>
											{prop}
										</StyledTableCell>
									);
								})}
							</TableRow>
						</TableHead>
					) : null}
					<TableBody>
						{tableData.map((prop, key) => {
							return (
								<StyledTableRow
									key={key}
									className={classes.tableBodyRow}>
									{prop.map((prop, key) => {
										return (
											<StyledTableCell
												className={classes.tableCell}
												key={key}>
												{prop}
											</StyledTableCell>
										);
									})}
								</StyledTableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

CustomTable.defaultProps = {
	tableHeaderColor: 'gray',
};

CustomTable.propTypes = {
	tableHeaderColor: PropTypes.oneOf([
		'warning',
		'primary',
		'danger',
		'success',
		'info',
		'rose',
		'gray',
	]),
	tableHead: PropTypes.arrayOf(PropTypes.string),
	tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
