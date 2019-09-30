import React from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../../components/common/ContactForm/ContactForm';

const Home = props => {
    return (
        <>
            <Carousel>
                {
                    props.carousel.map( (carousel,index) => 
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
                <Row>
                    <Col>
                        <h2 className="text-center pt-5 font-weight-light">Contact Us</h2>
                        <ContactForm />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="" alt=""/>
                    </Col>
                    <Col>
                        <h2 className="text-center pt-5 font-weight-light">Carpenters at work</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa mollitia, reiciendis iste ullam odio iure ipsam velit hic itaque corrupti ratione numquam ipsum repellat laudantium eius vitae repellendus ducimus?</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
