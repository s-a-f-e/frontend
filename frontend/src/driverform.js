import React from "react";
import Inputs from "./components/driverinputfield";
// import Button from "./components/buttons/button";
import SwitchPageButton from "./components/buttons/MothersView";
import { Link } from "react-router-dom";

class DriverForm extends React.Component {
  render() {
    return (
      <div>
        <div class="switchpage">
          <Link to="/mothers">
            <SwitchPageButton />
            
          </Link>
        </div>
        <h1 class="welcome">Welcome to Safe Mothers, Safe Babies</h1>
        <br />
        <p class="welcome2">
          Let's get you all set up so you can verify your information and begin
          setting up your profile!
        </p>
        <br /> <br />
        <Inputs />
        <br />
        <p class="privacy">
          By clicking submit you are agreeing to the{" "}
          <a href="#" class="click">
            Terms and Conditions
          </a>
          ,{" "}
          <a href="#" class="click">
            Privacy Policy
          </a>
          , and{" "}
          <a href="#" class="click">
            Fees
          </a>
          .
        </p>
        {/* <div class="button">
        <Button />
        </div> */}
        <p />
      </div>
    );
  }
}

export default DriverForm;
