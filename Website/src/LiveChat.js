import React, { Component } from 'react'
import { Container, Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import FilterOne from './FilterOne'

class LiveChat extends Component {

    render() {
        return (
            <React.Fragment>
                <Container fuild>
                    <Col>
                        <h2 class="text-center mb-3">Live Chat</h2>
                        <h5 class="text-center mb-5">Chat With A Member Of Our Team!</h5>
                        <h5 class="text-center mb-3">What is your question about?</h5>
                    </Col>
                    <Col>
                    <Link to="/FilterOne" style={{color: 'black'}}>
                        <div class="text-center"><Card>
                            <Card body>Book And Join A Tour</Card>
                        </Card>
                        </div>
                    </Link>
                    </Col>
                    <Col>
                    <Link to="/FilterOne" style={{color: 'black'}}>
                        <div class="text-center"><Card>
                            <Card body>Before And After Your Tour</Card>
                        </Card>
                        </div>
                    </Link>
                    </Col>
                    <Col>
                    <Link to="/FilterOne" style={{color: 'black'}}>
                        <div class="text-center"><Card>
                            <Card body>Tour Activities</Card>
                        </Card>
                        </div>
                    </Link>
                    </Col>
                    <Col>
                    <Link to="/FilterOne" style={{color: 'black'}}>
                        <div class="text-center"><Card>
                            <Card body>Packages and Promotions</Card>
                        </Card>
                        </div>
                    </Link>
                    </Col>
                    <div class="mt-3">
                    <Col>
                        <p class="text-center">Cancel</p>
                    </Col>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default LiveChat;


