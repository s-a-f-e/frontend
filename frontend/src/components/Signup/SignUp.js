import React, { Component } from 'react'
import { Container, Button } from '../../simple-library';
import { Link } from 'react-router-dom'

class SignUp extends Component {

//Styles
  button = mobile => ({
    width: this.props.mobile ? '80vw' : '20vw',
    margin: this.props.mobile ? null : '20px 0',
    cursor: 'pointer'
  })

  buttons = {
    display: 'flex',
    flexDirection: 'column'
  }

  header = mobile => ({
    color: '#fff',
    marginBottom: '20px',
    textAlign: this.props.mobile ? 'center' : null,
    width: this.props.mobile ? '100%' : null
  })

  iAm = {
    display: 'flex',
    flexDirection: 'column'
  }

  iAmHeader = mobile => ({
    color: '#fff',
    fontSize: '30px',
    textAlign: this.props.mobile ? 'center' : null,
    paddingBottom: this.props.mobile ? '20px' : null
  })

  link = {
    textDecoration: 'none',
    color: '#e89980'
  }

  paragraph = {
    textAlign: 'center',
    paddingBottom: '30px'
  }

  signUpContainer = mobile => ({
    display: 'flex',
    flexDirection: this.props.mobile ? 'column' : 'row',
    justifyContent: this.props.mobile ? 'center' : 'space-around',
    alignItems: 'center'
  })

  render() {
    return (
      <Container
        blue
        style={ this.signUpContainer(this.props.mobile) }
        { ...this.props }
      >
        <div>
          <h2 style={ this.header(this.props.mobile) }>Sign Up</h2>
          <p>Already have an account? Log in <Link to='/login' style={this.link}>here</Link>.</p>
        </div>
        <div style={this.iAm}>
        <h2 style={ this.iAmHeader(this.props.mobile) }>I am a...</h2>
          <div style={this.buttons}>
            <Link to="/signup/driver">
              <Button style={ this.button(this.props.mobile) }>Driver</Button>
            </Link>
            <Link to="signup/mother">
              <Button style={ this.button(this.props.mobile) }>Mother</Button>
            </Link>
            <Link to="signup/caregiver">
              <Button style={ this.button(this.props.mobile) }>Caregiver</Button>
            </Link>
          </div>
        </div>
      </Container>
    )
  }
}

export default SignUp