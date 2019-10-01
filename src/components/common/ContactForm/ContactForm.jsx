import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

export default class ContactForm extends Component {
  render() {
    return (
      <Form className="px-0 px-md-2">
        <Form.Group controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="phone" />
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Contact Us
        </Button>
      </Form>
    )
  }
}
