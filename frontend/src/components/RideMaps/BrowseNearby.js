import React from 'react';
import { Container, Form, Text, Button } from '../../simple-library';
import Map from './Map';
import { NearbyDrivers } from './MapComponents'

export class BrowseNearby extends React.Component {

//Styles
  location = {
    display: 'flex',
    width: '50%',
    margin: '10px 0',
    justifyContent: 'space-around'
  }

  map = {
    width: '100vw',
    height: '50vh'
  }

  render() {
    return (
      <Container
        blue>
        <Map
        style = { this.map }/>
        <NearbyDrivers />
      </Container>
    )
  }
}