import React, { Component } from 'react';
import {IoIosHappy} from 'react-icons/io';
import {Container, Row, Col} from 'react-bootstrap';
import './Testimonies.scss';

const Testimonies =({testimonies}) => {
    return (
        <Container fluid={true}>
            <Row className="py-4 my-2">
                <Col>
                    <h2 className="text-center py-2 font-weight-light">Testimonials</h2>
                </Col>
            </Row>
            <Row className="py-4 my-2">
                <Col>
                    {
                    testimonies[0] ? 
                        <ul className="list-group">
                            {
                                testimonies.map(testimony => 
                                    <li key={testimony.id} className="list-group-item d-flex">
                                        <IoIosHappy className="icon" />
                                        <blockquote className="blockquote m-0">
                                            <p className="blockquote-footer">
                                                {testimony.acf.testimony}
                                            </p>
                                            <p className="blockquote-footer text-right">{testimony.acf.author}</p>
                                        </blockquote>
                                    </li>
                                )
                                
                            }
                        </ul> : null
                    }
                </Col>
            </Row>
        </Container>
    )

}

export default Testimonies;
