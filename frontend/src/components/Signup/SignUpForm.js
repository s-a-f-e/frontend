import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add, login } from '../../actions';
import { Container, Form, Button, Text } from '../../simple-library';
class SignUp extends Component {

//State
  state = {
    formType: '',
    passwordConfirm: '',
    mFields: {
      mFirstName: '',
      mLastName: '',
      mPhoneNumber: '',
      mAddress: '',
      mPassword: '',
    },
    dFields: {
      dFirstName: '',
      dLastName: '',
      dPhoneNumber: '',
      dPrice: '',
      dCity: '',
      dPassword: ''
    },
    cgFields: {
      cgFirstName: '',
      cgLastName: '',
      moFirstName: '',
      moLastName: '',
      phoneNumber: '',
      address: '',
      password: '',
    },
    passwordMatch: true
  }

//Fields
  mFields = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Address",
    "Enter Password",
    "Re-Enter Password"
  ]

  dFields = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Price",
    "City",
    "Password",
    "Re-Enter Password"
  ]

  cgFields = [
    "Caregiver First Name",
    "Caregiver Last Name",
    "Mother First Name",
    "Mother Last Name",
    "Phone Number",
    "Address",
    "Enter Password",
    "Re-Enter Password"
  ]

//Functions
  componentDidMount() {
    const form = this.props.match.params.form;
    this.setState({ formType: form })
  }

  handleChange = event => {
    if(event.target.name !== 'passwordConfirm') {
      if(this.state.formType === 'mother') {
        this.setState({
          mFields: {
            ...this.state.mFields,
            [event.target.name]: event.target.value
          }
        })
      } else if(this.state.formType === 'driver') {
        this.setState({
          dFields: {
            ...this.state.dFields,
            [event.target.name]: event.target.value
          }
        })
      } else {
        this.setState({
          cgFields: {
            ...this.state.cgFields,
            [event.target.name]: event.target.value
          }
        })
      }
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
  }

  submit = event => {
    event.preventDefault();

    if(this.state.formType === 'mother') {
      const {
        mFirstName,
        mLastName,
        mAddress,
        mPhoneNumber,
        mPassword
      } = this.state.mFields;

      const profile = {
        firstName: mFirstName,
        lastName: mLastName,
        address: mAddress,
        phoneNumber: mPhoneNumber,
        password: mPassword
      }

      this.props.add(profile, true)
      .then(() => {
        const creds = {
          phoneNumber: mPhoneNumber,
          password: mPassword
        }
        return this.props.login(creds, 'users')
      })
      .then(() => localStorage.setItem('user', this.props.id))
      .then(() => localStorage.setItem('acctPath', `/users/${this.props.id}`))
      .then(() => this.props.history.push(`/users/${this.props.id}`))

    } else if(this.state.formType === 'driver') {
      const {
        dFirstName,
        dLastName,
        dPhoneNumber,
        dPrice,
        dCity,
        dPassword
      } = this.state.dFields;

      const profile = {
        firstName: dFirstName,
        lastName: dLastName,
        phoneNumber: Number(dPhoneNumber),
        price: Number(dPrice),
        city: dCity,
        password: dPassword
      }

      this.props.add(profile, false)
      .then(() => {
        const creds = {
          phoneNumber: dPhoneNumber,
          password: dPassword
        }
        return this.props.login(creds, 'driver')
      })
      .then(() => localStorage.setItem('acctPath', `/driver/${this.props.id}`))
      .then(() => this.props.history.push(`/driver/${this.props.id}`))

    } else {
      const {
        cgFirstName,
        cgLastName,
        cgAddress,
        cgPhoneNumber,
        cgPassword
      } = this.state.cgFields

      const profile = {
        firstName: cgFirstName,
        lastName: cgLastName,
        address: cgAddress,
        phoneNumber: cgPhoneNumber,
        password: cgPassword
      }

      this.props.add(profile, true)
      .then(() => {
        const creds = {
          phoneNumber: cgPhoneNumber,
          password: cgPassword
        }
        return this.props.login(creds, 'users')
      })
      .then(() => localStorage.setItem('user', this.props.id))
      .then(() => localStorage.setItem('acctPath', `/users/${this.props.id}`))
      .then(() => this.props.history.push(`/users/${this.props.id}`))
    }
  }

//Styles
  container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }

  form = mobile => ({
    width: this.props.mobile ? '100%' : null,
    display: 'flex',
    flexDirection: 'column',
    alignItems: this.props.mobile ? 'center' : null
  })

  input = {
    width: '300px',
    height: '50px',
    margin: '10px 0',
    fontSize: '14px',
    paddingLeft: '10px'
  }

  signUpHeader = {
    padding: '70px 0',
    textAlign: 'center',
    width: '100%'
  }

  signUpContainer = {
    height: '900px'
  }

  render() {
    const {
      mFirstName,
      mLastName,
      mPhoneNumber,
      mAddress,
      mPassword
    } = this.state.mFields;

    const {
      dFirstName,
      dLastName,
      dPhoneNumber,
      dPrice,
      dCity,
      dPassword
    } = this.state.dFields

    const {
      cgFirstName,
      cgLastName,
      moFirstName,
      moLastName,
      cgPhoneNumber,
      cgAddress,
      cgPassword,
      cgPasswordConfirm
    } = this.state.cgFields;

    const { passwordConfirm } = this.state;

    return (
      <Container
        gray
        style = { this.container }
        { ...this.props }
      >
        <h2>Sign up as a { this.state.formType.split('').map((a, i) => i === 0 ? a.toUpperCase() : a).join('') }</h2>
        <Form
          style = { this.form(this.props.mobile) }
          onSubmit = { event => this.submit(event) }
        >
          { this.state.formType == 'mother' ?
              this.mFields.map((field, index) => (
                <Text
                  placeholder = { field }
                  style = { this.input }
                  name = {
                    index === 0 ? 'mFirstName' :
                    index === 1 ? 'mLastName' :
                    index === 2 ? 'mPhoneNumber' :
                    index === 3 ? 'mAddress' :
                    index === 4 ? 'mPassword' :
                    'passwordConfirm'
                  }
                  value = {
                    index === 0 ? mFirstName :
                    index === 1 ? mLastName :
                    index === 2 ? mPhoneNumber :
                    index === 3 ? mAddress :
                    index === 4 ? mPassword :
                    passwordConfirm
                  }
                  onChange = { event => this.handleChange(event) }
                />
              ))
            : this.state.formType === 'driver' ?
              this.dFields.map((field, index) => (
                <Text
                  placeholder = { field }
                  style = { this.input }
                  name = {
                    index === 0 ? 'dFirstName' :
                    index === 1 ? 'dLastName' :
                    index === 2 ? 'dPhoneNumber' :
                    index === 3 ? 'dPrice' :
                    index === 4 ? 'dCity' :
                    index === 5 ? 'dPassword' :
                    'passwordConfirm'
                  }
                  value = {
                    index === 0 ? dFirstName :
                    index === 1 ? dLastName :
                    index === 2 ? dPhoneNumber :
                    index === 3 ? dPrice :
                    index === 4 ? dCity :
                    index === 5 ? dPassword :
                    passwordConfirm
                  }
                  onChange = { event => this.handleChange(event) }
                />
              ))
            : this.cgFields.map((field, index) => (
                <Text
                  placeholder = { field }
                  style = { this.input }
                  name = {
                    index === 0 ? 'cgFirstName' :
                    index === 1 ? 'cgLastName' :
                    index === 2 ? 'moFirstName' :
                    index === 3 ? 'moLastName' :
                    index === 4 ? 'cgPhoneNumber' :
                    index === 5 ? 'cgAddress' :
                    index === 6 ? 'cgPassword' :
                    'cgPasswordConfirm'
                  }
                  value = {
                    index === 0 ? cgFirstName :
                    index === 1 ? cgLastName :
                    index === 2 ? moFirstName :
                    index === 3 ? moLastName :
                    index === 4 ? cgPhoneNumber :
                    index === 5 ? cgAddress :
                    index === 6 ? cgPassword :
                    cgPasswordConfirm
                  }
                  onChange = { event => this.handleChange(event) }
                />
              ))
          }
        <Button submit/>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  // adding: state.loginReducer.loggingIn
  id: state.addReducer.id,
})

export default connect(mapStateToProps, { add, login })(SignUp)