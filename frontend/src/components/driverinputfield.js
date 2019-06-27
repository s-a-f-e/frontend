import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CustSnackbar from './snackbar/CustSnackbar';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 100,
  },
  button: {
    margin: theme.spacing(1),
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
      /* prettier-ignore */
      mask={[
        '+',
        2,
        5,
        6,
        ' ',
        '-',
        ' ',
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
    textmask1: ' ',
    textmask2: ' ',
    textmask3: ' ',
    openSnackbar: false,
    snackbarMessage: '',
    snackbarVariant: '',
  };



  handleChange = name => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // asynchronously post the drivers
  postData = async (phones, request, requestOptions) => {
    for (let phone of phones) {
      request.phone = phone;

      await axios
        .post(
          'https://saferides.herokuapp.com/api/drivers/',
          request,
          requestOptions,
        )
        .then(res => {
          console.log('response data: ', res.data);
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'Driver Info Submitted!',
            snackbarVariant: 'success',
            description: '',
          });
        })
        .catch(err => {
          console.error('axios err:', err);
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'Error submitting. Please try again.',
            snackbarVariant: 'error',
            description: '',
          });
        });
    }
  };

  handleSubmit = event => {
    let phones = [];
    const token = localStorage.getItem('token');

    const requestOptions = {
      headers: { Authorization: token },
    };

    const request = {
      name: this.state.firstname + ' ' + this.state.lastname,
      phone: '',
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      available: true,
    };

    // build the phones array with the given numbers
    if (this.state.textmask1.length > 1) {
      phones.push(this.state.textmask1);
    }

    if (this.state.textmask2.length > 1) {
      phones.push(this.state.textmask2);
    }

    if (this.state.textmask3.length > 1) {
      phones.push(this.state.textmask3);
    }

    // if at least one ph num is entered
    if (this.state.textmask1.length > 1) {
      // call the async post function
      this.postData(phones, request, requestOptions);

      // clear state after posted to db
      this.setState({
        firstname: '',
        lastname: '',
        latitude: '',
        longitude: '',
        textmask1: ' ',
        textmask2: ' ',
        textmask3: ' ',
      });
    } else {
      this.setState({
        openSnackbar: true,
        snackbarMessage:
          'Must enter at least one phone number. Please try again.',
        snackbarVariant: 'error',
        description: '',
      });
    }
  };

  snackbarClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  render() {
    const { classes } = this.props;


    return (
      <div class = 'driver-content'>
      <Grid container className={classes.container} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={0}>
            <form className={classes.container} noValidate autoComplete="off">
              <Typography variant="h6" align="center" component="h6">
                Driver Info
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
              <div className="lat">
                <TextField
                  id="outlined-name"
                  label="Latitude"
                  name="latitude"
                  className={classes.textField}
                  value={this.state.latitude}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  variant="outlined"
                />
                <div className="long">
                  <TextField
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
              </div>
              <FormControl className={classes.formControl} class="phone1">
                <InputLabel htmlFor="formatted-text-mask-input">
                  primary phone number
                </InputLabel>
                <Input
                  value={this.state.textmask1}
                  name="textmask1"
                  onChange={this.handleChange('name')}
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>

              <FormControl className={classes.formControl} class="phone2">
                <InputLabel htmlFor="formatted-text-mask-input">
                  secondary phone number
                </InputLabel>
                <Input
                  value={this.state.textmask2}
                  name="textmask2"
                  onChange={this.handleChange('name')}
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>

              <FormControl className={classes.formControl} class="phone3">
                <InputLabel htmlFor="formatted-text-mask-input">
                  {' '}
                  tertiary phone number
                </InputLabel>
                <Input
                  value={this.state.textmask3}
                  name="textmask3"
                  onChange={this.handleChange('name')}
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>
            </form>
            <Grid item xs={12} md={2}>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleSubmit}
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
