import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import './Footer.scss';

const Footer = () => {
    return (
        <Navbar className="nav-bar-footer d-flex flex-column justify-content-center align-items-center">
          <Nav className="py-0 d-flex flex-column flex-sm-row text-center">
              <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Carpentry Services</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Ac Services</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Contact Us</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Testimonies</Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link className="nav-link h3" href="#link"><IoLogoInstagram/></Nav.Link>
            <Nav.Link className="nav-link h3" href="#link"><IoLogoFacebook /></Nav.Link>
          </Nav>
          <p>©&nbsp;{new Date().getFullYear()}&nbsp;Luisma</p>
        </Navbar>
    )
}

export default Footer
