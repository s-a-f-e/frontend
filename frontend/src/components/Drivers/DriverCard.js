import React from 'react'
 
export default function DriverCard(props) {
  const driver = {
    border: '3px solid #4f6d7a',
    width: '40vw',
    height: '50px',
    borderRadius: '10px',
    margin: '10px 0', 
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center', 
    cursor: 'pointer'
  }

  const driverName = {
    fontFamily: 'Source Sans Pro',
    fontSize: '18px'
  }

  return (
      <div
        onClick = { () => props.goTo(props.driver.id) }
        style = {driver}
      >
        <p style={driverName}>{ props.driver.firstName } {props.driver.lastName}</p>
      </div>
  )
}