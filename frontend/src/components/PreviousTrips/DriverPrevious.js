import React from 'react';
import { Previous, Button, Container } from '../../simple-library';


class DriverPrevious extends React.Component {
    state = {
        seeReview: false
    }

    previousText = {
        paddingLeft: '20px'
    }

    render() {
        return (
            <Container>
                {this.props.driver.previous.map(previous => {
                    return (
                        <Previous>
                            <div style={this.previousText}>
                                <p>{this.props.driver.previous.firstName} {this.props.driver.previous.lastName}</p>
                                <p>{this.props.driver.previous.date}</p>
                                {this.props.driver.previous.reviewCompleted ? <p>Rating: {this.props.driver.previous.rating}</p> : <p>Review Pending</p>}
                                <p>Price: {this.props.driver.previous.price}</p>
                            </div>
                            {/* {this.props.driver.previous.reviewCompleted 
                                ?  <SeeReview />
                                : null } */}
                        </Previous>
                    )
                })}
            </Container>
        )
    } 
}

export default DriverPrevious

const SeeReview = props => {
    const reviewButton = {
        height: '35px',
        marginRight: '20px',
        alignSelf: 'center'
    }

    const seeReview = () => {
        this.setState({ seeReview: !this.state.seeReview })
    }

    if (props.seeReview) {
        return (
            <div> 
                <h3>{props.driver.previous.firstName}</h3>
                <p>Rating: {props.driver.previous.rating}</p>
                <p>{props.driver.previous.review}</p>
            </div>
        )
    }
    else {
        return (
            <Button 
                style={reviewButton} 
                review={props.seeReview} 
                // onClick={() => seeReview()}
                > 
            See Review </Button>
        )
    }
}