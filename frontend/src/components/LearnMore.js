import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class LearnMore extends Component {
    render() {
        return (
            <div class = 'learn-page'>
            <div class = 'learn'>
            </div>
            <div class = 'learn-content'>
                <div class = 'learn-title'><Typography variant="h3">What does SAFE Do?</Typography></div>
                
                <Typography variant="h5">When a woman or child needs medical care, three things must happen: (1) She and her family must 
                    recognize the need to get help and make the decision to seek care. (2) They must be able to physically reach
                    a health facility; and (3) The health center must provide appropriate and high-quality care. In Uganda,
                    lack of knowledge, cultural beliefs, unhealthy traditional practices, poor road infrastructure, extreme
                    poverty, supply shortages, and lack of continuing medical education combine to make pregnancy, labor,
                    delivery, and early childhood a dangerous time. Delays in these actions are what is called the "Three
                    Delays" model, and are what SAFE works to address.
                </Typography>
            </div>
            </div>
        )
    }
}

