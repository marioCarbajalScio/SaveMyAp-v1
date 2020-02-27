import React from 'react';
import sendEmail from '../services/email';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FormEmail() {

  return (
    <Row>
      <Col lg={4} md={4} sm={1} xs={1}></Col>
      <Col lg={4} md={4} sm={10} xs={10}>
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

        <Form.Group controlId="formBasicTotal">
          <Form.Label>Total</Form.Label>
          <Form.Control type="text" placeholder="Total price"  name="total"/>
        </Form.Group>

        <Button variant="primary" type="submit" value="Send">
          Submit
        </Button>
      </Form>
      </Col>
      <Col lg={4} md={4} sm={1} xs={1}></Col>
    </Row>
    
  );
}