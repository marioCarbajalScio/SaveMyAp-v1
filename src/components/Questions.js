import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './header/header.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import FormEmail from './form-email';

class Questions extends Component{

    constructor(props){
        super(props);
        this.state={
            nextPage:1,
            value:0,
            previusVal:0,
            valores:[0,0,0,0,0,0,0,0,0,0,0],
            questions: [],
            loading: true,
        };
    }

    sum=(value)=>{
        this.state.valores[this.state.nextPage]=value
        this.cambiarContador(this.state.value+value)
        this.cambiarPagina(this.state.nextPage+1)
     }
 
     rest=()=>{
        
        this.cambiarContador(this.state.value-this.state.valores[this.state.nextPage-1])
        this.cambiarPagina(this.state.nextPage-1)
     }

     cambiarContador=(n)=>{
         this.setState({value:n})
     }

     cambiarPagina=(n)=>{
        this.setState({nextPage:n})
    }

    //added API func
    componentDidMount(){
        fetch('http://10.16.0.64:1337/api')
        .then(res => res.json())
        .then((data) => {
            this.setState({questions:data.questions, loading:false})
        })
        .catch(console.log)
    }

    render(){
        if(this.state.nextPage===1){
            //Question #1
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                    </div>}
                </div>
            );

            // question #2
        }else if(this.state.nextPage===2){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[1].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[1].answers[0].value))}>{this.state.questions[1].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[1].answers[1].value))}>{this.state.questions[1].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[1].answers[2].value))}>{this.state.questions[1].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[1].answers[2].value)}>{this.state.questions[1].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );

            //Question #3
        }else if(this.state.nextPage===3){

            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );

         //Question #4
        }else if(this.state.nextPage===4){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );
        
        // Question #5
        }else if(this.state.nextPage===5){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div >
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );
        
        //Question #6
        }else if(this.state.nextPage===6){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div >
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );

        //Question #7
        }else if(this.state.nextPage===7){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div >
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );

        //Question #8
        }else if(this.state.nextPage===8){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );

        //Question #9
        }else if(this.state.nextPage===9){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}><span>Back</span></button></center>
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
                    </div>}
                </div>
            );

        //Question #10
        }else if(this.state.nextPage===10){
            return(
                <div>
                     <Header></Header>
                    {!this.state.loading &&
                <div>
                    <Container className="themed-container" fluid={true}>
                    <div>
                        <Row> 
                            <Col md="12"> 
                            <header className="header-text-questions"> Question {this.state.nextPage} of 10</header>
                            <h1 className="body-title">{this.state.questions[0].content}</h1>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="2"></Col>
                        <Col  md="8">
                            <Row>
                                <Col md="12">
                                    <Row>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[0].value))}>{this.state.questions[0].answers[0].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[1].value))}>{this.state.questions[0].answers[1].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.sum(this.state.questions[0].answers[2].value))}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
                                    <Col sm="12" md="12" lg="3">
                                    <div className="opt">
                                    <button className="opt-btn" onClick={(Event)=>(this.state.questions[0].answers[2].value)}>{this.state.questions[0].answers[2].content}</button>
                                    </div>
                                    </Col>
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
                        <center><button className="back-btn" onClick={(Event) => (this.rest())}>Back</button></center>
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
                    </div>}
                </div>
            );

        }else if(this.state.nextPage===11){
            ///Poner formulario de correo
            //Precio final en el div
            return(
                <div>
                    <FormEmail val={this.state.value}></FormEmail>
                </div>
                
            )
            
        }
        
    }
}

export default Questions;