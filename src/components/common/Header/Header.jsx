import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import './Header.scss';

export default class Header extends React.Component  {

    componentDidMount() {
        document.addEventListener( 'scroll', () =>{

        } )        
    }

    render() {
        return (
            <Navbar bg="white" expand="lg" className="nav-bar shadow">
            <Navbar.Brand href="#home" className="logo">Luisma</Navbar.Brand>
            <Navbar.Toggle aria-controls="luisma-navbar-nav" />
            <Navbar.Collapse id="luisma-navbar-nav">
                <Nav className="mr-auto py-0">
                    <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#link">Carpentry Services</Nav.Link>
                    <Nav.Link className="nav-link" href="#link">Ac Services</Nav.Link>
                    <Nav.Link className="nav-link" href="#link">Contact Us</Nav.Link>
                    <Nav.Link className="nav-link" href="#link">Testimonies</Nav.Link>
                </Nav>
                <Nav className="ml-auto d-flex flex-row">
                    <Nav.Link className="nav-link h3 social" href="#link"><IoLogoInstagram/></Nav.Link>
                    <Nav.Link className="nav-link h3 social" href="#link"><IoLogoFacebook /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
