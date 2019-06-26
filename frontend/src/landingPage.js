import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LoginModal from './components/loginModal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  button: {
    margin: theme.spacing(1),
    
  },
  login:{
    color:'white'
  }
});

 class LandingPage extends Component {
    state = {
        loginModalOpen: false
      };

      toggleloginModal = () => {
        this.setState({ loginModalOpen: !this.state.loginModalOpen });
      };

    render() {
      const { classes } = this.props;
        return (
    <div className = 'landing'>
      <div class = 'gradient'>
        <div class = 'land-welcome'>
          <div class = 'land-header'>
          <div class = 'land-title'>Safe Mothers, Safe Babies</div>
          </div>
          <div class = 'land-buttons'>
            <div>
            <Link
             style={{ textDecoration: 'none'}}
              to="/learnmore">
                <Button color="primary" variant="contained">Learn More</Button>
            </Link>
            </div>
            <div > 
          <Button className={classes.login}
           onClick={this.toggleloginModal}
          >Login
          </Button>
          </div>
            </div>
            <LoginModal
          open={this.state.loginModalOpen}
          onClose={this.toggleloginModal}
        />
          </div>
          </div>
      </div>
        )
    }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);