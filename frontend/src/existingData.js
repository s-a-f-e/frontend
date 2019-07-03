import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import MotherTable from './components/motherTable'
import DriverTable from './components/driverTable'
import axios from 'axios';
import Image from './image'

class Data extends React.Component {

  state = {
    mothers: [],
    drivers: [],
    clinic: [],
  };

  componentDidMount() {
    const header = {
      headers: {
        authorization: `${localStorage.getItem('token')}`,
      },
    };

    const mothers = [];
    const drivers = [];
    const clinic = [];

    axios
      .get(`https://saferides.herokuapp.com/api/mothers/`, header)
      .then(response => {
        for (let mom of response.data) {
          mothers.push({ name: mom.name, phone: mom.phone, village: mom.village });
        }
        this.setState({
           mothers
        });
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
      })
      .catch(err => {
        console.error('axios err:', err);
      });

      // axios
      // .get(`https://saferides.herokuapp.com/api/drivers/`, header)
      // .then(response => {
      //   for (let employee of response.data) {
      //     drivers.push({ name: employee.name, latitude: employee.latitude, longitude: employee.longitude, phone: employee.phone, });
      //   }
      //   this.setState({
      //     drivers,
      //   });
      // })
      // .catch(err => {
      //   console.error('axios err:', err);
      // });
  }

  render() {
    const {
      mothers,drivers,clinic
    } = this.state;
    return (
      <>
      <div class = 'row'>
      <div className="column-one one">
      <Image />
    </div>
      <div class='tables'>
        <div className="switchpage">
          <Link
           style={{ textDecoration: 'none'}}
            to="/mothers">
          <Button>Click Here to Add Mothers</Button>
          </Link>
          <Link 
        style={{ textDecoration: 'none'}}
        to='/clinic'>
          <Button>Click Here To Clinic Employee</Button>
        </Link>
          <Link 
          style={{ textDecoration: 'none'}}
          to='/drivers'>
          <Button>Click Here to Add Drivers</Button>
        </Link>
        </div>
           <h1 className="welcome3">List of Mothers, Drivers, and Employees</h1>
          <MotherTable
            data={mothers}
          /> 
          <DriverTable
            info={drivers}
          />
          {/* <ClinicTable
            employee={clinic}
          /> */}

          
      </div>
      </div>
      </>
    );
  }
}
 
export default Data;