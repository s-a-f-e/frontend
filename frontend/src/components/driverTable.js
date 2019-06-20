import React from 'react';
import classNames from 'classnames';
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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
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
    const { onSelectAllClick, numSelected, rowCount } = this.props;

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
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
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
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Drivers
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <></>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
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
    padding: theme.spacing.unit * 3,
  },
});

class DriverTable extends React.Component {
  state = {
    selected: [],
    page: 0,
    rowsPerPage: 4,
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: this.props.info.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, info, loading } = this.props;
    const { selected, rowsPerPage, page } = this.state;

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, info.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={this.handleSelectAllClick}
              rowCount={info.length}
            />
            <TableBody>
              {loading
                ? null
                : info
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(info => {
                      const isSelected = this.isSelected(info.name);
                      return (
                        <TableRow
                          hover
                          onClick={event =>
                            this.handleClick(event, info.name)
                          }
                          role="checkbox"
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={info.drivers}
                          selected={isSelected}
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