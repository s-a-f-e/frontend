import React, {Component} from 'react';
import MapGL from 'react-map-gl';

import { Container, Button, Text, Form } from '../../simple-library'

const TOKEN = 'pk.eyJ1IjoiZG91Z2xhc2pvcmRhbjIiLCJhIjoiY2p2MWdzOGxoMXR0aTRkc2sxa2ZuOWlrcyJ9.YNCXCmHFh_w4ppr-6DoA0g'

export default class Map extends Component {
//State

  state = {
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 15,
      bearing: 0,
      pitch: 0,
      width: '100vw',
      height: '80vh',
    },
    searching: false,
    found: false
  }

//Styles
  container = {
    height: '80%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0
  }

  flex = {
    display: 'flex'
  }

  mapGL = {
    zIndex: -1000,
    position: 'absolute',
    top: 0,
    left: 0
  }

//Functions
  componentDidMount() {
    this.getLocation()
  }

  found = () => {
    this.setState({ searching: false })
    setTimeout(() => this.setState({ found: true }), 300)
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  searching = () => {
    this.setState({ searching: true })
    setTimeout(this.found, 5000)
  }

  showPosition = position => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    })
  }

  render() {
    return (
      <Container
        map
        style = { this.flex }
        { ...this.props }
      >
        <MapGL
          style = { this.mapGL }
          { ...this.state.viewport }
          mapStyle="mapbox://styles/douglasjordan2/cjvbg2plu5nbg1fr77be20ssp"
          mapboxApiAccessToken={ TOKEN }
          onViewportChange={ (viewport) => this.setState({ viewport }) }
        />
        <div style = { this.container }>
          { this.state.searching ?
            <Searching />
          : this.state.found ?
            <RideFound />
          : null
          }
        </div>
        <MapInput
          searching = { this.searching }
        />
      </Container>
    );
  }
}

class Searching extends Component {
//State
  state = {
    interval: '',
    dots: ''
  }

//Functions
  componentDidMount() {
    this.setState({ interval: setInterval(this.incrementDot, 300) })
  }

  incrementDot = () => {
    if(this.state.dots === '') {
      this.setState({ dots: '.' })
    } else if(this.state.dots === '.') {
      this.setState({ dots: '..' })
    } else if(this.state.dots === '..') {
      this.setState({ dots: '...' })
    } else if(this.state.dots === '...') {
      this.setState({ dots: '' })
    }
  }

//Styles
  searching = {
    width: '500px',
    height: '120px',
    borderRadius: '10px',
    backgroundColor: '#4f6d7a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Source Sans Pro'
  }

  render() {
    return (
      <div style = { this.searching }>
        <div style = {{
          color: '#fff',
          fontSize: '33px',
          width: '420px',
          textAlign: 'left'
        }}>Searching for Nearby Drivers{this.state.dots}</div>
      </div>
    );
  }
};

export const RideFound = props => {

//Styles
  const requestContainer = () => ({
    height: '175px',
    width: '300px',
    backgroundColor: '#4f6d7a',
    color: '#fff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  })

  return (
    <div style={requestContainer()}>
      {/* //placeholder - estimated pickup time */}
      <p>Estimated Pickup Time: 6 minutes</p>
      {/* placeholder - estimated cost  */}
      <p>Estimated Cost: $4.72</p>
      <Button>Request Ride</Button>
    </div>
  );
};

class MapInput extends Component {
//State
  state = {
    destination: '',
    requested: false
  }

//Styles
  button = {
    height: '40px'
  }

  btnContainer = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  form = {
    width: '40vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  howLongContainer = {
    backgroundColor: '#4f6d7a',
    borderRadius: '10px',
    width: '400px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }

  howLongHeader = {
    color: '#fff',
    textAlign: 'center'
  }

  mapInput = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#f5f5f5',
    height: '25vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1000,
    borderTop: '2px solid #4f6d7a'
  }

//Functions
  handleInputChange = event => {
    this.setState({ [event.target.name] : event.target.value })
  }

  requestRide = event => {
    event.preventDefault();
    this.setState({ requested: true });
    this.props.searching()
  }

  render() {
    return (
      <div style={this.mapInput}>
      { this.state.requested ?
        <div style={this.howLongContainer}>
          <h4 style={this.howLongHeader}>How long would you like to wait?</h4>
          <div style={ this.btnContainer }>
            <Button>2 minutes</Button>
            <br />
            <Button>5 minutes</Button>
            <br />
            <Button>10 minutes</Button>
          </div>
          <br />
      </div>
      :
        <Form
          onSubmit = { event => this.requestRide(event) }
          style={ this.form }
        >
          <Text
            placeholder="Destination Address"
            name="destination"
            value = { this.state.destination }
            onChange={ event => this.handleInputChange(event) }
            style = { this.mapInput }
          />
          <Button
            submit
            style = { this.button }
          >
            Search Nearby
          </Button>
        </Form>
      }
      </div>
    );
  }
};