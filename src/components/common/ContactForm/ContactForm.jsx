import React, { Component } from 'react';
import {Form, Button, Spinner} from 'react-bootstrap';
import './ContactForm.scss';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  sending: false,
  message_response: '',
  sending_error: false
}
export default class ContactForm extends Component {

  state ={
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    sending: false,
    message_response: '',
    sending_error: false
  }

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

   onSubmit = async e => {
    e.preventDefault();

    this.setState({
      ...this.state,
      sending: true,
      sending_error: false
    });

    let url = 'http://luisma-admin.aleeli.us/wp-json/contact-form-7/v1/contact-forms/96/feedback';

    let formData = new FormData();
    formData.append('your-name', this.state.name,);
    formData.append('your-email', this.state.email);
    formData.append('your-phone', this.state.phone);
    formData.append('your-subject', this.state.subject);
    formData.append('your-message', this.state.subject);

    let options = {
        method: 'POST',
        mode: 'cors',
        body: formData
    };
      
    try {
      let response = await fetch(url, options);
      let data = await response.json();

      this.setState({
        ...initialState,
        message_response: data.message,
      });

    } catch (error) {
      this.setState({
        ...initialState,
        error: true,
      });
    }
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
        </div>
        <Form className="px-0 px-md-2" onSubmit={this.onSubmit}>
          <Form.Group controlId="">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text" 
              placeholder="name" 
              required
              name="name"
              onChange={ this.onChange }/>
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="email" 
              required
              onChange={ this.onChange }
              name="email"/>
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="phone"
              required
              name="phone" 
              onChange={ this.onChange } />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              type="text"
              required
              name="subject"
              onChange={ this.onChange } />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea"
              rows="3"
              name="message"
              onChange={ this.onChange } />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <Button variant="primary" type="submit">
                Contact Us
            </Button>
            <Form.Label className="m-0">{ this.state.sending ? 
                            <Spinner animation="border" className="ml-2" variant="primary"/> :
                            <p className="mx-2 p-0">{this.state.message_response}</p>    
                        }</Form.Label>
            <Form.Label>{ this.state.sending_error ? <p>Please call us or send and email</p> : null }</Form.Label>
          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
};

