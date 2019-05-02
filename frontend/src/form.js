import React from 'react';
import Inputs from './components/inputfield';
import Button from './components/buttons/button';

class Form extends React.Component {
  render() {
    return (
      <div>
          <h1 class="welcome">Welcome to Safe Mothers, Safe Babies</h1>
          <br />
          <p class="welcome">Let's get you all set up so you can verify 
              your information and begin setting up your profile!</p>
              <br /> <br />
        <Inputs />
        <br />
        <p class="privacy">By clicking submit you are agreeing to the <a href="#" class="click">Terms and Conditions</a>, <a href="#" class="click">Privacy Policy</a>, and <a href="#" class="click">Fees</a>.</p>
        <div class="button">
        <Button />
        </div>
        <p></p>
        </div>
    );
  }
}
 
export default Form;