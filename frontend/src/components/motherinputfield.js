import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: 200
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 100
  },
  button: {
    margin: theme.spacing.unit
  }
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
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

class OutlinedTextFields extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    latitude: "",
    longitude: "",
    textmask: " "
  };

  addMother = event => {
    event.preventDefault();
    const info = {
      name: `${this.state.firstname} ${this.state.lastname}`,
      latitude: +this.state.latitude,
      longitude: +this.state.longitude,
      phone: this.state.textmask,
      village: "hi"
    };
    console.table("info", info);
    //axios.defaults.withCredentials = true
    const header = {
      headers: {
        authorization: `${localStorage.getItem("token")}`
      }
    };
    console.log(`Token ${localStorage.getItem("token")}`);
    axios
      .post(`https://saferides.herokuapp.com/api/mothers/`, info, header)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        alert(error);
      });

    // clear state after posted to db
    this.setState({
      firstname: "",
      lastname: "",
      latitude: "",
      longitude: "",
      textmask: " "
    });
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

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
            onChange={this.handleChange("name")}
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
            onChange={this.handleChange("name")}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div class="lat">
          <TextField
            id="outlined-name"
            label="Latitude"
            name="latitude"
            className={classes.textField}
            value={this.state.latitude}
            onChange={this.handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <div class="long">
            <TextField
              id="outlined-name"
              label="Longitude"
              name="longitude"
              className={classes.textField}
              value={this.state.longitude}
              onChange={this.handleChange("name")}
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
            value={this.state.textmask}
            name="textmask"
            onChange={this.handleChange("name")}
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
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
