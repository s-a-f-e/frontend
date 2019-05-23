import React, { Component } from 'react';
import withAuth from './Login/withAuth';

export default class Reviews extends Component {
  componentDidMount() {
    withAuth()
      .get('https://ride4life.herokuapp.com/reviews')
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        reviews
      </div>
    )
  }
}