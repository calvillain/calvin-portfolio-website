// import PropTypes from 'prop-types';
import React from 'react';

export default class Logo extends React.Component {
    render() {
        const LogoStyle = {
            fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif'
        }
        return (
            <span style={LogoStyle}><i className="fa fa-barcode"></i> PORT<strong>FOLIO</strong></span>
        );
    }
}