import React, { Component } from 'react';

class Timer extends Component {
//State
  state = {
    count: 0,
    increment: 0,
    response: false
  }

//Functions
  count = num => {
    this.setState({ interval: setInterval(this.increment, 1000), count: num * 60 })
  }

  increment = () => {
    if(this.state.increment === this.state.count) {
      this.setState({ increment: 0, count: 0, interval: '' })
    } else {
      this.setState({ increment: this.state.increment + 1 })
    }
  }

//Styles
  button = {
    padding: '10px 20px',
    cursor: 'pointer'
  }

  container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative'
  }

  countText = {
    fontSize: '40px',
    position: 'absolute',
    top: '5vh',
    left: '49.5vw'
  }

  render() { console.log(this.state.increment)
    return (
      <div style = { this.container }>
      <span
        style = { this.countText } >
        { this.state.count }
      </span>
        <Button
          style = { this.button }
          begin = { this.count }
          val = { 2 }
        />
        <Button
          style = { this.button }
          begin = { this.count }
          val = { 5 }
        />
        <Button
          style = { this.button }
          begin = { this.count }
          val = { 10 }
        />
      </div>
    );
  }
}

const Button = props => {

  return (
    <button
      {...props}
      onClick = { () => props.begin(props.val) }
    >
      {props.val} mins
    </button>
  )
}

export default Timer