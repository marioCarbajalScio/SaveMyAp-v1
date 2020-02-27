import React, {Component} from 'react';
import sendEmail from '../services/email';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './header/header'

class FormEmail extends Component {

  constructor(props){
    super(props);
    this.state = {
        //total:this.props.val
      }
  }

  render(){
    {console.log(this.props)}
    return (
      <div>
      <Header></Header>
      <Row>
        <Col lg={4} md={4} sm={1} xs={1}></Col>
        <Col lg={4} md={4} sm={10} xs={10}>
          <h1 className="body-title">We're almost done</h1>
          <h2 className="total-price">Your app total cost : {this.props.val} </h2>
          <p className="body-text">Please complete this form below to send an email with your cost and keep contact</p>
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name | Company</Form.Label>
            <Form.Control type="text" placeholder="Enter Company or Name"  name="user_name"/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text" placeholder="Total price"  name="total" value={this.props.val}/>
          </Form.Group>

          <Button variant="primary" type="submit" value="Send">
            Submit
          </Button>
        </Form>
        </Col>
        <Col lg={4} md={4} sm={1} xs={1}></Col>
      </Row>
      </div>
    );
  }
}

export default FormEmail