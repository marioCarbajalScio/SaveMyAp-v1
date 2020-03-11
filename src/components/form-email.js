import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import sendEmail from '../services/email';
//import sendEmail from '../services/nodeMail';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './header/header'
import swal from 'sweetalert';

class FormEmail extends Component {

  constructor(props){
    super(props)
    this.state={
        send: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.comas = this.comas.bind(this);
      this.regresar = this.regresar.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({send:true})
    const data = new FormData(event.target);
    const response = sendEmail(data,this.props.val,this.props.def).then(()=> {
      if(response){
        swal("Email sended.").then(() => {
          //window.location.reload()
          window.location.href = "http://valuemyappdev.scio.local";
        });
      }
      else{
        swal("Error sending Email. :c");
        this.setState({send:false})
      }
        
    })
  }

  comas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  regresar(){
    this.props.back();
  }

  render(){
    return (
      <div>
      <Header></Header>
      <Row>
        <Col lg={4} md={4} sm={1} xs={1}></Col>
        <Col lg={4} md={4} sm={10} xs={10}>
          <h1 className="body-title">We're almost done</h1>
          <h2 className="total-price">Your app estimated value :<br></br>${this.comas(this.props.val)} </h2>
          <p className="body-text">Please complete this form below to send an email with info about your app.<br></br> We will contact you as soon as possible.</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email" required disabled={this.state.send}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name | Company</Form.Label>
            <Form.Control type="text" placeholder="Enter Company or Name"  name="user_name" required disabled={this.state.send}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text" placeholder="Total price"  name="total" value={this.props.val}/>
          </Form.Group>

          <Row>
          <Col>
         
         <Button variant="secondary" onClick={this.regresar} disabled={this.state.send}>
              Back
          </Button>
          
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
          <Button variant="primary" type="submit">Submit</Button>
          </Col>
          </Row>
        </Form>
        
        </Col>
        <Col lg={4} md={4} sm={1} xs={1}></Col>
      </Row>
      </div>
    );
  }
}

export default FormEmail