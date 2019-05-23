import React, { Component } from 'react';
import { connect } from 'react-redux';

import { get } from '../../actions';
import User from './User';
import Driver from './Driver';

class GetUser extends Component {
  // CDM
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.isUser ? this.props.get(id, 'users') : this.props.get(id, 'driver');
  }

  // render
  render() {
    return (
      this.props.isUser 
      ?
        <User 
          user = { this.props.user }
          mobile = {this.props.mobile}
          { ...this.props }
        />
      :
        <Driver 
          driver = { this.props.user }
          mobile = {this.props.mobile}
          { ...this.props }
        />
    )
  }
}


const mapStateToProps = state => {
  const { user, fetchingUser, error } = state.getReducer
  return {
    user,
    fetchingUser,
    error
  }
}

export default connect(mapStateToProps, { get })(GetUser)