import PropTypes from 'prop-types';
import React from 'react';

export default class Grayscale extends React.Component {
    static propTypes = {};

    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
        this.state = { name: this.props.name };
    }

    render() {
        const LogoStyle = {
            fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif'
        }
        return (
            <React.Fragment>
                <span style={LogoStyle}><i className="fa fa-barcode"></i> PORT<strong>FOLIO</strong></span>
            </React.Fragment>
        );
    }
}