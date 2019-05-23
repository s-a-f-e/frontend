import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { update } from '../../actions';
import { Container, Column, Button, Form, Text } from '../../simple-library';


class User extends Component {
//State
  state = {
    edit: false,
    newProfile: {
      newFirstName: '',
      newLastName: '',
      newAddress: '',
      newPhoneNumber: '',
      newPassword: ''
    }
  }

//Styles
  button = {
    width: '300px',
    height: '60px',
    fontSize: '16px'
  }

  editContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  input = mobile => ({
    width: this.props.mobile ? '70vw' : '30vw',
    height: '60px',
    margin: '10px 0'
  })

  userContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }

  userColumn = mobile => ({
    display: 'flex',
    flexDirection: this.props.mobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: this.props.mobile ? 'center' : null,
    width: this.props.mobile ? '100%' : '40vw',
    height: this.props.mobile ? '100vh' : null
  })

  white = {
    color: '#fff'
  }

//Functions
  logout() {
    localStorage.clear();
    window.location.href='/';
  }

  edit = () => {
    this.setState({ edit: true})
  }

  handleChange = event => {
    this.setState({
      newProfile: {
        ...this.state.newProfile,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { newFirstName, newLastName, newAddress, newPhoneNumber, newPassword } = this.state.newProfile
    const { firstName, lastName, address, phoneNumber, password } = this.props.user

    const profile = {
      firstName: newFirstName === '' ? firstName : newFirstName,
      lastName: newLastName === '' ? lastName : newLastName,
      address: newAddress === '' ? address : newAddress,
      phoneNumber: newPhoneNumber === '' ? phoneNumber : newPhoneNumber,
      password: newPassword === '' ? password : newPassword
    }

    const id = this.props.match.params.id;

    this.props.update(`users/${id}`, profile)
    .then(() => window.location.reload())
  }

  render() {
    const {
      newFirstName,
      newLastName,
      newAddress,
      newPhoneNumber,
      newPassword
    } = this.state.newProfile

    const {
      firstName,
      lastName,
      address,
      phoneNumber,
    } = this.props.user

    const fields = [
      firstName,
      lastName,
      address,
      phoneNumber,
      "New Password"
    ]

    return (
      <>
        { this.state.edit ?
          <Container
            blue
            style = { this.editContainer }
          >
            <Form
              style = { this.editContainer }
              onSubmit = { event => this.handleSubmit(event) }
            >
              { fields.map((field, index) => (
                <>
                  <Text
                    placeholder = { field }
                    style = { this.input(this.props.mobile) }
                    name = {
                      index === 0 ? 'newFirstName' :
                      index === 1 ? 'newLastName' :
                      index === 2 ? 'newAddress' :
                      index === 3 ? 'newPhoneNumber' :
                      'newPassword'
                    }
                    value = {
                      index === 0 ? newFirstName :
                      index === 1 ? newLastName :
                      index === 2 ? newAddress :
                      index === 3 ? newPhoneNumber :
                      newPassword
                    }
                    onChange = { event => this.handleChange(event) }
                  />
                </>
              )) }
              <Button submit />
            </Form>
          </Container>
        :
          <Container
            { ...this.props }
            blue
            style={this.userContainer}
          >
            <Column style={this.userColumn(this.props.mobile)}>
              <h2 style = { this.white }>Hi, { this.props.user.firstName } !</h2>
            </Column>
            <Column style={this.userColumn(this.props.mobile)}>
                <Link to='/map'>
                  <Button default style={this.button}> Request a Ride </Button>
                </Link>
                <Link to='/drivers'><Button default style={this.button}>Browse Drivers</Button></Link>
                <Button
                  default
                  style={this.button}
                  onClick = { () => this.edit() }
                >
                  Edit Profile
                </Button>
                <Link to='/users/:id/previous'><Button default style={this.button}>Previous Trips</Button></Link>
                <Button logout onClick={() => this.logout()}/>
            </Column>
          </Container>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  id: state.updateReducer.id
})

export default connect (mapStateToProps, { update })(User)