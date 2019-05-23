import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Menu from './Menu';

export class Container extends Component {
  state = {
    open: false
  }

  container = obj => ({
    height: '100vh',
    width: '100vw',
    background: this.props.blue || this.props.login ? '#4f6d7a' : this.props.home ? `url(${this.props.img})` : this.props.map ? 'none' : '#f5f5f5',
    backgroundRepeat: this.props.home ? 'no-repeat' : null,
    backgroundSize: this.props.home ? 'cover' : null,
    backgroundPosition: this.props.home ? 'center' : null,
    color: this.props.blue || this.props.login ? '#ffffff' : '#707070',
    position: 'absolute',
    top: '0',
    right: '0',
    ...obj,
  })

  open = () => {
    this.setState({ open: !this.state.open })
  }
  
  render() { console.log(this.props)
    if(this.props.home) {
      return (
        <div
          { ...this.props }
          style = { this.container(this.props.style) }
        >
          { this.props.children }
        </div>
        
      )
    } else if(this.props.login) {
      return (
        <div
          { ...this.props }
          style = { this.container(this.props.style) }
        >
          <GoBack
            about = { this.props.about } 
          />
          { this.props.children }
        </div>
      )
    } else {
      return (
        <div
          { ...this.props }
          style = { this.container(this.props.style) }
        >
          <GoBack
            about = { this.props.about }
          />
          <Hamburger 
            blue = { this.props.blue }
            open = { this.open }
            isOpen = { this.state.open }
            about = { this.props.about }
          />
          <Menu 
            open = { this.state.open }
            { ...this.props }
          />
          { this.props.children }
        </div>
      )
    }
  }
}

const GoBack = props => {
  const style = (about, blue)  => ({
    position: 'absolute',
    top: '2vh',
    left: '2vh',
    cursor: 'pointer',
    fontFamily: 'Source Sans Pro',
    color: about ? '#fff' : blue ? '#fff' : null,
    textShadow: about ? '0px 3px 6px #4f6d7a, 0px -3px 6px #4f6d7a, 3px 0px 6px #4f6d7a, -3px 0px 6px #4f6d7a' : null,
    zIndex: 10000,
    border: 'none',
    background: 'none',
    fontSize: '15px'
  })

  const goBack = () => {
    window.history.back();
  }

  if(props.about) {
    return (
      <button
        style = { style(props.about) }
        onClick = {() => goBack()} >
        &lt; go back
      </button> 
    )
  } else if(props.blue) {
    return (
      <button
        style = { style(props.blue) }
        onClick = {() => goBack()} >
        &lt; go back
      </button>
    );
  }

  else {
    return (
      <button
        style={style(style)}
        onClick={() => goBack()} >
        &lt; go back
      </button>
    )
  }
}

const Hamburger = props => {
  const container = {
    position: 'absolute',
    top: '2vh',
    right: '2vw',
    cursor: 'pointer',
    zIndex: 2001
  }
  
  const line = blue => ({
    width: '25px',
    height: '3px',
    background: blue ? '#fff' : props.about ? '#fff' : '#707070',
    margin: '4px 0'
  })

  const x = {
    color: '#4f6d7a',
  }

  return (
    <div 
      style = { container }
      onClick = { () => props.open() }
    >
      { props.isOpen ? <p style={x}>X</p> :
        <>
        <div style = { line(props.blue) }></div>
        <div style = { line(props.blue) }></div>
        <div style = { line(props.blue) }></div>
        </>
      }
    </div>
  )
}

class Menu extends Component {
  container = open => ({
    position: 'absolute',
    width: '25vw',
    height: '100vh',
    right: open ? '0' : '-25vw',
    background: '#ffffff',
    borderLeft: '1px solid white',
    transition: 'right 1s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '50px 0',
    zIndex: '2000'
  })

  style = {
    fontSize: '25px',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    color: '#4f6d7a',
    background: 'none',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer'
  }

  logOut = () => {
    localStorage.clear();
    this.props.history.push("/")
  }

  goToAccount = () => {
    this.props.history.push(localStorage.getItem('acctPath'))
  }

  render() {
    return (
      <div
        style = { this.container(this.props.open) }
      >
        <div 
          style= { this.style }
          onClick = { () => this.goToAccount() }
        >
          My Account
        </div>
        <NavLink to='/about' style= { this.style }>About</NavLink>
        <button style= { this.style } onClick={() => this.logOut()} >Log Out</button>
      </div>
    )
  }
}

export const Button = props => {
  const style = obj => ({
    background: props.cancel ? '#f5f5f5' : props.delete ? '#ED1111' : props.default ? '#4f6d7a' : props.logout ? '#ffffff' : '#e89980',
    color: props.cancel ? '#707070' : props.logout ? '#4f6d7a' : '#fff',
    border: props.cancel ? '1px solid #707070' : props.default ? '2px solid #fff' : 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    margin: '10px 0',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '14px',
    ...obj
  })

  if(props.cancel) {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        Cancel
      </button>
    )
  } else if(props.delete) {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        Delete
      </button>
    )
  } else if(props.logout) {
    return (
      <button
        {...props}
        style = { style(props.style) } >
        Log Out 
      </button>
    )
  } else if(props.submit) {
    return (
      <input 
        type="submit"
        value = { props.value }
        style = { style(props.style) }
      />
    )
  } else {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        { props.children }
      </button>
    );
  }
}

export const Text = props => {
  const style = obj => ({
    ...obj,
    borderRadius: '2px',
    border: '1px solid #e89980',
    cols: props.cols,
    rows: props.rows,
    fontSize: '16px'
  })

  if(props.textarea) {
    return (
      <textarea
        { ...props }
        style = { style(props.style) }
      >
        { props.children }
      </textarea>
    )
  } else {
    return (
      <input
        { ...props }
        style = { style(props.style) }
      />
    )
  }
}

export const Column = props => {
  const style = obj => ({
    ...obj,
    display: 'flex',
    flexDirection: 'column'
  })

  return (
    <div
      { ...props }
      style = { style(props.style) }
    >
      { props.children }
    </div>
  )
}

export const Form = props => {
  const style = obj => ({
    ...obj,
  })

  return (
    <form
      { ...props }
      style = { style(props.style) }
    >
      { props.children }
    </form>
  );
}

export const Previous = props => {
  const style = obj => ({
    ...obj, 
    width: '100%',
    height: '60px',
    border: '2px solid #e89980',
    borderRadius: '5px',
    color: '#707070',
    display: 'flex',
    flexDirection: '',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: props.profile ? '5px' : '10px 30px',
    margin: '10px 0'
  })

  if(props.profile) {
    return (
      <div
        {...props}
        style = { style(props.style) } >
        {props.children}
      </div>
    )
  }

  else {
    return (
    <div
      {...props}
      style = { style(props.style) }>
        {props.children}
    </div>
    )
  }
}


//add photo component here for stretch, w/ prop that tells it whether it's in editing or not