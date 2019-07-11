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
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';

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
  select: {
    width: 185,
    left: 7,
    marginTop: 20,
  },
  mother: {
    marginLeft:55,
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
  birth: {
    bottom: 27,
    position: 'relative',
    marginLeft: 58
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

class ClinicInput extends React.Component {
  
  state = {
    firstname: '',
    lastname: '',
    latitude: '',
    longitude: '',
    textmask: ' ',
    openSnackbar: false,
    snackbarMessage: '',
    snackbarVariant: '',
    clinic: null,
    clinicDB: [],
  };

  componentDidMount() {
    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };

    const clinics = [];

    axios
      .get('http://saferides.herokuapp.com/api/healthcenters', header)
      .then(response => {
        for (let clinic of response.data) {
          clinics.push({ label: clinic.name, latitude: clinic.latitude, longitude: clinic.longitude });
        }
        const sortedClinics = clinics.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));
        this.setState({
          clinicDB: sortedClinics,
        });
      })
      .catch(err => {
        console.error('axios err:', err);
      });
  }

  addClinic = event => {
    event.preventDefault();
    const removed = this.state.textmask.replace(/-/g, "")
    const filteredPhone = removed.replace(/\s/g, '')
    const info = {
      name: `${this.state.firstname} ${this.state.lastname}`,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      phone: filteredPhone,
      healthcenter: this.state.clinic.value
    };
console.log(info,"info")
    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };

    if (this.state.textmask.length > 1) {
      axios
        .post(`https://saferides.herokuapp.com/api/midwives/`, info, header)
        .then(response => {
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'Mother Info Submitted!',
            snackbarVariant: 'success',
            description: '',
          });
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
        clinic: '',
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
    console.log(name,"log")
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlerChanger = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handledChanged = name => value => {
    let clinic = this.state.clinicDB;
    let lat,lon;
    
    for (let i = 0; i < clinic.length; i++) {
      if (clinic[i].label === value.label) {
        lat = clinic[i].latitude;
        lon = clinic[i].longitude;
        
      }
    }
    this.setState({
      [name]: value,
      latitude: lat,
      longitude: lon
    });
  };


  snackbarClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  render() {
    const { classes } = this.props;
    const options = this.state.clinicDB.map(suggestion => ({
      value: suggestion.label,
      label: suggestion.label,
    }));
  
    return (
      <div class = 'mother-content'>
      <form className={classes.container} noValidate autoComplete="off">
        <Typography className={classes.mother} variant="h6" component="h6">
          Mid-Wife Info
        </Typography>
        <div className="thename">
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
        <div className="thenameis">
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
          <div className="clinic">
            <NoSsr>
              <Select
                
                className={classes.select}
                classes={classes}
                options={options}
                value={this.state.clinic}
                onChange={this.handledChanged('clinic')}
                placeholder="Clinic"
                isClearable
              />
            </NoSsr>
          </div>
        </form>
        <FormControl className={classes.formControl} class="phone5">
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
        <Grid item xs={12} md={2}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.addClinic}
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

      </div>
    );
  }
}

ClinicInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClinicInput);