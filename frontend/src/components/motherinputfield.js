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

class OutlinedTextFields extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    latitude: '',
    longitude: '',
    latitudeAssign: '',
    longitudeAssign: '',
    textmask: ' ',
    openSnackbar: false,
    snackbarMessage: '',
    snackbarVariant: '',
    village: null,
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
        for (let villa of response.data) {
          villages.push({ label: villa.name, latitude: villa.latitude, longitude: villa.longitude });
        }
        const sortedVillages = villages.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));
        this.setState({
          villageDB: sortedVillages,
        });
      })
      .catch(err => {
        console.error('axios err:', err);
      });
  }

  addMother = event => {
    event.preventDefault();
    let lat, lon;
    if (!this.state.latitude || this.state.latitude === undefined) {
      lat = this.state.latitudeAssign
    } else lat = this.state.latitude
    if (!this.state.longitude || this.state.longitude === undefined) {
      lon = this.state.longitudeAssign
    } else lon = this.state.longitude
    let villageName
    if(this.state.village){
      villageName = this.state.village.value
    } else {
      villageName = "coordinates entered"
    }
    const info = {
      name: `${this.state.firstname} ${this.state.lastname}`,
      latitude: lat,
      longitude: lon,
      phone: this.state.textmask,
      village: villageName
    };

    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };

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

  handledChanged = name => value => {
    let vill = this.state.villageDB;
    let lat,lon;
    
    for (let i = 0; i < vill.length; i++) {
      if (vill[i].label === value.label) {
        lat = vill[i].latitude;
        lon = vill[i].longitude;
        
      }
    }
    this.setState({
      [name]: value,
      latitudeAssign: lat,
      longitudeAssign: lon
    });
  };

  snackbarClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  render() {
    const { classes } = this.props;
    const disabled = !!this.state.checkedA;
    const enabled = !this.state.checkedA;
    const options = this.state.villageDB.map(suggestion => ({
      value: suggestion.label,
      label: suggestion.label,
    }));

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Typography className={classes.mother} variant="h6" component="h6">
          Mother Info
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
        <FormGroup class="switch">
          <Typography class='title'>Pick Village from Menu</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handlerChanger('checkedA')}
                value="checkedA"
                color="primary"
              />
            }
          />
           <Typography class='title'>Enter Coordinates Manually</Typography>
        </FormGroup>
        <div className="lat">
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
          <div className="long">
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
          <div className="village">
            <NoSsr>
              <Select
                isDisabled={disabled}
                className={classes.select}
                classes={classes}
                options={options}
                value={this.state.village}
                onChange={this.handledChanged('village')}
                placeholder="Village Name"
                isClearable
              />
            </NoSsr>
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
        <Grid item xs={12} md={2}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
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
       </Grid>
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
