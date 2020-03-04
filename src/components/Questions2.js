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
            selected:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
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

    guardarRespuesta=(n)=>{
        this.state.selected[this.state.nextPage]=n;
    }

    //added API func
    componentDidMount(){
        //fetch('http://10.16.0.64:3005/api')
        fetch('http://valuemyappapidev.scio.local/api')
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
                            seleccionar={this.guardarRespuesta}
                            select={this.state.selected[this.state.nextPage]}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <Link to="/" ><button className="back-btn">Back</button></Link>
                            </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        </div>
                        }
                    </div>
                )
            case 2:      
            case 3:
            case 4: 
            case 5: 
            case 6: 
            case 7: 
            case 8: 
            case 9: 
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
                            seleccionar={this.guardarRespuesta}
                            select={this.state.selected[this.state.nextPage]}
                        ></Question>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                            <div className="back-btn-cont">
                            <button className="back-btn"  onClick={(Event) => (this.rest())}>Back</button>
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
            return <h5>Loading...</h5>
        }
    }
}

export default Questions2;