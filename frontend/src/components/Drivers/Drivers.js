import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from '../../simple-library';
import DriverCard from './DriverCard';
import { getDrivers } from '../../actions';


class Drivers extends Component {
//Functions
  componentDidMount() {
    this.props.getDrivers();
  }

  goTo = id => {
    this.props.history.push(`/drivers/${id}`)
  }

//Styles
  container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px'
  }

  drivers = mobile => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: this.props.mobile ? null : 'wrap',
    paddingTop: '40px',
    height: '70vh',
    width: '100%',
    alignItems: 'center'
  })

  render() {
    return (
      <Container style = {this.container}>
        <h2>Browse All Drivers:</h2>
        <div style = { this.drivers(this.props.mobile) }>
        { this.props.drivers.map(driver => (
          <DriverCard
            driver = { driver }
            goTo = { this.goTo }
          />
        )) }
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { drivers, fetchingDrivers, error } = state.driversReducer
  return {
    drivers,
    fetchingDrivers,
    error
  }
}

export default connect(mapStateToProps, { getDrivers })(Drivers)