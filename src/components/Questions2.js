import React, { Component } from 'react';
import Question from './Question';
import FromEmail from './form-email';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Questions2 extends Component{

    constructor(props){
        super(props)
        this.state={
            nextPage:1,
            value:0,
            valores:[0,0,0,0,0,0,0,0,0,0,0],
            questions: [],
            loading: true
        };
    }

    //Info process functions
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
    if(!this.state.loading){
        switch(this.state.nextPage){
            case 1:
                return (
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><Link to="/" ><button className="back-btn">Back</button></Link></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 2:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 3:
                return(
                    <div>
                        {!this.state.loading &&
                       <div>
                       <Question 
                           page={this.state.nextPage}
                           question={this.state.questions[this.state.nextPage-1].content}
                           answers={this.state.questions[this.state.nextPage-1].answers}
                           sumar={this.sum}
                       ></Question>
                       <Row>
                           <Col md="2"></Col>
                           <Col md="8">
                           <div className="back-btn-cont">
                           <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                           </div>
                           </Col>
                           <Col md="2"></Col>
                       </Row>
                       </div>
                        }
                    </div>
                )
            case 4:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 5:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 6:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 7:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 8:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 9:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 10:
                return(
                    <div>
                        {!this.state.loading &&
                        <div>
                        <Question 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}
                            sumar={this.sum}
                        />
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <center><button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button></center>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 11:
                return(
                    <FromEmail val={this.state.value}></FromEmail>
                )
            }
        }else{
            return <div>Loading...</div>
        }
    }
}

export default Questions2;