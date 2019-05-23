import React from 'react';
import { Searching, HowLong, MapInput } from './MapComponents';
import Map from './Map';

export default class Searching extends React.Component {
    render() {
        return (
            <Container map>
                <Map />
                <Searching />
                <HowLong />
                <MapInput />
            </Container>
        )
    }
}