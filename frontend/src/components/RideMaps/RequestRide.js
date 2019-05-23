import React from 'react';
import { RequestRide, MapInput } from './MapComponents';
import Map from './Map'

export default class RequestRide extends React.Component {
    render() {
        return (
            <Container map>
                <Map />
                <RequestRide />
                <MapInput />
            </Container>
        )
    }
}