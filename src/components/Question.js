import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './header/header.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Question extends Component{

    constructor(props){
        super(props);
        this.state = {
            page:this.props.page,
            value:this.props.value,
            question:this.props.question,
            answers:this.props.answers
        }
    }

    render(){
    return(
        <div>
            <Header></Header>
            
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.page} of 10</header>
                            <h1 className="body-title">{this.state.question}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    {this.answers.map((ans,i) =>(
                                        <Col sm="12" md="12" lg="3">
                                            <div className="opt">
                                                <button className="opt-btn" onClick={(Event)=>(this.props.sum(ans.value))}>{ans.content}</button>
                                            </div>
                                        </Col>
                                    ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                   
                    <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                        <div className="back-btn-cont">
                        <center><Link to="/" ><button className="back-btn">Back</button></Link></center>
                        </div>
                        </Col>
                        <Col md="2"></Col>

                    </Row>

                    <br></br> 
                    {this.state.value}
                    </div>
                    </Container>

                    <style>
                    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
                    </style>
                    </div>
                </div>
        )
    }
}

export default Question