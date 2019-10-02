import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { FaWpforms } from "react-icons/fa";
import './ContactForm.scss';

export default class ContactForm extends Component {

  state ={
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  onChange = e {

  }

  onSubmit = e => {
    console.log('post form');
  }

  render() {
    let {contacts} = this.props;

    return (
      <React.Fragment>
        <div className="contact-container d-flex flex-column align-items-center">
          <Button 
            className="form-btn"
            href={`tel:${contacts[0] ? contacts[0].acf.phonenumber : null}`}>
            By phone { contacts[0] ? contacts[0].acf.phonenumber : null }
          </Button>
          <Button 
            className="form-btn"
            href={`mailto:${contacts[0] ? contacts[0].acf.email : null}`}>
            By email { contacts[0] ? contacts[0].acf.email : null }
          </Button>
          <Button href="http://luisma-admin.aleeli.us/contact-us/" 
            className="form-btn">
            Use the Contact Form
            <FaWpforms className="icon-contact"/>
          </Button>
        </div>
        <Form className="px-0 px-md-2">
          <Form.Group controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email" onChange={  }/>
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="phone" />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button 
            variant="primary" type="submit"
            onSubmit={() => this.onSubmit()}>
              Contact Us
          </Button>
        </Form>
      </React.Fragment>
    )
  }
};

