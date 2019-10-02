import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import './Header.scss';

const Header = ({social}) => {

    const facebook = ( ) => {
        let socialData = social[0] ? social[0].acf : null;
        if ( socialData ) {
            if ( socialData.facebook !== '' ) {
                return(
                        <Nav.Link className="nav-link h3 social" href={ socialData.facebook }><IoLogoFacebook/></Nav.Link> : null
                )
            }
        }
    }

    const instagram = ( ) => {
        let socialData = social[0] ? social[0].acf : null;
        if ( socialData ) {
            if ( socialData.instagram !== '' ) {
                return(
                        <Nav.Link className="nav-link h3 social" href={ socialData.instagram }><IoLogoInstagram/></Nav.Link> : null
                )
            }
        }
    }

    return (
        <Navbar bg="white" expand="lg" className="nav-bar shadow">
        <Navbar.Brand href="#home" className="logo">Luisma</Navbar.Brand>
        <Navbar.Toggle aria-controls="luisma-navbar-nav" />
        <Navbar.Collapse id="luisma-navbar-nav">
            <Nav className="mr-auto py-0">
                <NavLink to="/" className="nav-link" activeClassName="selected">Home</NavLink>
                <NavLink to="/carpentry" className="nav-link" activeClassName="selected">Carpentry Services</NavLink>
                <NavLink to="/ac" className="nav-link" activeClassName="selected">Ac Services</NavLink>
                <NavLink to="/contactus" className="nav-link" activeClassName="selected">Contact Us</NavLink>
                <NavLink to="/testimonies" className="nav-link" activeClassName="selected">Testimonies</NavLink>
            </Nav>
            <Nav className="ml-auto d-flex flex-row">
                {instagram()}
                {facebook()}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;