import React from 'react';
import Hospital from './images/hospital.png';

import { Grid } from '@material-ui/core';

const Image = () => {
    return ( 
        <div>
        <Grid>
            <img src={Hospital} alt="" height="800" width="100%"/>
            
        </Grid>
        </div>
     );
}
 
export default Image;