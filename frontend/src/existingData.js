import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import MotherTable from './components/motherTable'
import DriverTable from './components/driverTable'
import axios from 'axios';

class Data extends React.Component {

  state = {
    mothers: [],
    drivers: [],
  };

  componentDidMount() {
    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };

    const mothers = [];
    const drivers = [];

    axios
      .get(`https://saferides.herokuapp.com/api/mothers/`, header)
      .then(response => {
        for (let mom of response.data) {
          mothers.push({ name: mom.name, phone: mom.phone, village: mom.village });
        }
        this.setState({
           mothers
        });
        console.log('mothers: ', mothers);
      })
      .catch(err => {
        console.error('axios err:', err);
      });

      axios
      .get(`https://saferides.herokuapp.com/api/drivers/`, header)
      .then(response => {
        for (let driver of response.data) {
          drivers.push({ name: driver.name, latitude: driver.latitude, longitude: driver.longitude, phone: driver.phone, });
        }
        this.setState({
          drivers,
        });
        console.log('drivers: ', drivers);
      })
      .catch(err => {
        console.error('axios err:', err);
      });
  }

  render() {
    const {
      mothers,drivers
    } = this.state;
    console.log("momma", mothers);
    return (
      
      <div class='tables'>
        <div className="switchpage">
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
           <h1 className="welcome3">List of Mothers and Drivers</h1>
          <MotherTable
            data={mothers}
          /> 
          <DriverTable
            info={drivers}
          />
            
      </div>
    );
  }
}
 
export default Data;