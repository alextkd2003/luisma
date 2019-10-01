import React from 'react';
import PropTypes from 'prop-types';
import {Navbar} from 'react-bootstrap';
import './HeaderUpper.scss';

const HeaderUpper = ({contacts})=> {
    return (
        <Navbar style={{}} className="py-0 my-0 align-items-start flex-column header-upper d-xs-none d-none d-sm-block">
            <p className="text-white font-weight-bold p-0 m-0">Woodworking and Air Conditioning Services</p>
            <div className="d-flex justify-content-start align-items-center">
                <a className="btn btn-secondary py-0 text-uppercase shadow " 
                    style={{ fontSize: "0.8rem", background: '#ff6d00', borderColor: '#ce5801'}} href="/#">Request service</a>
                <p className="text-white pt-0 m-0 ml-2">call me at <a className="py-0 px-2 text-white shadow" style={{border: '1px solid #ec4a4a'}} href="tel:+15555555555">{ contacts[0] ? contacts[0].acf.phonenumber : null }</a></p>
            </div>
        </Navbar>
    )
}

HeaderUpper.propTypes = {
    phone: PropTypes.string
}

export default HeaderUpper;
