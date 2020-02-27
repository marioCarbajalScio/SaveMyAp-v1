import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <div>
                <Container className="themed-container" fluid={true}>
                    
                        <Row>
                            <Col xs="5" sm="5" md="4" lg="4">
                                <a href="https://sciodev.com/"><img class="head-logo" src="https://ii.ct-stc.com/2/logos/empresas/2017/02/28/scio-consulting-sc-B6A99E5170EAF38E152336thumbnail.jpeg" alt=""/></a>
                            </Col>
                            <Col xs="1" sm="1" md="4" lg="4">
                            </Col>
                            <Col xs="6" sm="6" md="4" lg="4">
                                <p className="head-title">Value my App</p>
                            </Col>
                        </Row>
                    
                </Container>

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
                </style>
            </div>
        )
    }
}

export default Header;