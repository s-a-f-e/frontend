import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LoginModal from './components/loginModal';

 class LandingPage extends Component {
    state = {
        loginModalOpen: false
      };

      toggleloginModal = () => {
        this.setState({ loginModalOpen: !this.state.loginModalOpen });
      };

    render() {

        return (
    <div className = 'landing'>

        <div class = 'land-welcome'>
          <div class = 'land-header'>
          <Typography color="inherit" variant="h3">Safe Mothers, Safe Babies</Typography>
          </div>
          <div class = 'land-buttons'>
            <Link
             style={{ textDecoration: 'none'}}
              to="/mothers">
                <Button color="primary" variant="contained">Learn More</Button>
            </Link>
          <Button color="primary"
           variant="contained"
           onClick={this.toggleloginModal}
          >Login
          </Button>
            </div>
            <LoginModal
          open={this.state.loginModalOpen}
          onClose={this.toggleloginModal}
        />
          </div>
      </div>

        )
    }
}
export default LandingPage;