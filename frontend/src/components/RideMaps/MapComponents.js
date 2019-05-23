import React from "react";
import { Button, Text, Form } from '../../simple-library'

export const RequestRide = () => {
    const requestContainer = {
        height: '175px',
        width: '300px',
        backgroundColor: '#4f6d7a',
        color: '#fff',
        borderRadius: '10px'
    }

    const estimated = {
        padding: '20px 0 0 20px'
    }

    return (
        <div style={requestContainer}>
        {/* //placeholder - estimated pickup time */}
            <p style={estimated}>Estimated Pickup Time: 6 minutes</p> 
        {/* placeholder - estimated cost  */}
            <p style={estimated}>Estimated Cost: $4.72</p>
            <Button>Request Ride</Button>
        </div>
    );
};

export class MapInput extends React.Component {
    mapInput = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#f5f5f5',
        height: '150px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value })
    }

    render() {
        return (
            <div style={this.mapInput}>
                <Form>
                    <Text
                        placeholder="Pickup Address"
                        onChange={() => this.handleInputChange()}
                    />
                    <Text
                        placeholder="Destination Address"
                        onChange={() => this.handleInputChange()}
                    />
                    <Button submit>Search Nearby</Button>
                </Form>
            </div>
        );
    }
};

export class HowLong extends React.Component { 
    howLongContainer = {
        backgroundColor: '#4f6d7a',
        height: '250px',
        width: '200px',
        borderRadius: '10px'
    }

    howLongHeader = {
        color: '#fff'
    }

    render() {
        return (
            <div style={this.howLongContainer}>
                <h4 style={this.howLongHeader}>How long would you like to wait?</h4>
                <Button>2 minutes</Button>
                <br />
                <Button>5 minutes</Button>
                <br />
                <Button>10 minutes</Button>
                <br />
            </div>
        );
    }
};

export const Searching = () => {
    const searching = {
        width: '500px',
        height: '120px',
        borderRadius: '10px',
        backgroundColor: '#4f6d7a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={this.searching}>
        <h2>Searching for Nearby Drivers...</h2>
        </div>
    );
};

export const Accepted = props => { //does cancel require state? does this need to be a class component?
    const acceptedContainer = {
        width: '100%',
        height: '180px',
        backgroundColor: '#f5f5f5',
        position: 'fixed',
        bottom: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#707070'
    }

    const section = {
        width: '25%'
    }

    return (
        <div style={this.acceptedContainer}>
        <div style={this.section}>
            <img alt="driver" src="" />
            <h4>{props.drivers.driver.name} has accepted your request.</h4>
        </div>
        <div style={this.section}>
            {/* placeholder - need to pass props here for this info */}
            <p>Pickup Location: 123 Main Street</p>
            <p>Destination: St. Mary's Hospital</p>
            <p>Estimated Pickup Time: 6 minutes</p>
            <p>Estimated Fare: $6.89</p>
        </div>
        <div style={this.section}>
            <Button cancel />
        </div>
        </div>
    );
};
export class NearbyDrivers extends React.Component {
    nearbyContainer = {
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
        backgroundColor: '#f5f5f5',
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: '20px'
    }
    nearbyDrivers = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'left',
    }
    nearbyDriver = {
        display: 'flex',
        justifyContent: 'space-between',
        border: '2px solid #e89980',
        margin: '10px',
        width: '95%',
        borderRadius: '10px',
        padding: '0 20px',
        alignItems: 'center'
    }
    handleInputChange = event => {
        this.setState({ [event.target.name ]: event.target.value})
    }
    render() {
        return (
            <div style={this.nearbyContainer}>
                <Form>
                    <Text placeholder="Your Location" onChange={() => this.handleInputChange()} />
                    <Button submit>Change Location</Button>
                </Form>
                <div style={this.nearbyDrivers}>
                    <h3>Nearby Drivers:</h3>
                    {this.props.drivers.nearby.map(driver => {
                        return (
                            <div style={this.nearbyDriver}>
                                <h4>{this.props.driver.firstName} {this.props.driver.lastName}</h4>
                                {/* placeholder - nearby mileage? */}
                                <p>1.2 miles away</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
};
export const NoneNearby = () => {
    const noneContainer = {
        width: '500px',
        height: '120px',
        borderRadius: '10px',
        backgroundColor: '#4f6d7a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div style={noneContainer}>
            <h2>No Nearby Drivers</h2>
        </div>
    );
};
export class BrowseAll extends React.Component {
    browseContainer = {
        height: '300px',
        width: '100%',
        backgroundColor: '#4f6d7a',
        position: 'fixed',
        bottom: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
    browseAll = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }
    browseDriver = {
        border: '2px solid white',
        color: '#fff',
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        margin: '10px 20px',
        borderRadius: '10px',
        alignItems: 'center'
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div style={this.browseContainer}>
                <div>
                    <Form>
                        <Text
                        placeholder="Your Location"
                        onChange={() => this.handleInputChange()}
                        />
                        <Button submit>Change Location</Button>
                    </Form>
                </div>
                <div style={this.browseAll}>
                    <h3>Browse All Drivers:</h3>
                    {this.props.drivers.map(driver => {
                        return (
                            <div style={this.browseDriver}>
                                {/* <img src='' alt='driver' /> */}
                                <h4>{this.props.drivers.driver.name}</h4>
                                <p>{this.props.drivers.driver.address}</p>
                                <p>{this.props.drivers.driver.averageRating}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
};