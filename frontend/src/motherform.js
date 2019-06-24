import React from 'react';
import Inputs from './components/motherinputfield';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

class MotherForm extends React.Component {
  render() {
    return (
      <div>
        <div className='switchpage'> 
        <Link 
        style={{ textDecoration: 'none'}}
        to='/drivers'>
          <Button>Click Here To Add Drivers</Button>
        </Link>
        <Link 
        style={{ textDecoration: 'none'}}
        to='/data'>
          <Button> View Existing Mother/Drivers</Button>
        </Link>
        </div>
          <h1 className="welcome">Welcome to Safe Mothers, Safe Babies</h1>
          <br />
          <p className="welcome2">Let's get you all set up so you can verify 
              your information and begin setting up your profile!</p>
              <br /> <br />
        <Inputs />
        <br />
        </div>
    );
  }
}
 
export default MotherForm;