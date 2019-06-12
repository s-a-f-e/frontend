import React from 'react';
import Inputs from './components/motherinputfield';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import MotherTable from './components/motherTable'
import DriverTable from './components/driverTable'

class Data extends React.Component {
  render() {
    return (
      <div>
        <div class="switchpage">
          <Link
           style={{ textDecoration: 'none'}}
            to="/mothers">
          <Button>Click Here to Add Mothers</Button>
          </Link>
          <Link 
          style={{ textDecoration: 'none'}}
          to='/'>
          <Button>Click Here to Add Drivers</Button>
        </Link>
        </div>
          <h1 class="welcome">List of Mothers and Drivers</h1>
          <MotherTable/>
          <DriverTable/>
      </div>
    );
  }
}
 
export default Data;