    
import React from 'react';
import Map from './Map';
import { Accepted } from './MapComponents';

export default class RideAccepted extends React.Component {
    render() {
        return (
            <>
            <Map />
            <Accepted />
            </>
        )
    }
}