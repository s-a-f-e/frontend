import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import LandingPage from "../landingPage";
import { withRouter } from "react-router-dom";
import axios from "axios";


const styles = theme => ({
  paper: {
    margin: 'auto',
    marginTop: 50,
    height: '42vh',
    width: '90%',
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 460,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  textField: {
    width: '100%',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class LoginModal extends React.Component {
  state = {
    loggedIn: false,
    username:'',
    password:'',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = "https://saferides.herokuapp.com/api-token-auth/"
    const credentials = {"username": this.state.username, "password": this.state.password};
    axios
      .post(endpoint, credentials)
      .then(res => {
        console.log("DATA", res.data);
        localStorage.setItem('token', 'token ' + res.data.token);
        this.props.history.push('/drivers');
      })
      .catch(err => {
        console.log("ERROR", err);
        alert("Invalid Username/Password");
      })
  }
      


  render() {
    const { classes, open, onClose } = this.props;
    const {
    username,
    password
    } = this.state;
    return (
      <Modal open={open} onClose={onClose}>
        <Paper className={classes.paper}>
          <Grid container justify="flex-end">
            <Grid item xs={1}>
              <Tooltip title="Close">
                <IconButton onClick={onClose}>
                  <Close />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="center" component="h6">
                Please Enter Your Credentials
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={24}>
          <Grid item xs={12}>
              <TextField
                required
                id="username"
                label="Username"
                className={classes.textField}
                value={this.state.username}
                margin="normal"
                InputProps={{ style: { paddingLeft: '1rem' } }}
                InputLabelProps={{ style: { paddingLeft: '1rem' } }}
                onChange={this.handleChange('username')}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                required
                id="password"
                label="Password"
                className={classes.textField}
                value={this.state.password}
                margin="normal"
                InputProps={{ style: { paddingLeft: '1rem' } }}
                InputLabelProps={{ style: { paddingLeft: '1rem' } }}
                onChange={this.handleChange('password')}
                type="password"
              />
            </Grid>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '25px',
                marginBottom: '25px',
              }}
            >
              <Grid item xs={12}>
              
                <Button
                  color="primary"
                  onClick={this.handleSubmit}
                  variant="text"
                >
                  Login
                </Button>
                
              </Grid>
            </div>
          </Grid>
        </Paper>
      </Modal>
    );
  }
}

export default withRouter(withStyles(styles)(LoginModal));