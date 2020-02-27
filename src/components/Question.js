import React, { Component } from 'react';

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
    const {question}=this.props;
    return(
        <div>
            <Header></Header>
            
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.props.page} of 10</header>
                            <h1 className="body-title">{this.props.question}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    {this.props.answers.map((ans,i) =>(
                                        <Col sm="12" md="12" lg key={i}>
                                            <div className="opt">
                                                <button className="opt-btn" onClick={(Event)=>(this.props.sumar(ans.value))}>{ans.content}</button>
                                            </div>
                                        </Col>
                                    ))}
                                    </Row>
                                </Col>
                            </Row>
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