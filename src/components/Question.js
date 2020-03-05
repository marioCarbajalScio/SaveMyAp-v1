import React, { Component } from 'react';

import Header from './header/header.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Question extends Component{

    state = {
        class:'opt-btn',
        class2:"opt-btn-selected",
        selected: this.props.select
        //.opt-btn-selected
    }

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(val,i) {
        this.props.sumar(val);
        this.props.seleccionar(i);
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
                                                <button className={i === this.props.select ? this.state.class2 : this.state.class} onClick={(Event)=>(this.handleClick(ans.value,i))}>{ans.content}</button>
                                            </div>
                                        </Col>
                                    ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
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