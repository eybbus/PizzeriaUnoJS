import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <span className="close" onClick={() => this.props.toggle()}>&times;</span>
                    <h1>POPUS</h1>
                    <Link
                        to="/pizzas"
                        className="button">More Pizzas?</Link>
                    <Link
                        to={{
                            pathname: '/cart',
                            state: { checkout: true }
                        }}
                        className="button">checkout?</Link>
                </div>
            </div>
        );
    }
}

Popup.propTypes = {
    /* sends signal to parent to close this component */
    toggle: PropTypes.func.isRequired
};

export default Popup;