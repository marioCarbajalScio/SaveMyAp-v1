import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import sendEmail from '../services/email';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './header/header'
import swal from 'sweetalert';

import { Redirect } from 'react-router-dom'

class FormEmail extends Component {

  constructor(props){
    super(props)
    this.state={
        send: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({send:true})
    const data = new FormData(event.target);
    //console.log(data.getAll())
    const response = sendEmail(data,this.props.val).then(()=> {
      if(response){
        swal("Email sended.").then(() => {
          window.location.reload()
        });
      }
      else{
        swal("Error sending Email. :c");
        this.setState({send:false})
      }
        
    })
  }

  render(){
    return (
      <div>
      <Header></Header>
      <Row>
        <Col lg={4} md={4} sm={1} xs={1}></Col>
        <Col lg={4} md={4} sm={10} xs={10}>
          <h1 className="body-title">We're almost done</h1>
          <h2 className="total-price">Your app total cost :<br></br>${this.props.val}.00 </h2>
          <p className="body-text">Please complete this form below to send an email with your cost and keep contact</p>
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
         
          <Button variant="primary" type="submit" disabled={this.state.send}>
              Submit
          </Button>
          
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
          <Link to="/" ><Button variant="secondary">Home</Button></Link>
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