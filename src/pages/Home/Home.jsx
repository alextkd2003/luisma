import React from 'react';
import {Carousel, Container, Row, Col, Card, Button} from 'react-bootstrap';
import ContactForm from '../../components/common/ContactForm/ContactForm';
import './Home.scss';

const Home = ({carousel_images, home}) => {
    return (
        <>
            <Carousel>
                {
                    carousel_images.map( (carousel,index) => 
                    <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={carousel.acf.image.url}
                                alt={carousel.acf.title}
                                />
                            <Carousel.Caption>
                            <h3>{carousel.acf.title}</h3>
                            <p>{carousel.acf.subtitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                }
            </Carousel>
            <Container fluid={true}>
                <Row className="py-4 my-2">
                    <Col>
                        <h2 className="text-center py-2 font-weight-light">Contact Us</h2>
                        <ContactForm />
                    </Col>
                </Row>
                <Row className="section-red py-4 my-2 text-align-justify">
                    <Col className="d-flex justify-content-center flex-column py-4 " xs={12} md={4}>
                        <img 
                            src={home[0] ? 
                                home[0].acf.block1_img.url : 
                                null} alt=""
                            className="img-fluid shadow rounded"
                        />
                    </Col>
                    <Col className="d-flex justify-content-center flex-column py-4 " xs={12} md={8}>
                        <h2 
                            className="text-left font-weight-light py-2">
                            { home[0] ? home[0].acf.block1_title : null }
                        </h2>
                        <p>{ home[0] ? home[0].acf.block1_text : null}</p>
                    </Col>
                </Row>
                <Row className="py-4 my-2 text-align-justify flex-md-row flex-column-reverse">
                    <Col className="d-flex justify-content-center flex-column py-4 " xs={12} md={8}>
                        <h2 
                            className="text-left font-weight-light py-2">
                            { home[0] ? home[0].acf.block2_title : null }
                        </h2>
                        <p>{ home[0] ? home[0].acf.block2_text : null}</p>
                    </Col>
                    <Col className="d-flex justify-content-center flex-column py-4" xs={12} md={4}>
                        <img 
                            src={home[0] ? 
                                home[0].acf.block2_img.url : 
                                null} alt=""
                            className="img-fluid shadow rounded"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center py-2 font-weight-light">Our Services</h2>
                    </Col>
                </Row>
                <Row className="py-4 my-2 text-align-justify justify-content-start align-items-start">
                    <Col className="d-flex justify-content-center">
                    {
                        home[0] ?
                            <Card style={{ width: '90%' }} className="shadow">
                                <Card.Img variant="top" src={home[0].acf.service1_img.url}/>
                                <Card.Body>
                                    <Card.Title>{home[0].acf.service1_title}</Card.Title>
                                    <Card.Text>
                                    {home[0].acf.service1_text}
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card> :
                            null
                    }
                    </Col>
                    <Col className="d-flex justify-content-center">
                    {
                        home[0] ?
                            <Card style={{ width: '90%' }} className="shadow">
                                <Card.Img variant="top" src={home[0].acf.service2_img.url}/>
                                <Card.Body>
                                    <Card.Title>{home[0].acf.service2_title}</Card.Title>
                                    <Card.Text>
                                    {home[0].acf.service2_text}
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card> :
                            null
                    }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
