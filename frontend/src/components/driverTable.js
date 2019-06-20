import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Loading from './Loading';
import EmptyPage from './EmptyPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const rows = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Phone',
  },
  {
    id: 'latitude',
    numeric: false,
    disablePadding: false,
    label: 'Latitude',
  },
  {
    id: 'longitude',
    numeric: false,
    disablePadding: false,
    label: 'Longitude',
  },
];

class EnhancedTableHead extends React.Component {
  render() {

    return (
      <TableHead>
        <TableRow>

          {rows.map(
            row => (
              <TableCell key={row.id} align={'center'} padding={'none'}>
                {row.label}
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar>
      <div className={classes.title}>
          <Typography variant="h6" id="tableTitle">
            Drivers
          </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 250,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  loader: {
    height: '196px',
    alignItems: 'center',
  },
  emptyPage: {
    height: '196px',
    padding: theme.spacing(3),
  },
});

class DriverTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 4,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  render() {
    const { classes, info, loading } = this.props;
    const { rowsPerPage, page } = this.state;

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, info.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              rowCount={info.length}
            />
            <TableBody>
              {loading
                ? null
                : info
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(info => {
                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                          key={info.drivers}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            padding="none"
                          >
                            {info.name}
                          </TableCell>
                          <TableCell padding="dense" align="center">
                            {info.phone}
                          </TableCell>
                          <TableCell padding="dense" align="center">
                            {info.latitude}
                          </TableCell>
                          <TableCell padding="dense" align="center">
                            {info.longitude}
                          </TableCell>
                        </TableRow>
                      );
                    })}
              {emptyRows > 0 && !loading && info.length > 0 ? (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
          {loading ? (
            <Loading className={classes.loader} size={40} />
          ) : info.length === 0 ? (
            <EmptyPage
              className={classes.emptyPage}
              variant="h4"
              message="No Drivers"
            />
          ) : null}
        </div>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={info.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
        />
      </Paper>
    );
  }
}

DriverTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DriverTable);