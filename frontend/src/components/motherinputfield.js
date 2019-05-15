import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CustSnackbar from './snackbar/CustSnackbar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 100,
  },
  button: {
    margin: theme.spacing.unit,
  },
});
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        ' ',
        '-',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class OutlinedTextFields extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    latitude: '',
    longitude: '',
    textmask: ' ',
    openSnackbar: false,
    snackbarMessage: '',
    snackbarVariant: '',
    village: '',
    checkedA: true,
    villageDB: [],
  };

  componentDidMount() {
    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };

    const villages = [];

    axios
      .get(`https://saferides.herokuapp.com/api/villages/`, header)
      .then(response => {
        // console.log('CDM get villages', response.data);
        // console.log('response.data[0]: ', response.data[0]);
        for (let villa of response.data) {
          // console.log('for entry of response.data', villa.name);
          villages.push(villa.name.toLowerCase());
        }
        this.setState({
          villageDB: villages,
        });
        // console.log('villages: ', villages);
      })
      .catch(err => {
        console.error('axios err:', err);
      });
  }

  addMother = event => {
    event.preventDefault();
    const info = {
      name: `${this.state.firstname} ${this.state.lastname}`,
      latitude: +this.state.latitude,
      longitude: +this.state.longitude,
      phone: this.state.textmask,
      village: this.state.village || 'coordinates entered',
    };
    console.table('info', info);
    //axios.defaults.withCredentials = true
    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };
    console.log(`Token ${localStorage.getItem('token')}`);
    // console.log('this.state.textmask', this.state.textmask.length);
    if (this.state.textmask.length > 1) {
      axios
        .post(`https://saferides.herokuapp.com/api/mothers/`, info, header)
        .then(response => {
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'Mother Info Submitted!',
            snackbarVariant: 'success',
            description: '',
          });
          // console.log(response.data);
        })
        .catch(error => {
          alert(error);
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'Error submitting. Please try again.',
            snackbarVariant: 'error',
            description: '',
          });
        });

      // clear state after posted to db
      this.setState({
        firstname: '',
        lastname: '',
        latitude: '',
        longitude: '',
        textmask: ' ',
        village: '',
      });
    } else {
      this.setState({
        openSnackbar: true,
        snackbarMessage: 'Must enter phone number. Please try again.',
        snackbarVariant: 'error',
        description: '',
      });
    }
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlerChanger = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  snackbarClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;
    const disabled = !!this.state.checkedA;
    const enabled = !this.state.checkedA;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Typography variant="h6" align="center" component="h6">
          Mother Info
        </Typography>
        <div class="thename">
          <TextField
            id="outlined-name"
            label="First Name"
            name="firstname"
            className={classes.textField}
            value={this.state.firstname}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div class="thenameis">
          <TextField
            id="outlined-name"
            label=" Last Name"
            name="lastname"
            className={classes.textField}
            value={this.state.lastname}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </div>
        <FormGroup class="switch">
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handlerChanger('checkedA')}
                value="checkedA"
                color="primary"
              />
            }
            label="Coordinates / Village"
          />
        </FormGroup>
        <div class="lat">
          <TextField
            disabled={enabled}
            id="outlined-name"
            label="Latitude"
            name="latitude"
            className={classes.textField}
            value={this.state.latitude}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <div class="long">
            <TextField
              disabled={enabled}
              id="outlined-name"
              label="Longitude"
              name="longitude"
              className={classes.textField}
              value={this.state.longitude}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div class="village">
            <TextField
              disabled={disabled}
              id="outlined-name"
              label=" Village Name"
              name="village"
              className={classes.textField}
              value={this.state.village}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          </div>
        </div>

        <FormControl className={classes.formControl} class="phone4">
          <InputLabel htmlFor="formatted-text-mask-input">
            primary phone number
          </InputLabel>
          <Input
            value={this.state.textmask}
            name="textmask"
            onChange={this.handleChange('name')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
          onClick={this.addMother}
        >
          Submit
        </Button>
        <CustSnackbar
          open={this.state.openSnackbar}
          variant={this.state.snackbarVariant}
          message={this.state.snackbarMessage}
          onClose={this.snackbarClose}
          onClick={this.snackbarClose}
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
