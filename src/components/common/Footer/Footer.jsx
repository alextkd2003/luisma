import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import './Footer.scss';

const Footer = ({social}) => {

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
      <Navbar className="nav-bar-footer d-flex flex-column justify-content-center align-items-center">
        <Nav className="py-0 d-flex flex-column flex-sm-row text-center">
            <NavLink to="/" className="nav-link" activeClassName="selected">Home</NavLink>
            <NavLink to="/carpentry" className="nav-link" activeClassName="selected">Carpentry Services</NavLink>
            <NavLink to="/ac" className="nav-link" activeClassName="selected">Ac Services</NavLink>
            <NavLink to="/contactus" className="nav-link" activeClassName="selected">Contact Us</NavLink>
            <NavLink to="/testimonies" className="nav-link" activeClassName="selected">Testimonies</NavLink>
        </Nav>
        <Nav className="">
              {instagram()}
              {facebook()}
        </Nav>
        <p>©&nbsp;{new Date().getFullYear()}&nbsp;Luisma</p>
      </Navbar>
  )
}

export default Footer
