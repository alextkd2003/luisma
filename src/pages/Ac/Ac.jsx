import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../../components/common/ContactForm/ContactForm';
import {Link} from 'react-router-dom';

const Ac = ({ac, contacts}) => {
    let data = ac[0] ? ac[0].acf : null; 
    console.log(contacts);

    return (
        <Container fluid={true}>
            <Row className="py-4 my-2">
                <Col>
                    <h2 className="text-center py-2 font-weight-light">Air Conditioner Services</h2>
                    <p>{data ? data.title : null}</p>
                    <h5>{data ? data.subtitle : null}</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card-deck mb-5">
                        <div className="card">
                            <img className="card-img-top" src={data ? data['card1-img'].url : null} alt={data ? data['card1-img'].alt : null} />
                            <div className="card-body">
                                <div dangerouslySetInnerHTML={ {__html: data ? data['card1-body'] : null }}></div>
                                <div className="flex-grow-1 d-flex justify-content-center align-items-end">
                                    <Link id="contact-us" className="btn btn-primary w-100 waves-effect waves-light" to="/contactus">Contact Us</Link>
                                </div>
                            </div>

                        </div>
                        <div className="card">
                            <img className="card-img-top" src={data ? data['card2-img'].url : null} alt={data ? data['card2-img'].alt : null} />
                            <div className="card-body">
                                <div dangerouslySetInnerHTML={ {__html: data ? data['card2-body'] : null }}></div>
                                <div className="flex-grow-1 d-flex justify-content-center align-items-end">
                                    <Link id="contact-us" className="btn btn-primary w-100 waves-effect waves-light" to="/contactus">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row className="py-4 my-2">
                <Col>
                    <ContactForm contacts={contacts}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Ac;
