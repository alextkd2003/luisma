import React from 'react';
import PropTypes from 'prop-types';
import {Navbar} from 'react-bootstrap';


const HeaderUpper = ({phone})=> {
    return (
        <Navbar style={{height: '58px', backgroundColor: '#ff5252'}} className="py-0 my-0 align-items-start flex-column">
            <p className="text-white font-weight-bold p-0 m-0">Woodworking and Air Conditioning Services</p>
            <div className="d-flex justify-content-center align-items-center">
                <a className="btn btn-secondary py-0 text-uppercase shadow " 
                    style={{ fontSize: "0.8rem", background: '#ff6d00', borderColor: '#ce5801'}} href="/#">Request service</a>
                <p className="text-white pt-0 m-0 ml-2">call me at <a className="py-0 px-2 text-white shadow" style={{border: '1px solid #ec4a4a'}} href="tel:+15555555555">+1 (555) 555 5555</a></p>
            </div>
        </Navbar>
    )
}

HeaderUpper.propTypes = {
    phone: PropTypes.string.isRequired
}

export default HeaderUpper;
