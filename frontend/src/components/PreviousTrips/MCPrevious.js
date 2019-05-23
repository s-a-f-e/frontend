import React from 'react';
import { Container, Previous, Button } from '../../simple-library';

import { Link } from 'react-router-dom'

class MCPrevious extends React.Component {
    reviewButton = {
        height: '35px',
        marginRight: '20px',
        alignSelf: 'center'
    }

    render() {
        return (
            <Container>
                {this.props.user.previous.map(previous => {
                    return (
                        <Previous>
                            <div style={this.previousText}>
                                <p>{this.props.user.previous.firstName} {this.props.user.previous.lastName}</p>
                                <p>{this.props.user.previous.date}</p>
                                {this.props.user.previous.reviewCompleted ? <p>Rating: {this.props.user.previous.rating}</p> : <p>Review Not Started</p>}
                                <p>Cost: {this.props.user.previous.cost}</p>
                            </div>
                            {this.props.user.previous.reviewCompleted
                                ? <Link to=''><Button
                                    style={this.reviewButton}>Edit Review</Button></Link>
                                : <Link to=''><Button
                                    style={this.reviewButton}>Begin Review</Button></Link>
                            }
                        </Previous>
                    )
                })}
            </Container>
        )
    }
}

export default MCPrevious