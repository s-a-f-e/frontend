import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { Container, Button } from '../../simple-library';

class Homepage extends Component {
  state = {
    signUpHover: false,
    logInHover: false,
    signUpClick: false,
    logInClick: false
  }

//Functions
  componentDidMount() {
    window.addEventListener('click', () => this.windowClick())
    this.windowClick()
  }

  openForm = form => {
    this.props.history.push(`signup/${form}`)
  }

  openLogin = event => {
    event.stopPropagation();
    this.setState({ logInclick: true })
  }

  openSignup = event => {
    event.stopPropagation();
    this.setState({ signUpClick: true })
  }

  windowClick = () => {
    this.setState({ logInclick: false, signUpClick: false })
  }

//Styles
  buttons = mobile => ({
    width: '100%',
    display: 'flex',
    flexDirection: this.props.mobile ? 'column' : 'row',
    alignItems: this.props.mobile ? 'center' : null
  })

  container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  header = mobile => ({
    fontSize: '4rem',
    color: 'white',
    textAlign: 'center',
    width: this.props.mobile ? '90%' : '100%',
    margin: this.props.mobile ? '200px 0 0' : null
  })

  mainBtn = {
    background: 'none',
    border: '2px solid #fff',
    width: '250px',
    height: '60px',
    fontSize: '17px',
    fontWeight: '600',
    margin: '30px',
    cursor: 'pointer'
  }

  openLoginTop = {
    width: '30vh',
    margin: '10px 20px'
  }

  openSignupTop = {
    width: '20vh',
    margin: '10px'
  }

  signUpHover = {
    display: 'flex',
    flexDirection: 'column'
  }

  signUpTop = {
    height: '50px',
    width: '150px',
    fontSize: '15px',
    margin: '10px'
  }

  top = mobile => ({
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    flexDirection: this.props.mobile ? 'column' : null,
    alignItems: this.props.mobile ? 'center' : null,
    width: '100%'
  })

  topButton = {
    width: '70vw',
    margin: '10px auto'
  }

  topBtn = {
    backgroundColor: 'rgba(225,225,225,0.7)',
    color: '#4f6d7a',
    border: '1px solid white',
    width: '150px',
    height: '50px',
    margin: '10px',
    fontSize: '15px',
    textAlign: 'center'
  }

  render() {
      return (
        <Container
          home
          img = { require('../../assets/views/home.jpeg') }
          style = { this.container } >
          <div style={ this.top(this.props.mobile) }>
            <Link to="/login">
              <Button
                style = { this.topBtn }>
                Log In
              </Button>
            </Link>
            <div
              onMouseEnter = { this.state.signUpHover ? null : () => this.setState({ signUpHover: true }) }
              onMouseLeave = { this.state.signUpHover ? () => this.setState({ signUpHover: false }) : null } >
              { this.state.signUpHover
                ? <div style = { this.signUpHover }>
                  <Button
                    style = { this.topBtn }
                    onClick = { () => this.openForm('driver') }>
                    Driver
                  </Button>
                  <Button
                    style = { this.topBtn }
                    onClick = { () => this.openForm('mother') }>
                    Mother
                  </Button>
                  <Button
                    style = { this.topBtn }
                    onClick = { () => this.openForm('caregiver') }>
                    Caregiver
                  </Button>
                </div>
              : <Button style={ this.signUpTop }>Sign Up</Button>
              }
            </div>
          </div>
          <div>
            <h1 style={ this.header(this.props.mobile) }>Welcome to the New Standard of Care</h1>
          </div>
          <div style={ this.buttons(this.props.mobile) }>
            <Link to='/about'>
              <Button
                style = { this.mainBtn }>
                Learn More
              </Button>
            </Link>
            <Link to = "/signup">
              <Button
                style = { this.mainBtn }>
                Sign Up
              </Button>
            </Link>
          </div>
        </Container>
      );
    }
  };

export default Homepage;