import React from 'react';
import Inputs from './components/inputfield';

class Form extends React.Component {
  render() {
    return (
      <div>
          <h1 class="welcome">Welcome to Safe Mothers, Safe Babies</h1>
          <p class="welcome">Let's get you all set up so you can verify 
              your information and begin setting up your profile!</p>
        <Inputs />
        </div>
    );
  }
}
 
export default Form;