import React from 'react';
import Inputs from './components/motherinputfield';
import SwitchPageButton from './components/buttons/DriversView';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

class MotherForm extends React.Component {
  render() {
    return (
      <div>
        <div class='switchpage'> 
        <Link 
        style={{ textDecoration: 'none'}}
        to='/'>
          <Button>Click Here To Add Drivers</Button>
        </Link>
        <Link 
        style={{ textDecoration: 'none'}}
        to='/data'>
          <Button> View Existing Mother/Drivers</Button>
        </Link>
        </div>
          <h1 class="welcome">Welcome to Safe Mothers, Safe Babies</h1>
          <br />
          <p class="welcome2">Let's get you all set up so you can verify 
              your information and begin setting up your profile!</p>
              <br /> <br />
        <Inputs />
        <br />
        </div>
    );
  }
}
 
export default MotherForm;