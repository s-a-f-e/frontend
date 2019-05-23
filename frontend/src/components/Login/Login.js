import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { login } from '../../actions';
import { Container, Text, Column, Form, Button } from '../../simple-library';

class Login extends Component {
  state = {
    isUser: true,
    credentials: {
      phoneNumber: '',
      password: ''
    }
  }

//Styles
  column = {
    height: '40vh',
    width: '35vw',
    justifyContent: 'space-around'
  }

  container = mobile => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: this.props.mobile ? 'column' : 'row',
    width: this.props.mobile ? '100%' : null,
    height: this.props.mobile ? '100%' : null,
  })

  header = mobile => ({
    color: '#ffffff',
    paddingBottom: this.props.mobile ? '20px' : null
  })

  input = {
    padding: '15px 5px',
    width: '100%',
    borderRadius: '10px',
    fontSize: '14px',
    margin: '20px 0',
  }

  link = {
    textDecoration: 'none',
    color: '#e89980',
    cursor: 'pointer'
  }

  login = mobile => ({
    display: this.props.mobile ? 'flex' : null,
    flexDirection: this.props.mobile ? 'column' : null,
    justifyContent: this.props.mobile ? 'center' : null
  })

  under = {
    fontSize: '1rem',
    paddingBottom: '30px'
  }

  // methods
  login = event => {
    event.preventDefault();
    if(this.state.isUser) {
      this.props.login(this.state.credentials, 'users')
        .then(() => localStorage.setItem('user', this.props.id))
        .then(() => localStorage.setItem('acctPath', `/users/${this.props.id}`))
        .then(() => this.props.history.push(`/users/${this.props.id}`))
    } else {
      this.props.login(this.state.credentials, 'driver')
        .then(() => localStorage.setItem('acctPath', `/driver/${this.props.id}`))
        .then(() => this.props.history.push(`/driver/${this.props.id}`))
    }
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  // render
  render() {
    const { phoneNumber, password } = this.state.credentials;
      if(this.props.loggingIn) {
        return <div>logging in, temp</div>
      } else {
        return (
          <Container
            login
            style = { this.container(this.props.mobile) }
          >
            <Column
              style = { this.column }
            >
              { this.state.isUser ?
                <>
                  <h2 style={ this.header(this.props.mobile) }>Log In</h2>
                  <p style = { this.under }>Don't have an account? Sign up <Link to='/signup' style={this.link}>here</Link>.</p>
                  <div></div>
                </>
              :
                <>
                  <h2 style = {this.header}>Driver Login</h2>
                  <div></div>
                  <div></div>
                </>
              }
            </Column>
            <Form
              onSubmit = { this.login }
              style = { this.login(this.props.mobile) }
            >
              <Column
                style = {{
                  ...this.column,
                  alignItems: 'center'
                }}
              >
                <Text
                  name="phoneNumber"
                  type="text"
                  value = { phoneNumber }
                  placeholder="Phone Number"
                  style = { this.input }
                  onChange = { this.handleChange }
                />
                <Text
                  name="password"
                  type="password"
                  value = { password }
                  placeholder="Password"
                  style = { this.input }
                  onChange = { this.handleChange }
                />
                <Button
                  submit
                  style = {{
                    width: '50%'
                  }}
                >
                  Log In
                </Button>
              </Column>
            </Form>
            { this.state.isUser ?
              <div style={{
                color: '#fff',
                position: 'absolute',
                bottom: '5px',
                width: '100vw',
                textAlign: 'center',
                fontFamily: 'Source Sans Pro'
              }}><span>Are you a Ride4Life Driver? Log in <span
              style={this.link}
              onClick = { () => this.setState({ isUser: false }) }
              >here</span>.</span></div>
            :
              null
            }
          </Container>
        )
    }
  }
}
const mapStateToProps = state => ({
  loggingIn: state.loginReducer.loggingIn,
  id: state.loginReducer.id,
  userType: state.loginReducer.userType
})
export default connect(mapStateToProps, { login })(Login)