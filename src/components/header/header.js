import React, { Component } from 'react';
import './header.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <div>
                <Container className="themed-container" fluid={true}>
                    <div className="head">
                        <Row>
                            <Col md="4">
                                <a href="https://sciodev.com/"><img class="head-logo" src="https://ii.ct-stc.com/2/logos/empresas/2017/02/28/scio-consulting-sc-B6A99E5170EAF38E152336thumbnail.jpeg" alt=""/></a>
                            </Col>
                            <Col md="4">
                            </Col>
                            <Col md="4">
                                <p className="head-title">Value my App</p>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
                </style>
            </div>
        )
    }
}

export default Header;