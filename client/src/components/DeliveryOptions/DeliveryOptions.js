import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class DeliveryOptions extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <span className="close" onClick={() => this.props.toggle()}>&times;</span>
                    <h1>Do you want to pick up your pizza yourselft or be shameless and get it delivered?</h1>
                    <Link
                        to={{
                            pathname: '/Cart/Checkout',
                            state: { linkState: 'pickup' }
                        }}
                        className="button"> 
                        Pickup!
                    </Link>
                    <Link
                        to={{
                            pathname: '/Cart/Checkout',
                            state: { linkState: 'delivery' }
                        }}
                        className="button"> 
                        Deliver!
                    </Link>
                </div>
            </div>
        );
    }
}

DeliveryOptions.propTypes = {
    /* closes the popup */
    toggle: PropTypes.func.isRequired
};

export default DeliveryOptions;