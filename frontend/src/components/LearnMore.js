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
               
                
                <Typography variant="h5">
                Safe Mothers, Safe Babies (SAFE) believes that no woman should die while bringing life into the world,
                and that no child should die when his/her life is just beginning. We also believe in the capacity and
                ingenuity of the rural poor. Together, we partner to improve the "Three Delays" that collectively lead
                to maternal and child death. We use our innovative, community-based model to ensure that mothers and
                children in the first 1,000 days of life lead healthy, empowered lives.​
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

