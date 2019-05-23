import React from 'react';
import { Container, Text, Button, Form } from '../../simple-library';

class AddReview extends React.Component {
//Styles
  buttons = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px'
  }

  container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '1.5rem'
  }

  paragraph = {
    padding: '5px 0'
  }

  submit = {
    width: '25%',
    alignSelf: 'flex-end',
    marginTop: '10px'
  }

  render() {
    return (
      <Container
        blue
        style = { this.container }
      >
        <div>
          <p style={this.paragraph}>Driver: </p>
          <p style={this.paragraph}>Date: </p>
          <p style={this.paragraph}>Price: </p>
        </div>
        <Form>
          <div>
            <p style={this.paragraph}>Please rate your driver out of 5 stars:</p>
            <p>-- RATING --</p>
            <Text
              textarea
              cols = { 60 }
              rows = { 10 }
              placeholder="Add a review..."

            />
            <div style={this.buttons}>
              <Button cancel/>
              <Button delete/>
              <Button
                  submit
                  style = { this.submit } />
            </div>
          </div>
        </Form>
      </Container>
    )
  }
}


export default AddReview