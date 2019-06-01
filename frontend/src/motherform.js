import React from 'react';
import Inputs from './components/motherinputfield';
import Button from './components/buttons/button';
import SwitchPageButton from './components/buttons/DriversView';
import {Link} from 'react-router-dom';

class MotherForm extends React.Component {
  render() {
    return (
      <div>
        <div class='switchpage'>
        <Link to='/'>
          <SwitchPageButton />
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