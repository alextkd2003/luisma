import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../../components/common/ContactForm/ContactForm';

export default class ContactUs extends Component {
    render() {
        let {contacts} = this.props;
        return (
            <Container fluid={true}>
                <Row className="py-4 my-2">
                    <Col>
                        <h2 className="text-center py-2 font-weight-light">Contact Us</h2>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <h5 className="text-left">You can reach us using differents methods:</h5>
                            <ul className="list-unstyled">
                                <li>Via email at { contacts[0] ? contacts[0].acf.email : null }</li>
                                <li>Via phone at { contacts[0] ? contacts[0].acf.phonenumber : null }</li>
                            </ul>
                            <h5 className="mt-4"><strong>Contact Us</strong></h5>
                        </div>
                        
                        <ContactForm contacts={contacts} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
