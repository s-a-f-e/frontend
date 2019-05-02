import React from 'react';
import Inputs from './components/inputfield';
import Button from './components/buttons/button';

class Form extends React.Component {
  render() {
    return (
      <div>
          <h1 class="welcome">Welcome to Safe Mothers, Safe Babies</h1>
          <p class="welcome">Let's get you all set up so you can verify 
              your information and begin setting up your profile!</p>
        <Inputs />
        <br />
        <p class="privacy">I agree to the <a>Terms, Privacy Policy</a> and <a>Fees</a></p>
        <div class="privacy">
        <Button />
        </div>
        <p></p>
        </div>
    );
  }
}
 
export default Form;