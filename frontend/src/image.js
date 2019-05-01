import React from 'react';
import Baby from './images/baby.jpg';
import { Grid } from '@material-ui/core';

const Image = () => {
    return ( 
        <div>
        <Grid>
            <img src={Baby} alt="" height="800" width="100%"/>
        </Grid>
        </div>
     );
}
 
export default Image;