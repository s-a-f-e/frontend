    
import React from 'react';
import { NoneNearby, BrowseAll } from './MapComponents';
import Map from './Map'

class NoDrivers extends React.Component {
    render() {
        return (
            <Container map>
                <Map />
                <NoneNearby />
                <BrowseAll />
            </Container>
        )
    }
}

export default NoDrivers;