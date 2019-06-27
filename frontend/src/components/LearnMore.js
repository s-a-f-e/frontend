import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

export default class LearnMore extends Component {
    render() {
        return (
            <div class = 'learn-page'>
            <div class = 'learn'>
            </div>
            <div class = 'learn-content'>

                <div class = 'learn-title'>
                    <Typography variant="h3">What does SAFE Do?</Typography>
                    <Divider variant="middle" />
                </div>
               
                
                <Typography variant="h5">When a woman or child needs medical care, three things must happen: (1) She and her family must 
                    recognize the need to get help and make the decision to seek care. (2) They must be able to physically reach
                    a health facility; and (3) The health center must provide appropriate and high-quality care. In Uganda,
                    lack of knowledge, cultural beliefs, unhealthy traditional practices, poor road infrastructure, extreme
                    poverty, supply shortages, and lack of continuing medical education combine to make pregnancy, labor,
                    delivery, and early childhood a dangerous time. 
                </Typography>
            </div>
            <div class = 'learn-content'>

                <div class = 'learn-title'>
                    <Typography variant="h3">Why SAFE Works</Typography>
                    <Divider variant="middle" />
                </div>
                
                <Typography variant="h5">
                SAFE prides itself on being evidence-based and successful. Our model is focused on the provision of
                evidence-based public health and medical interventions that are also adaptive and engage target communities
                directly in identifying and sustainably solving the problems that impact the survival of women, children,
                and families in their communities. We place significant emphasis on evaluating our work to understand what's
                working and what's not and contributing to scientific literature to push our field forward.
                </Typography>
            </div>
            <div class = 'learn-button'>
            <Link
             style={{ textDecoration: 'none'}}
              to="/">
                <Button color="primary" variant="contained">Return Home</Button>
            </Link>
            </div>
            </div>
        )
    }
}

