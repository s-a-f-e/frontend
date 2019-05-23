import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Public Routes
import About from './components/About/About'
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import SignUpForm from './components/Signup/SignUpForm';

//Private Routes
import AddReview from './components/Reviews/AddReview'
import DriverPrevious from './components/PreviousTrips/DriverPrevious'
import DriverProfile from './components/Drivers/DriverProfile';
import Drivers from './components/Drivers/Drivers';
import GetUser from './components/UserPages/GetUser';
import Map from './components/RideMaps/Map';
import MCPrevious from './components/PreviousTrips/MCPrevious'
import PrivateRoute from './components/Login/PrivateRoute';
import Timer from './components/RideMaps/Timer';

class App extends Component {
  state = {
    mobile: false,
    acctPath: '',
    type: null
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.resize());
    this.resize();
  }

  resize() {
    let current = (window.innerWidth <= 600);
    if(current !== this.state.current) {
      this.setState({mobile: current});
    }
  }

  // styles
  container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  }

  goToProfile = profile => {
    this.props.history.push(`/${profile == ''}`)
  }

  setPath = (type, id) => {
    this.setState({ acctPath: `${type}/${id}` })
  }

  render() {
    return (
      <Router>
        //Public Routes
        <Route path='/about' exact render = { props => (
          <About
            {...props}
            mobile={this.state.mobile} />
        )} />
        <Route path="/" exact render = { props => (
          <Homepage
            { ...props }
            mobile = { this.state.mobile }
          />
        ) } />
        <Route path="/login" exact render = { props => (
          <Login
            {...props}
            mobile = { this.state.mobile }
            getUser = { this.getUser }
          />
        )
        }/>
        <Route path="/signup" exact render = { props => (
          <SignUp
            { ...props }
            mobile = { this.state.mobile } />
        )} />
        <Route path="/signup/:form" exact render = { props => (
          <SignUpForm
            { ...props }
            mobile = {this.state.mobile}
          />
        )} />

        //Private Routes
        <Route path='/add-review' exact render = { props => (
          <AddReview
            {...props}
            mobile={this.state.mobile} />
        )} />
        <Route path='/driver/:id/previous' exact render = { props => (
            <DriverPrevious
              {...props}
              mobile={this.state.mobile} />
        )} />
        <Route path="/drivers/:id" exact component = { props => (
          <DriverProfile
            { ...props }
            mobile = { this.state.mobile }
          />
        )} />
        <PrivateRoute path="/drivers" exact component = { props => (
          <Drivers
            { ...props }
            mobile = { this.state.mobile }
          />
        )} />
          <PrivateRoute path="/users/:id" exact component = { props => (
            <GetUser
              isUser
              { ...props }
              mobile = {this.state.mobile}
            />
          )} />
          <PrivateRoute path="/driver/:id" exact component = { props => (
            <GetUser
              isDriver
              { ...props }
              mobile = {this.state.mobile}
            />
          )} />
          <PrivateRoute path="/map" exact component = { props => (
            <Map
              { ...props }
            />
          )} />
          <Route path='/users/:id/previous' exact render = { props => (
            <MCPrevious
              {...props}
              mobile={this.state.mobile} />
          )} />
          <Route path = "/timer-test" exact component = { Timer } />
      </Router>
    )
  }
}

export default App;
