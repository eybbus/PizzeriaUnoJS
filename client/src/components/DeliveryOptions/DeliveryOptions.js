import React from 'react';
import { Link } from 'react-router-dom';

class DeliveryOptions extends React.Component {
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

export default DeliveryOptions;