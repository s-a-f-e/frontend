import React from "react";
import Inputs from "./components/driverinputfield";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Image from './image'

class DriverForm extends React.Component {
  render() {
    return (
      <> 
      <div class = 'row'>
      <div className="column-one one">
      <Image />
    </div>
      <div>
        <div class="switchpage">
          <Link 
          style={{ textDecoration: 'none'}}
          to="/mothers">
          <Button>Click Here to Add Mothers</Button>
          </Link>
          <Link 
        style={{ textDecoration: 'none'}}
        to='/clinic'>
          <Button>Click Here To Add Mid-Wife</Button>
        </Link>
          <Link 
          style={{ textDecoration: 'none'}}
          to='/data'>
          <Button>View Existing Mother/Drivers</Button>
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
        <p />
      </div>
      </div>
      </>
    );
  }
}

export default DriverForm;
